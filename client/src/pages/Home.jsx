import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-teal-700 font-semibold mb-4">
              AI POWERED NEWS DETECTOR
            </p>

            <h1 className="text-5xl font-bold leading-tight">
              Don't Believe Everything.
              <span className="text-teal-700"> Verify It.</span>
            </h1>

            <p className="text-slate-600 mt-6 leading-7">
              TruthLens helps you identify fake news and misinformation. Analyze
              headlines, verify information, and discover the truth.
            </p>

            <Link
              to="/detector"
              className="inline-block bg-teal-700 text-white px-6 py-3 rounded-lg mt-8 hover:bg-teal-800"
            >
              Start Verification
            </Link>
          </div>

          {/* Right Side */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border">
            <h2 className="text-2xl font-bold mb-6">TruthLens Analysis</h2>

            <div className="bg-slate-100 p-5 rounded-lg">
              <p className="text-sm text-slate-500 mb-2">SAMPLE NEWS</p>

              <h3 className="font-semibold text-lg">
                Is the news you're reading actually true?
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              <div className="p-4 bg-teal-50 rounded-lg">
                <h3 className="font-semibold text-teal-800">
                  Source Verification
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Check the credibility of news sources.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800">
                  AI News Detection
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Analyze news and identify misleading claims.
                </p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold text-yellow-800">Fact Checking</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Review claims and supporting evidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Blog Heading */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <p className="text-teal-700 font-semibold">LATEST ARTICLES</p>

              <h2 className="text-3xl font-bold mt-2">Explore Our Blogs</h2>

              <p className="text-slate-500 mt-3">
                Read stories, insights and news verification guides.
              </p>
            </div>

            <Link
              to="/blogs"
              className="hidden md:block text-teal-700 font-semibold hover:underline"
            >
              View All Blogs →
            </Link>
          </div>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog 1 */}
            <div className="bg-white rounded-xl overflow-hidden border hover:shadow-lg transition">
              <div className="h-48 bg-teal-100 flex items-center justify-center">
                <span className="text-6xl">📰</span>
              </div>

              <div className="p-6">
                <span className="text-sm text-teal-700 font-semibold">
                  NEWS & MEDIA
                </span>

                <h3 className="text-xl font-bold mt-3">
                  How to Identify Fake News Online?
                </h3>

                <p className="text-slate-500 mt-3 leading-6">
                  Learn simple ways to identify misinformation and verify news
                  before sharing it.
                </p>

                <Link
                  to="/blogs"
                  className="inline-block text-teal-700 font-semibold mt-5"
                >
                  Read More →
                </Link>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="bg-white rounded-xl overflow-hidden border hover:shadow-lg transition">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-6xl">🤖</span>
              </div>

              <div className="p-6">
                <span className="text-sm text-blue-700 font-semibold">
                  TECHNOLOGY
                </span>

                <h3 className="text-xl font-bold mt-3">
                  How AI Helps Detect Fake News
                </h3>

                <p className="text-slate-500 mt-3 leading-6">
                  Discover how artificial intelligence can analyze news content
                  and identify suspicious claims.
                </p>

                <Link
                  to="/blogs"
                  className="inline-block text-teal-700 font-semibold mt-5"
                >
                  Read More →
                </Link>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="bg-white rounded-xl overflow-hidden border hover:shadow-lg transition">
              <div className="h-48 bg-yellow-100 flex items-center justify-center">
                <span className="text-6xl">🔍</span>
              </div>

              <div className="p-6">
                <span className="text-sm text-yellow-700 font-semibold">
                  FACT CHECKING
                </span>

                <h3 className="text-xl font-bold mt-3">
                  Why Is Fact Checking Important?
                </h3>

                <p className="text-slate-500 mt-3 leading-6">
                  Understand why checking facts and sources matters in today's
                  digital world.
                </p>

                <Link
                  to="/blogs"
                  className="inline-block text-teal-700 font-semibold mt-5"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile View All */}
          <div className="text-center mt-8 md:hidden">
            <Link to="/blogs" className="text-teal-700 font-semibold">
              View All Blogs →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose TruthLens?</h2>

            <p className="text-slate-500 mt-3">
              Make informed decisions with verified information.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-xl">
              <h3 className="text-xl font-bold">AI Detection</h3>
              <p className="text-slate-600 mt-3">
                Analyze news articles to identify potentially fake information.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="text-xl font-bold">Source Analysis</h3>
              <p className="text-slate-600 mt-3">
                Check news sources and their credibility.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="text-xl font-bold">Fact Checking</h3>
              <p className="text-slate-600 mt-3">
                Understand news claims through supporting evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

{/* CTA Section */}
<section className="px-5 md:px-10 py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto">

    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#071F2D] via-[#064E52] to-[#087E80] text-white shadow-2xl">

      {/* Background decoration */}
      <div className="absolute -top-32 -right-20 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 grid md:grid-cols-2 items-center gap-12 px-8 py-14 md:px-16 md:py-20">

        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-300/30 bg-teal-300/10 text-teal-200 text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-teal-300"></span>
            FIGHT MISINFORMATION
          </span>

          <h2 className="mt-7 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Think Before
            <br />
            You <span className="text-teal-300">Believe.</span>
          </h2>

          <p className="mt-6 text-lg text-slate-200 leading-relaxed max-w-lg">
            In a world full of information, knowing the truth matters.
            Verify news, question suspicious claims, and make informed decisions.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              to="/detector"
              className="group inline-flex items-center gap-3 bg-teal-300 text-slate-950 px-7 py-4 rounded-xl font-bold shadow-lg hover:bg-white hover:-translate-y-1 transition duration-300"
            >
              Verify News
              <span className="text-xl group-hover:translate-x-1 transition">
                →
              </span>
            </Link>

            <span className="text-sm text-teal-100">
              Your first step towards the truth.
            </span>
          </div>
        </div>

        {/* Right Illustration Card */}
        <div className="relative">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl">

            <div className="flex items-center justify-between mb-7">
              <div>
                <p className="text-sm text-teal-200">TRUTHLENS AI</p>
                <h3 className="text-xl font-bold mt-1">
                  News Verification
                </h3>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-teal-300/20 flex items-center justify-center text-2xl">
                🛡️
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 text-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-xl">
                  📰
                </div>
                <div>
                  <p className="font-bold">News Analysis</p>
                  <p className="text-xs text-slate-500">
                    AI-powered fact verification
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="h-3 bg-slate-200 rounded-full w-full"></div>
                <div className="h-3 bg-slate-200 rounded-full w-5/6"></div>
                <div className="h-3 bg-slate-200 rounded-full w-4/6"></div>
              </div>

              <div className="mt-6 flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <div>
                  <p className="text-xs text-slate-500">
                    VERIFICATION STATUS
                  </p>
                  <p className="font-bold text-emerald-700 mt-1">
                    Ready to Verify
                  </p>
                </div>
                <span className="text-2xl">✓</span>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6 text-sm text-teal-100">
              <span>✓ Check the facts</span>
              <span>✓ Share responsibly</span>
            </div>

          </div>

          <div className="absolute -top-5 -right-3 md:-right-5 bg-rose-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg -rotate-6">
            STOP FAKE NEWS
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Home;
