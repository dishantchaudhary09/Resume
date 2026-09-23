import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

// Middleware
import errorMiddleware from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  ...(process.env.FRONTEND_URL || "").split(","),
  "http://localhost:5173",
  "https://resume-1-rvr7.onrender.com",
]
  .map((origin) => origin.trim())
  .filter(Boolean);

// Connect Database
connectDB();

// CORS
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Origin is not allowed by CORS"));
    },
    credentials: true,
  }),
);

// Body Parser
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/resumes", resumeRoutes);
app.use("/api/ai", aiRoutes);

// Error Middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
