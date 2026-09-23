import { useState } from "react";
import { Download } from "lucide-react";
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function PDFExportButton({ className = "", children }) {
  const resume = useSelector((state) => state.resume);

  const [exporting, setExporting] = useState(false);

  const waitForPaint = () =>
    new Promise((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(resolve);
      });
    });

  const handleExportPDF = async () => {
    if (exporting) return;

    let exportContainer = null;

    try {
      setExporting(true);

      const source = Array.from(
        document.querySelectorAll(".resume-pdf-document"),
      ).find((element) => {
        const styles = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();

        return (
          styles.display !== "none" &&
          styles.visibility !== "hidden" &&
          rect.width > 0 &&
          rect.height > 0
        );
      });

      if (!source) {
        throw new Error("Resume document not found.");
      }

      const name = resume?.personal?.fullName?.trim() || "";

      const safeName = name
        .replace(/[^a-z0-9]/gi, "_")
        .replace(/_+/g, "_")
        .replace(/^_+|_+$/g, "");

      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      await waitForPaint();

      /*
       * Create a fixed A4 export copy.
       * This prevents the screen's responsive scaling/transform
       * from affecting the generated PDF.
       */
      exportContainer = document.createElement("div");

      Object.assign(exportContainer.style, {
        position: "fixed",
        left: "-100000px",
        top: "0",
        width: "210mm",
        height: "297mm",
        overflow: "hidden",
        background: "#ffffff",
        zIndex: "9999",
        pointerEvents: "none",
      });

      const clone = source.cloneNode(true);

      Object.assign(clone.style, {
        position: "relative",
        left: "0",
        top: "0",
        width: "210mm",
        minWidth: "210mm",
        height: "297mm",
        minHeight: "297mm",
        maxWidth: "none",
        maxHeight: "none",
        transform: "none",
        transformOrigin: "top left",
        margin: "0",
        overflow: "hidden",
        background: "#ffffff",
      });

      exportContainer.appendChild(clone);
      document.body.appendChild(exportContainer);

      await waitForPaint();

      const images = Array.from(clone.querySelectorAll("img"));

      await Promise.all(
        images.map((image) => {
          if (image.complete) {
            return Promise.resolve();
          }

          return new Promise((resolve) => {
            image.addEventListener("load", resolve, { once: true });
            image.addEventListener("error", resolve, { once: true });
          });
        }),
      );

      await waitForPaint();

      const width = clone.scrollWidth;
      const height = clone.scrollHeight;

      if (!width || !height) {
        throw new Error("Invalid resume dimensions.");
      }

      const exportScale = Math.min(
        4,
        Math.max(3, window.devicePixelRatio || 1),
      );

      const canvas = await html2canvas(clone, {
        scale: exportScale,
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#ffffff",

        width,
        height,

        windowWidth: width,
        windowHeight: height,

        x: 0,
        y: 0,

        scrollX: 0,
        scrollY: 0,

        logging: false,
        imageTimeout: 15000,
        removeContainer: true,
      });

      const imageData = canvas.toDataURL("image/png", 1.0);

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      });

      pdf.addImage(imageData, "PNG", 0, 0, 210, 297, undefined, "FAST");

      pdf.save(safeName ? `${safeName}_Resume.pdf` : "Resume.pdf");
    } catch (error) {
      console.error("PDF export error:", error);

      alert(
        error instanceof Error && error.message
          ? error.message
          : "PDF export failed. Please try again.",
      );
    } finally {
      if (exportContainer?.parentNode) {
        exportContainer.parentNode.removeChild(exportContainer);
      }

      setExporting(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleExportPDF}
      disabled={exporting}
      className={`${className} ${exporting ? "cursor-wait opacity-60" : ""}`}
    >
      <Download size={14} />

      {children || (exporting ? "Exporting..." : "Export PDF")}
    </button>
  );
}

export default PDFExportButton;
