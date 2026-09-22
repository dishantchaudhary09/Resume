import Resume from "../models/Resume.js";

/* =========================================================
   CREATE RESUME
========================================================= */

export const createResume = async (req, res) => {
  try {
    const {
      template,
      personal,
      education,
      experience,
      skills,
      projects,
      certifications,
      achievements,
      socialLinks,
    } = req.body;

    const resume = await Resume.create({
      user: req.user.userId,

      template: template || "modern",

      personal,
      education,
      experience,
      skills,
      projects,
      certifications,
      achievements,
      socialLinks,
    });

    res.status(201).json(resume);
  } catch (error) {
    console.error("Create resume error:", error);

    res.status(500).json({
      message: "Failed to create resume",
    });
  }
};

/* =========================================================
   GET ALL RESUMES
========================================================= */

export const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({
      user: req.user.userId,
    }).sort({
      updatedAt: -1,
    });

    res.status(200).json(resumes);
  } catch (error) {
    console.error("Get resumes error:", error);

    res.status(500).json({
      message: "Failed to fetch resumes",
    });
  }
};

/* =========================================================
   GET SINGLE RESUME
========================================================= */

export const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.user.userId,
    });

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    res.status(200).json(resume);
  } catch (error) {
    console.error("Get resume error:", error);

    res.status(500).json({
      message: "Failed to fetch resume",
    });
  }
};

/* =========================================================
   UPDATE RESUME
========================================================= */

export const updateResume = async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.userId,
      },

      req.body,

      {
        new: true,
        runValidators: true,
      },
    );

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    res.status(200).json(resume);
  } catch (error) {
    console.error("Update resume error:", error);

    res.status(500).json({
      message: "Failed to update resume",
    });
  }
};

/* =========================================================
   DELETE RESUME
========================================================= */

export const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId,
    });

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    res.status(200).json({
      message: "Resume deleted successfully",
    });
  } catch (error) {
    console.error("Delete resume error:", error);

    res.status(500).json({
      message: "Failed to delete resume",
    });
  }
};
