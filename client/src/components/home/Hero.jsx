import { ArrowRight, CheckCircle2, ScanSearch, Sparkles } from "lucide-react";

export default function Hero({ onVerify }) {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f3f8f7]">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-100/70 blur-3xl"/>
      <div className="section-wrap relative grid items-center gap-14 py-16 md:grid-cols-[1.05fr_.95fr] md:py-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 text-[11px] font-extrabold tracking-[.14em] text-brand-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-brand-500"/> NEWS. EVIDENCE. CLARITY.
          </div>
          <h1 className="font-display max-w-2xl text-[46px] font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-6xl lg:text-[68px]">
            Don't just read the news. <span className="text-brand-500">Verify it.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Investigate viral claims, explore supporting evidence and make more informed decisions before you share.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={onVerify} className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:-translate-y-0.5 hover:bg-brand-600">
              Verify a news story <ArrowRight size={17}/>
            </button>
            <a href="#how" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-brand-navy transition hover:border-brand-200">How it works</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-500">
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-500"/> 2 free checks to start</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-500"/> Evidence-focused reports</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[490px]">
          <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-teal-100 to-slate-100 blur-xl"/>
          <div className="relative rounded-[28px] border border-white bg-white p-5 shadow-soft sm:p-7">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div><p className="text-[10px] font-extrabold tracking-[.16em] text-slate-400">TRUTHLENS INSIGHT</p><h3 className="mt-1 text-lg font-extrabold text-brand-navy">Verification snapshot</h3></div>
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50 text-brand-600"><ScanSearch size={23}/></span>
            </div>
            <div className="mt-6 rounded-2xl bg-[#f4f8f7] p-5">
              <div className="flex items-center gap-2 text-[10px] font-extrabold tracking-widest text-brand-600"><Sparkles size={13}/> SAMPLE CLAIM</div>
              <p className="mt-3 font-display text-xl font-bold leading-7 text-brand-navy">A closer look at the story everyone is sharing.</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">A sample preview of the kind of information a report may contain.</p>
            </div>
            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between text-sm"><span className="font-semibold text-slate-600">Evidence review</span><span className="font-bold text-brand-600">Illustrative</span></div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-3/4 rounded-full bg-brand-500"/></div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-100 p-4"><p className="text-xs text-slate-400">Source checks</p><p className="mt-1 font-bold text-brand-navy">Compared</p></div>
                <div className="rounded-xl border border-slate-100 p-4"><p className="text-xs text-slate-400">Claim status</p><p className="mt-1 font-bold text-brand-navy">To review</p></div>
              </div>
            </div>
            <p className="mt-5 text-[10px] text-slate-400">Illustrative design preview — not a real fact-check.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
