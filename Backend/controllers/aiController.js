
import { generateResumeSummary } from "../services/aiService.js";
export const generateSummary = async (req, res) => {
  try {
    const summary = await generateResumeSummary(req.body);

    res.status(200).json({
      message: "Summary generated successfully",
      summary,
    });
  } catch (error) {
    console.error("AI Summary Error:", error);

    res.status(500).json({
      message: "Failed to generate summary",
      error: error.message,
    });
  }
};
