import mongoose from "mongoose";

const verificationSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    inputText: { type: String },
    inputUrl: { type: String },
    imageUrl: { type: String },
    verdict: { type: String, enum: ["Likely reliable", "Needs verification", "Likely misleading"] },
    credibilityScore: { type: Number, min: 0, max: 100 },
    explanation: { type: String },
    keyFindings: [{ type: String }],
    sources: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model("Verification", verificationSchema);

