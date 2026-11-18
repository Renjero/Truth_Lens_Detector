
import { useState } from "react";
import { Link } from "react-router-dom";

function Blogs() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const blogs = [
    {
      id: 1,
      category: "Fake News",
      date: "18 Nov 2026",
      title: "How to Identify Fake News Before Sharing It",
      description:
        "Learn simple ways to recognize misleading headlines, manipulated stories, and false information online.",
      image: "📰",
      readTime: "5 min read",
    },
    {
      id: 2,
      category: "Technology",
      date: "15 Nov 2026",
      title: "How Artificial Intelligence Helps Detect Fake News",
      description:
        "Explore how AI can analyze information, identify suspicious patterns, and support fact-checking.",
      image: "🤖",
      readTime: "7 min read",
    },
    {
      id: 3,
      category: "Fact Checking",
      date: "12 Nov 2026",
      title: "Why Fact Checking Matters in the Digital World",
      description:
        "Understand why checking the facts is important before believing or sharing information.",
      image: "🔍",
      readTime: "4 min read",
    },
    {
      id: 4,
      category: "Social Media",
      date: "10 Nov 2026",
      title: "The Impact of Fake News on Social Media",
      description:
        "Discover how misinformation spreads through social platforms and affects our daily lives.",
      image: "📱",
      readTime: "6 min read",
    },
    {
      id: 5,
      category: "Fake News",
      date: "08 Nov 2026",
      title: "Five Warning Signs of Misleading News",
      description:
        "From sensational headlines to missing sources, learn the warning signs of unreliable news.",
      image: "⚠️",
      readTime: "5 min read",
    },
    {
      id: 6,
      category: "Fact Checking",
      date: "05 Nov 2026",
      title: "How to Find Reliable News Sources",
      description:
        "Build better information habits by learning how to identify credible sources and evidence.",
      image: "🛡️",
      readTime: "6 min read",
    },
  ];

  const categories = [
    "All",
    "Fake News",
    "Technology",
    "Fact Checking",
    "Social Media",
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeCategory === "All" || blog.category === activeCategory;

    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#071F2D] via-teal-900 to-teal-700 text-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">

          <span className="inline-block px-4 py-2 rounded-full bg-teal-400/10 border border-teal-300/30 text-teal-200 text-sm font-semibold">
            TRUTHLENS KNOWLEDGE HUB
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-7 leading-tight">
            Explore Ideas.
            <br />
            Discover the <span className="text-teal-300">Truth.</span>
          </h1>

          <p className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Read articles, explore fact-checking tips, and understand
            how misinformation affects the world around us.
          </p>

          <div className="max-w-xl mx-auto mt-9">
            <div className="flex items-center bg-white rounded-xl p-2 shadow-xl">
              <span className="text-2xl px-3">🔍</span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="flex-1 min-w-0 text-slate-800 outline-none py-3"
              />
              <button
                type="button"
                onClick={() => setSearch("")}
                className="bg-teal-800 text-white px-5 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
              >
                Clear
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Blog */}
      <section className="px-6 pt-16">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-teal-700 font-bold text-sm uppercase tracking-widest">
                Editor's Choice
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mt-2">
                Featured Article
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 overflow-hidden bg-white rounded-3xl border border-slate-200 shadow-sm">

            <div className="min-h-72 md:min-h-96 bg-gradient-to-br from-teal-950 to-teal-600 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="text-8xl mb-5">📰</div>
                <p className="text-teal-200 font-semibold tracking-widest text-sm">
                  TRUTH • FACTS • AWARENESS
                </p>
              </div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-teal-700 font-bold text-sm">
                FEATURED • FAKE NEWS
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 leading-tight">
                The Truth Behind Fake News in the Digital Age
              </h2>

              <p className="text-slate-500 mt-5 leading-relaxed">
                Every day, millions of stories are shared online.
                But how many of them are actually true? Discover
                how misinformation spreads and how you can stop it.
              </p>

              <div className="flex items-center gap-4 mt-7 text-sm text-slate-400">
                <span>18 Nov 2026</span>
                <span>•</span>
                <span>8 min read</span>
              </div>

              <Link
                to="/blogs"
                className="mt-8 inline-flex items-center gap-2 text-teal-800 font-bold hover:gap-4 transition-all"
              >
                Read Article <span>→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">

          <div className="mb-10">
            <p className="text-teal-700 font-bold text-sm uppercase tracking-widest">
              Stay Informed
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
              Latest Articles
            </h2>
            <p className="text-slate-500 mt-3">
              Explore our latest stories and insights.
            </p>
          </div>

          {/* Categories */}
          <div className="flex gap-3 overflow-x-auto pb-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-teal-800 text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-teal-600 hover:text-teal-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Cards */}
          {filteredBlogs.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

              {filteredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-teal-300 hover:shadow-xl transition duration-300"
                >
                  <div className="h-52 bg-gradient-to-br from-teal-950 to-teal-600 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition duration-300">
                      {blog.image}
                    </span>
                  </div>

                  <div className="p-6">

                    <div className="flex justify-between items-center gap-2">
                      <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full">
                        {blog.category}
                      </span>
                      <span className="text-xs text-slate-400">
                        {blog.readTime}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 mt-5">
                      {blog.date}
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-2 leading-snug group-hover:text-teal-800 transition">
                      {blog.title}
                    </h3>

                    <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                      {blog.description}
                    </p>

                    <Link
                      to={`/blogs/${blog.id}`}
                      className="inline-flex items-center gap-2 mt-6 text-teal-800 font-bold text-sm hover:gap-4 transition-all"
                    >
                      Read More <span>→</span>
                    </Link>

                  </div>
                </article>
              ))}

            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
              <p className="text-4xl">🔎</p>
              <h3 className="text-xl font-bold text-slate-800 mt-4">
                No articles found
              </h3>
              <p className="text-slate-500 mt-2">
                Try another search or choose a different category.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#071F2D] to-teal-800 rounded-3xl p-10 md:p-14 text-center text-white">

          <h2 className="text-3xl md:text-4xl font-extrabold">
            Knowledge Is Your Best Defence.
          </h2>

          <p className="text-teal-100 mt-4 max-w-2xl mx-auto">
            Don't just read the news. Question it, verify it, and discover the truth.
          </p>

          <Link
            to="/detector"
            className="inline-block mt-8 bg-teal-300 text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-white transition duration-300"
          >
            Verify News →
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Blogs;
