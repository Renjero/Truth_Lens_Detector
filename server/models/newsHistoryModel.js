
import mongoose from "mongoose";

const newsHistorySchema = new mongoose.Schema(
  {
    // ID of the logged-in user
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true,
    },

    // Original news submitted by user
    news: {
      type: String,
      required: true,
    },

    // AI-generated analysis
    analysis: {
      type: String,
      required: true,
    },

    // AI provider
    provider: {
      type: String,
      default: "Groq",
    },
  },
  {
    timestamps: true,
  }
);

const newsHistoryModel = mongoose.model(
  "NewsHistory",
  newsHistorySchema
);

export default newsHistoryModel;
