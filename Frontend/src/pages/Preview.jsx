import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { useRef, useState } from "react";

import { ArrowLeft, Download, Edit3, Printer } from "lucide-react";

import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

import html2pdf from "html2pdf.js";

function Preview() {
  const resume = useSelector((state) => state.resume);

  const selectedTemplate = resume?.template || "modern";

  const personal = resume?.personal || {};
  const education = resume?.education || [];
  const experience = resume?.experience || [];
  const skills = resume?.skills || [];
  const projects = resume?.projects || [];
  const certifications = resume?.certifications || [];
  const achievements = resume?.achievements || [];
  const socialLinks = resume?.socialLinks || {};

  const resumeRef = useRef(null);

  const [downloading, setDownloading] = useState(false);

  /* =====================================================
     PRINT
  ===================================================== */

  const printResume = () => {
    window.print();
  };

  /* =====================================================
     DOWNLOAD PDF
  ===================================================== */

  const downloadPDF = async () => {
    if (!resumeRef.current) return;

    try {
      setDownloading(true);

      const fileName = personal.fullName?.trim()
        ? `${personal.fullName.trim().replace(/\s+/g, "-")}-Resume.pdf`
        : "ResumeForge-Resume.pdf";

      const options = {
        margin: 0,
        filename: fileName,

        image: {
          type: "jpeg",
          quality: 0.98,
        },

        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
        },

        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },

        pagebreak: {
          mode: ["avoid-all", "css", "legacy"],
        },
      };

      await html2pdf().set(options).from(resumeRef.current).save();
    } catch (error) {
      console.error("PDF download failed:", error);

      alert("PDF download failed. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#E7E7E7] text-[#111111]">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sticky top-0 z-40 border-b border-[#2B2E33] bg-[#191C21] text-[#FAF9F4] print:hidden">
        <div className="flex h-16 items-center justify-between px-5 lg:px-8">
          <Link to="/builder" className="flex items-center gap-2 text-sm">
            <ArrowLeft size={17} />

            <span className="hidden sm:inline">Back to Builder</span>
          </Link>

          <div className="absolute left-1/2 -translate-x-1/2">
            <span className="font-semibold tracking-tight">ResumeForge</span>
          </div>

          <div className="flex items-center gap-2">
            {/* PRINT */}

            <button
              onClick={printResume}
              type="button"
              className="flex items-center gap-2 rounded-[12px] border border-[#3A3D43] px-4 py-2 text-xs transition hover:bg-[#25282E]"
            >
              <Printer size={15} />

              <span className="hidden sm:inline">Print</span>
            </button>

            {/* DOWNLOAD PDF */}

            <button
              onClick={downloadPDF}
              type="button"
              disabled={downloading}
              className="flex items-center gap-2 rounded-[12px] bg-[#FAF9F4] px-4 py-2 text-xs font-medium text-[#111111] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Download size={15} />

              <span>{downloading ? "Generating..." : "Download PDF"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          PREVIEW AREA
      ===================================================== */}

      <section className="px-4 py-8 sm:px-8 lg:px-12 lg:py-12">
        {/* TOOLBAR */}

        <div className="mx-auto mb-6 flex max-w-[900px] items-center justify-between print:hidden">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4B5563]">
              Resume preview
            </p>

            <p className="mt-1 text-sm font-medium capitalize">
              {selectedTemplate} Template
            </p>
          </div>

          <Link
            to="/builder"
            className="flex items-center gap-2 rounded-[12px] border border-[#CFCFCF] bg-[#FAF9F4] px-4 py-2 text-xs font-medium transition hover:bg-white"
          >
            <Edit3 size={14} />
            Edit Resume
          </Link>
        </div>

        {/* ===================================================
            RESUME
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mx-auto w-full max-w-[800px]"
        >
          <div
            ref={resumeRef}
            id="resume-preview"
            className="min-h-[1120px] bg-white px-10 py-12 shadow-2xl sm:px-14 sm:py-14 lg:px-16"
          >
            {/* =================================================
                PERSONAL HEADER
            ================================================= */}

            <div className="border-b-2 border-[#111111] pb-6">
              <h1 className="text-4xl font-semibold tracking-tight">
                {personal.fullName || "Your Name"}
              </h1>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-[#4B5563]">
                {personal.email && <span>{personal.email}</span>}

                {personal.phone && <span>{personal.phone}</span>}

                {personal.location && <span>{personal.location}</span>}

                {!personal.email && !personal.phone && !personal.location && (
                  <>
                    <span>email@example.com</span>
                    <span>+91 00000 00000</span>
                    <span>Location</span>
                  </>
                )}
              </div>

              {/* =================================================
                  SOCIAL LINKS
              ================================================= */}

              {(socialLinks.linkedin ||
                socialLinks.github ||
                socialLinks.portfolio) && (
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#4B5563]">
                  {/* LINKEDIN */}

                  {socialLinks.linkedin && (
                    <a
                      href={
                        socialLinks.linkedin.startsWith("http")
                          ? socialLinks.linkedin
                          : `https://${socialLinks.linkedin}`
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 transition hover:text-[#111111]"
                    >
                      <FaLinkedin size={13} />

                      <span>LinkedIn</span>
                    </a>
                  )}

                  {/* GITHUB */}

                  {socialLinks.github && (
                    <a
                      href={
                        socialLinks.github.startsWith("http")
                          ? socialLinks.github
                          : `https://${socialLinks.github}`
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 transition hover:text-[#111111]"
                    >
                      <FaGithub size={13} />

                      <span>GitHub</span>
                    </a>
                  )}

                  {/* PORTFOLIO */}

                  {socialLinks.portfolio && (
                    <a
                      href={
                        socialLinks.portfolio.startsWith("http")
                          ? socialLinks.portfolio
                          : `https://${socialLinks.portfolio}`
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 transition hover:text-[#111111]"
                    >
                      <FaGlobe size={13} />

                      <span>Portfolio</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* =================================================
                PROFILE
            ================================================= */}

            {(personal.summary || !personal.fullName) && (
              <section className="mt-7">
                <ResumeHeading title="Profile" />

                <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                  {personal.summary ||
                    "Motivated professional with a strong interest in building meaningful products and solving real-world problems. Add your professional summary from the builder."}
                </p>
              </section>
            )}

            {/* =================================================
                EXPERIENCE
            ================================================= */}

            {experience.length > 0 && (
              <section className="mt-7">
                <ResumeHeading title="Experience" />

                <div className="mt-4 space-y-5">
                  {experience.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between gap-4">
                        <div>
                          <h3 className="text-sm font-semibold">
                            {item.jobTitle || "Job Title"}
                          </h3>

                          <p className="mt-1 text-xs text-[#4B5563]">
                            {item.company}

                            {item.company && item.location && " · "}

                            {item.location}
                          </p>
                        </div>

                        <span className="text-xs text-[#4B5563]">
                          {item.startDate}

                          {item.startDate && item.endDate && " — "}

                          {item.endDate}
                        </span>
                      </div>

                      {item.description && (
                        <p className="mt-2 text-xs leading-5 text-[#4B5563]">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* =================================================
                EDUCATION
            ================================================= */}

            {education.length > 0 && (
              <section className="mt-7">
                <ResumeHeading title="Education" />

                <div className="mt-4 space-y-4">
                  {education.map((item, index) => (
                    <div key={index} className="flex justify-between gap-4">
                      <div>
                        <h3 className="text-sm font-semibold">
                          {item.degree || "Degree / Course"}
                        </h3>

                        <p className="mt-1 text-xs text-[#4B5563]">
                          {item.institution}

                          {item.institution && item.location && " · "}

                          {item.location}
                        </p>

                        {item.description && (
                          <p className="mt-1 text-xs leading-5 text-[#4B5563]">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <span className="text-xs text-[#4B5563]">
                        {item.startDate}

                        {item.startDate && item.endDate && " — "}

                        {item.endDate}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* =================================================
                PROJECTS
            ================================================= */}

            {projects.length > 0 && (
              <section className="mt-7">
                <ResumeHeading title="Projects" />

                <div className="mt-4 space-y-4">
                  {projects.map((project, index) => (
                    <div key={index}>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-sm font-semibold">
                          {project.name || "Project Name"}
                        </h3>

                        {project.link && (
                          <a
                            href={
                              project.link.startsWith("http")
                                ? project.link
                                : `https://${project.link}`
                            }
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs underline"
                          >
                            View
                          </a>
                        )}
                      </div>

                      {project.technologies && (
                        <p className="mt-1 text-xs font-medium text-[#4B5563]">
                          {project.technologies}
                        </p>
                      )}

                      {project.description && (
                        <p className="mt-1 text-xs leading-5 text-[#4B5563]">
                          {project.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* =================================================
                SKILLS
            ================================================= */}

            {skills.length > 0 && (
              <section className="mt-7">
                <ResumeHeading title="Skills" />

                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded bg-[#E7E7E7] px-3 py-1.5 text-xs"
                    >
                      {typeof skill === "string" ? skill : skill.name}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* =================================================
                CERTIFICATIONS
            ================================================= */}

            {certifications.length > 0 && (
              <section className="mt-7">
                <ResumeHeading title="Certifications" />

                <div className="mt-3 space-y-3">
                  {certifications.map((item, index) => (
                    <div key={index}>
                      <p className="text-xs font-semibold">
                        {item.name || "Certification"}
                      </p>

                      <p className="mt-1 text-xs text-[#4B5563]">
                        {item.organization}

                        {item.organization && item.date && " · "}

                        {item.date}
                      </p>

                      {item.link && (
                        <a
                          href={
                            item.link.startsWith("http")
                              ? item.link
                              : `https://${item.link}`
                          }
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs underline"
                        >
                          Certificate
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* =================================================
                ACHIEVEMENTS
            ================================================= */}

            {achievements.length > 0 && (
              <section className="mt-7">
                <ResumeHeading title="Achievements" />

                <div className="mt-3 space-y-3">
                  {achievements.map((item, index) => (
                    <div key={index}>
                      <p className="text-xs font-semibold">
                        {item.title || "Achievement"}
                      </p>

                      <p className="mt-1 text-xs text-[#4B5563]">
                        {item.organization}

                        {item.organization && item.date && " · "}

                        {item.date}
                      </p>

                      {item.description && (
                        <p className="mt-1 text-xs leading-5 text-[#4B5563]">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          BOTTOM
      ===================================================== */}

      <div className="pb-10 text-center print:hidden">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4B5563]">
          ResumeForge / Build a resume worth remembering.
        </p>
      </div>

      {/* =====================================================
          PRINT STYLES
      ===================================================== */}

      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }

          html,
          body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }

          header,
          .print\\\\:hidden {
            display: none !important;
          }

          #resume-preview {
            width: 210mm !important;
            min-height: 297mm !important;
            margin: 0 !important;
            padding: 18mm !important;
            box-shadow: none !important;
          }

          main {
            background: white !important;
            min-height: 0 !important;
          }
        }
      `}</style>
    </main>
  );
}

/* =========================================================
   RESUME HEADING
========================================================= */

function ResumeHeading({ title }) {
  return (
    <h2 className="border-b border-[#D8D8D8] pb-2 text-xs font-semibold uppercase tracking-[0.12em]">
      {title}
    </h2>
  );
}

export default Preview;
