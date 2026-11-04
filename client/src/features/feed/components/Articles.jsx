import { ArrowUpRight, BookOpen, BrainCircuit, ShieldCheck } from "lucide-react";

const articles = [
  { category: "MEDIA LITERACY", title: "How to spot misleading news online", description: "A practical guide to checking headlines, context and the source behind a story.", icon: BookOpen, tone: "from-teal-100 to-emerald-50" },
  { category: "FACT CHECKING", title: "Why reliable sources matter", description: "Learn why original reporting and independent corroboration make a difference.", icon: ShieldCheck, tone: "from-sky-100 to-indigo-50" },
  { category: "TECHNOLOGY", title: "AI and the future of verification", description: "Explore how AI can assist research while keeping human judgement important.", icon: BrainCircuit, tone: "from-amber-100 to-orange-50" }
];

export default function Articles() {
  return (
    <section id="articles" className="section-wrap py-20 sm:py-24">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-xs font-extrabold uppercase tracking-[.18em] text-brand-600">From the newsroom</p><h2 className="mt-3 font-display text-4xl font-bold text-brand-navy sm:text-5xl">Read. Learn. Question.</h2><p className="mt-3 text-sm text-slate-500">Insights to help you become a more informed reader.</p></div>
        <a href="#articles" className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-600 hover:text-brand-700">Explore articles <ArrowUpRight size={16}/></a>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map(({category,title,description,icon:Icon,tone}) => (
          <article key={title} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition hover:-translate-y-1 hover:shadow-soft">
            <div className={`flex h-48 items-center justify-center bg-gradient-to-br ${tone}`}><span className="grid h-20 w-20 place-items-center rounded-3xl bg-white/80 text-brand-600 shadow-sm transition group-hover:scale-105"><Icon size={36}/></span></div>
            <div className="p-6"><p className="text-[10px] font-extrabold tracking-[.16em] text-brand-600">{category}</p><h3 className="mt-3 font-display text-2xl font-bold leading-snug text-brand-navy">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-500">{description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand-600">Coming soon <ArrowUpRight size={15}/></span></div>
          </article>
        ))}
      </div>
    </section>
  );
}
