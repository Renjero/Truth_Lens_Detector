import { useState } from "react";
import { ArrowRight, Link2, AlignLeft, LoaderCircle } from "lucide-react";
import CreditBadge from "./CreditBadge";
import VerificationResult from "./VerificationResult";

export default function Detector({ credits, user, onConsumeCredit, onLoginRequired }) {
  const [mode, setMode] = useState("text");
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (event) => {
    event.preventDefault();
    setError("");
    setResult(null);
    const value = input.trim();

    if (!value) { setError("Please enter a news headline, article or URL first."); return; }
    if (!user && credits <= 0) { onLoginRequired(); return; }
    if (mode === "url") {
      try {
        const parsed = new URL(value);
        if (!["http:", "https:"].includes(parsed.protocol)) throw new Error();
      } catch {
        setError("Please enter a valid URL beginning with https:// or http://.");
        return;
      }
    }

    // Replace this preview with your POST /api/detector/analyze request.
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 550));
    setResult({ input: value, mode });
    if (!user) onConsumeCredit();
    setLoading(false);
    setInput("");
  };

  return (
    <section id="detector" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-wrap max-w-4xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.18em] text-brand-600">AI-powered news verification</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">Check before you share.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">Submit a news story to prepare it for verification. The real AI analysis will be connected through your backend.</p>
        </div>

        <CreditBadge credits={credits} isLoggedIn={Boolean(user)}/>
        <form onSubmit={handleAnalyze} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-soft sm:p-8">
          <div className="mb-6 flex gap-2 rounded-xl bg-slate-100 p-1">
            <button type="button" onClick={() => {setMode("text"); setError("");}} className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition ${mode === "text" ? "bg-brand-500 text-white shadow-sm" : "text-slate-500 hover:text-brand-700"}`}><AlignLeft size={16}/> News text</button>
            <button type="button" onClick={() => {setMode("url"); setError("");}} className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition ${mode === "url" ? "bg-brand-500 text-white shadow-sm" : "text-slate-500 hover:text-brand-700"}`}><Link2 size={16}/> News URL</button>
          </div>

          <label htmlFor="newsInput" className="mb-3 block text-sm font-bold text-brand-navy">{mode === "text" ? "Paste the news content" : "Enter the article URL"}</label>
          <textarea id="newsInput" value={input} onChange={(e) => setInput(e.target.value)} rows={6} placeholder={mode === "text" ? "Paste a headline, claim or full news article here..." : "https://example.com/news/article"} className="w-full resize-y rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-50" />
          {error && <p role="alert" className="mt-3 text-sm font-medium text-red-600">{error}</p>}

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-slate-400">Avoid sharing private or sensitive personal information.</p>
            <button type="submit" disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-7 py-4 text-sm font-extrabold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70">
              {loading ? <><LoaderCircle size={17} className="animate-spin"/> Preparing...</> : <>Analyze news <ArrowRight size={17}/></>}
            </button>
          </div>
          <VerificationResult result={result}/>
        </form>
      </div>
    </section>
  );
}
