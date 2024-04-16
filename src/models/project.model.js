import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: Date,
      required: true,
    },
    url: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    stack: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timesTamps: true,
  }
);

export default mongoose.model("project", projectSchema);
