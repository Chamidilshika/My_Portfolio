import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tech: [String], // better than single string
    github: String,
    live: String,
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);