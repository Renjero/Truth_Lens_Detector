import { AlertCircle, CheckCircle2, ExternalLink, FileSearch } from "lucide-react";

export default function VerificationResult({ result }) {
  if (!result) return null;
  return (
    <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-amber-600"><AlertCircle size={20}/></span>
        <div><p className="font-extrabold text-amber-900">Frontend preview only</p><p className="mt-1 text-sm leading-6 text-amber-800">Your detector UI is ready to connect. No AI analysis or factual verdict was generated.</p></div>
      </div>
      <div className="mt-5 rounded-xl border border-amber-100 bg-white/80 p-4">
        <p className="text-[10px] font-extrabold tracking-widest text-slate-400">SUBMITTED CONTENT</p>
        <p className="mt-2 break-words text-sm leading-6 text-slate-700">{result.input}</p>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-1.5"><FileSearch size={14}/> Ready for backend integration</span>
          <span className="flex items-center gap-1.5"><ExternalLink size={14}/> {result.mode === "url" ? "URL input" : "Text input"}</span>
        </div>
      </div>
    </div>
  );
}
