import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy px-5 py-12 text-white">
      <div className="mx-auto grid max-w-[1160px] gap-10 sm:grid-cols-2">
        <div><a href="#home" className="inline-flex items-center gap-2 text-2xl font-extrabold"><ShieldCheck className="text-teal-300" size={25}/>Truth<span className="text-teal-300">Lens.</span></a><p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">Helping people question claims, explore evidence and share information responsibly.</p></div>
        <div className="sm:justify-self-end"><h3 className="font-bold">Explore</h3><div className="mt-4 flex flex-col gap-3 text-sm text-slate-300"><a href="#home" className="hover:text-white">Home</a><a href="#detector" className="hover:text-white">News detector</a><a href="#how" className="hover:text-white">How it works</a><a href="#articles" className="hover:text-white">Articles</a></div></div>
      </div>
      <div className="mx-auto mt-10 max-w-[1160px] border-t border-white/10 pt-6 text-xs text-slate-400">© {new Date().getFullYear()} TruthLens. Verify information. Share responsibly.</div>
    </footer>
  );
}
