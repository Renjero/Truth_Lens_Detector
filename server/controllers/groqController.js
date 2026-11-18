
import analyzeNews from "../services/groqService.js";
import newsHistoryModel from "../models/newsHistoryModel.js";

const verifyNews = async (req, res) => {
  try {
    const { news } = req.body;

    if (!news || !news.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please provide news content.",
      });
    }

    // Step 1: Analyze news using Groq
    const analysis = await analyzeNews(news);

    // Step 2: Save analysis for the logged-in user
    await newsHistoryModel.create({
      userId: req.user._id,
      news,
      analysis,
      provider: "Groq",
    });

    // Step 3: Send response to frontend
    return res.status(200).json({
      success: true,
      message: "News analysis completed successfully.",
      analysis,
    });

  } catch (error) {
  console.log("Groq Error:", error);

  return res.status(500).json({
    success: false,
    message: error.message || "Groq AI analysis failed.",
  });
}
};

export { verifyNews };
