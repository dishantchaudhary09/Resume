import express from "express";

import {
  createResume,
  getResumes,
  getResume,
  updateResume,
  deleteResume,
} from "../controllers/resumeController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// ===============================
// RESUME ROUTES
// ===============================

// Create Resume
router.post("/", authMiddleware, createResume);

// Get All Resumes
router.get("/", authMiddleware, getResumes);

// Get Single Resume
router.get("/:id", authMiddleware, getResume);

// Update Resume
router.put("/:id", authMiddleware, updateResume);

// Delete Resume
router.delete("/:id", authMiddleware, deleteResume);

export default router;
