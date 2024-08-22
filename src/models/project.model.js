import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: {
      type: [String], // Array de strings para tecnologías
      required: true,
    },
    github_url: {
      type: String,
      required: true,
    },
    live_demo_url: {
      type: String,
    },
    imageUrl: {
      type: [String], // Array de strings para múltiples imágenes
    },
    other_links: {
      type: [String], // Array de strings para otros enlaces
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Project", projectSchema);
