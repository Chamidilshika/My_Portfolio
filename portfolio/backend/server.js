import "dotenv/config";

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import projectRoutes from "./routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug (remove after testing)
console.log("EMAIL USER:", process.env.EMAIL_USER);
console.log(
  "EMAIL PASS:",
  process.env.EMAIL_PASS ? "Loaded ✅" : "Missing ❌"
);

// Connect Database
connectDB();

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Portfolio API Running");
});

const PORT = process.env.PORT || 5000;

export default app;