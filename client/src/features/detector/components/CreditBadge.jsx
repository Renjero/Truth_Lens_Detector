import { Zap } from "lucide-react";

export default function CreditBadge({ credits, isLoggedIn }) {
  return (
    <div className="mb-5 rounded-2xl border border-brand-100 bg-brand-50 p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-brand-600"><Zap size={19}/></span>
          <div><p className="text-sm font-extrabold text-brand-700">{isLoggedIn ? "Your verification access" : "Your free credits"}</p><p className="mt-0.5 text-xs text-slate-500">{isLoggedIn ? "Account mode — connect your credit policy" : "Try TruthLens with two free checks."}</p></div>
        </div>
        <span className="whitespace-nowrap text-xl font-extrabold text-brand-700">{isLoggedIn ? "Member" : `${credits} / 2`}</span>
      </div>
      {!isLoggedIn && <div className="mt-4 flex gap-2">{[0,1].map((item) => <div key={item} className={`h-2 flex-1 rounded-full ${item < credits ? "bg-brand-500" : "bg-brand-200"}`}/>)}</div>}
    </div>
  );
}
