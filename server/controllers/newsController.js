
import analyzeNews from "../services/geminiService.js";

const analyzeNewsController = async (req, res) => {
  try {
    const { headline, content } = req.body;

    // Validate news input
    if (!headline?.trim() && !content?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please provide news headline or content",
      });
    }

    // Prepare news text
    const newsText = `
      Headline: ${headline || "Not provided"}

      Content: ${content || "Not provided"}
    `;

    // Analyze news using Gemini AI
    const result = await analyzeNews(newsText);

    return res.status(200).json({
      success: true,
      message: "News analyzed successfully",
      data: result,
    });

  } catch (error) {
    console.error("News Controller Error:", error);

    if (error.status === 503) {
      return res.status(503).json({
        success: false,
        message: "AI is currently busy. Please try again later.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to analyze news",
    });
  }
};

export { analyzeNewsController };
