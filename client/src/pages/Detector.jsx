
import { useState } from "react";
import axios from "axios";
import { useAuth } from "./store/auth";

import API_URL from "../api";

function Detector() {
  const { token } = useAuth();

  const [news, setNews] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!news.trim()) {
      setMessage("Please enter some news to verify.");
      return;
    }

    if (!token) {
      setMessage("Please login to verify news.");
      return;
    }

    try {
      setIsLoading(true);
      setMessage("");
      setResult(null);

      // Call Groq AI backend with JWT authentication
      const response = await axios.post(
        `${API_URL}/groq/verify`,
        { news },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResult(response.data);
      setMessage("News analysis completed successfully.");

    } catch (error) {
      console.log("News Verification Error:", error);

      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Something went wrong. Please try again.";

      setMessage(errorMessage);

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#071F2D] via-teal-900 to-teal-700 text-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">

          <span className="inline-block px-4 py-2 rounded-full bg-teal-400/10 border border-teal-300/30 text-teal-200 text-sm font-semibold">
            GROQ AI POWERED NEWS VERIFICATION
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-7 leading-tight">
            Discover the <span className="text-teal-300">Truth.</span>
            <br />
            Stop Fake News.
          </h1>

          <p className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Don't trust every headline you see. Paste a news article
            or suspicious claim and take the first step towards
            verifying the facts.
          </p>

        </div>
      </section>

      {/* Detector Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-10">

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto text-3xl">
                🔍
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-5">
                Verify Your News
              </h2>

              <p className="text-slate-500 mt-3">
                Paste the news content below to begin your verification.
              </p>
            </div>

            <form onSubmit={handleVerify}>

              <label className="block text-slate-700 font-semibold mb-3">
                News Content or Claim
              </label>

              <textarea
                value={news}
                onChange={(e) => {
                  setNews(e.target.value);
                  setMessage("");
                  setResult(null);
                }}
                placeholder="Paste your news article, headline, or suspicious claim here..."
                rows="7"
                className="w-full border border-slate-300 rounded-2xl p-5 text-slate-700 outline-none resize-none focus:border-teal-600 focus:ring-4 focus:ring-teal-100 transition"
              />

              <div className="flex justify-between text-sm text-slate-400 mt-2">
                <span>Enter the complete news content for better analysis.</span>
                <span>{news.length} characters</span>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-7 bg-teal-800 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition duration-300 shadow-lg disabled:opacity-50"
              >
                {isLoading ? "Analyzing News..." : "🔍 Verify News"}
              </button>

              {/* Success or Error Message */}
              {message && (
                <p
                  className={`mt-5 p-4 rounded-xl text-center text-sm ${
                    result
                      ? "bg-teal-50 text-teal-800"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {message}
                </p>
              )}

            </form>

            {/* AI Result */}
            {result && (
              <div className="mt-8 p-6 rounded-2xl border border-teal-200 bg-teal-50">

                <h2 className="text-xl font-bold text-teal-900 mb-4">
                  AI Verification Result
                </h2>

                <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">
                  {result.analysis}
                </p>

              </div>
            )}

          </div>

          {/* Information Cards */}
          <div className="grid md:grid-cols-3 gap-5 mt-10">

            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-3xl">📰</div>
              <h3 className="font-bold text-slate-800 mt-4">
                News Analysis
              </h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                Examine news content and suspicious claims.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-3xl">🤖</div>
              <h3 className="font-bold text-slate-800 mt-4">
                Groq AI Verification
              </h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                Analyze information and identify potentially misleading content.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-3xl">🛡️</div>
              <h3 className="font-bold text-slate-800 mt-4">
                Trusted Information
              </h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                Make informed decisions before sharing news.
              </p>
            </div>

          </div>

          <p className="text-center text-slate-400 text-sm mt-10">
            TruthLens helps you question information. Always verify important claims
            with reliable sources.
          </p>

        </div>
      </section>

    </div>
  );
}

export default Detector;
