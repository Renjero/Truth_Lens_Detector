import newsHistoryModel from "../models/newsHistoryModel.js";

// Get logged-in user's news history
const getNewsHistory = async (req, res) => {
  try {
    const history = await newsHistoryModel
      .find({ userId: req.user._id })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: history.length,
      history,
    });

  } catch (error) {
    console.log("History Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch news history.",
    });
  }
};

export { getNewsHistory };