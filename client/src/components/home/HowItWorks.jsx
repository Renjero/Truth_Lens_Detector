import { FileText, SearchCheck, BarChart3 } from "lucide-react";

const steps = [
  { number: "01", icon: FileText, title: "Submit a news story", text: "Paste a headline, article text or a link to the story you want to investigate." },
  { number: "02", icon: SearchCheck, title: "Investigate the claims", text: "Your backend can extract claims, retrieve sources and compare available evidence." },
  { number: "03", icon: BarChart3, title: "Understand the findings", text: "Review the verdict, supporting evidence, source links and important limitations." }
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-[#f4f8f7] py-20 sm:py-24">
      <div className="section-wrap">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.18em] text-brand-600">A clear process</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-brand-navy sm:text-5xl">How TruthLens works</h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">A simple workflow designed to make checking information easier.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map(({number, icon: Icon, title, text}) => (
            <article key={number} className="rounded-2xl border border-white bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600"><Icon size={23}/></span><span className="font-display text-3xl font-bold text-slate-200">{number}</span></div>
              <h3 className="mt-7 text-lg font-extrabold text-brand-navy">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
