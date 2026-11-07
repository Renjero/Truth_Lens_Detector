import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    content: { type: String },
    image: { type: String },
    category: { type: String },
    publishedAt: { type: Date },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Article", articleSchema);

