
import { useState } from "react";
import axios from "axios";

const NewsDetector = () => {
  const [headline, setHeadline] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleAnalyze = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError("");
      setResult(null);

      const response = await axios.post(
        "http://localhost:5000/api/news/analyze",
        {
          headline,
          content,
        }
      );

      setResult(response.data.data);

    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Something went wrong. Please try again."
      );

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            TruthLens News Detector
          </h1>

          <p className="text-gray-500 mt-3">
            Verify news credibility using Artificial Intelligence.
          </p>
        </div>

        {/* News Form */}
        <form
          onSubmit={handleAnalyze}
          className="bg-white p-8 rounded-xl shadow-sm border space-y-6"
        >
          {/* Headline */}
          <div>
            <label className="block font-medium mb-2">
              News Headline
            </label>

            <input
              type="text"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder="Enter news headline..."
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block font-medium mb-2">
              News Content
            </label>

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Paste your news article here..."
              rows="7"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          {/* Analyze Button */}
          <button
            type="submit"
            disabled={isLoading || (!headline.trim() && !content.trim())}
            className="w-full bg-teal-700 text-white py-3 rounded-lg font-semibold hover:bg-teal-800 disabled:opacity-50"
          >
            {isLoading ? "Analyzing News..." : "Analyze News"}
          </button>

          {/* Loading Message */}
          {isLoading && (
            <div className="text-center text-teal-700">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-teal-600 border-t-transparent mx-auto mb-3"></div>

              <p className="font-medium">
                Gemini AI is analyzing your news...
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Please wait while we prepare your report.
              </p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg">
              {error}
            </div>
          )}
        </form>

        {/* Analysis Result */}
        {result && (
          <div className="bg-white border shadow-sm rounded-xl p-8 mt-8 space-y-5">

            <h2 className="text-2xl font-bold">
              AI Analysis Report
            </h2>

            <div>
              <p className="text-sm text-gray-500">
                Verdict
              </p>

              <h3 className="text-xl font-bold text-teal-700 capitalize">
                {result.verdict?.replaceAll("_", " ")}
              </h3>
            </div>

            <div>
              <p className="font-semibold">Confidence</p>
              <p>{result.confidence}%</p>
            </div>

            <div>
              <p className="font-semibold">Summary</p>
              <p className="text-gray-600">{result.summary}</p>
            </div>

            <div>
              <p className="font-semibold">Reasoning</p>
              <p className="text-gray-600">{result.reasoning}</p>
            </div>

            <div>
              <p className="font-semibold">Red Flags</p>

              <ul className="list-disc pl-6 text-gray-600">
                {result.redFlags?.map((flag, index) => (
                  <li key={index}>{flag}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold">Verification Steps</p>

              <ul className="list-disc pl-6 text-gray-600">
                {result.verificationSteps?.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default NewsDetector;
