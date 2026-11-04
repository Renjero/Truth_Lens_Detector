import { useEffect, useState } from "react";
import { X, ShieldCheck, Eye, EyeOff, LockKeyhole } from "lucide-react";

export default function AuthModal({ open, mode, onModeChange, onClose, onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; };
  }, [open, onClose]);

  useEffect(() => { setError(""); setShowPassword(false); }, [mode, open]);

  if (!open) return null;

  const isSignup = mode === "signup";

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    if (isSignup && data.password !== data.confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }
    if (isSignup && data.password.length < 8) {
      setError("Use at least 8 characters for your password.");
      return;
    }
    onSubmit(data, mode);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-navy/60 p-3 backdrop-blur-sm sm:p-5" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div role="dialog" aria-modal="true" aria-labelledby="auth-title" className="modal-scroll relative grid w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">
        <button onClick={onClose} aria-label="Close dialog" className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-500 shadow-sm transition hover:text-brand-navy"><X size={19}/></button>

        <aside className="relative hidden flex-col justify-between overflow-hidden bg-brand-navy p-10 text-white md:flex">
          <div className="absolute -right-20 top-28 h-64 w-64 rounded-full border border-white/10"/><div className="absolute -right-8 top-40 h-40 w-40 rounded-full border border-white/10"/>
          <a href="#home" className="relative flex items-center gap-2 text-2xl font-extrabold"><ShieldCheck className="text-teal-300"/>Truth<span className="text-teal-300">Lens.</span></a>
          <div className="relative"><span className="mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-teal-200"><LockKeyhole size={27}/></span><p className="text-xs font-extrabold tracking-[.18em] text-teal-300">{isSignup ? "JOIN THE COMMUNITY" : "WELCOME BACK"}</p><h2 className="mt-4 font-display text-4xl font-bold leading-tight">{isSignup ? "Think critically. Share responsibly." : "Continue looking beyond the headline."}</h2><p className="mt-5 text-sm leading-7 text-slate-300">{isSignup ? "Create an account to keep your verification activity and explore more stories." : "Sign in to continue your news verification journey."}</p></div>
          <p className="relative text-xs text-slate-400">Verify information. Share responsibly.</p>
        </aside>

        <section className="p-6 sm:p-9 md:p-10">
          <div className="mb-7 flex items-center gap-2 text-xl font-extrabold text-brand-navy md:hidden"><ShieldCheck className="text-brand-500"/>Truth<span className="text-brand-500">Lens.</span></div>
          <div className="mb-7 grid grid-cols-2 rounded-xl bg-slate-100 p-1">
            <button type="button" onClick={() => onModeChange("login")} className={`rounded-lg py-3 text-sm font-extrabold transition ${!isSignup ? "bg-brand-500 text-white shadow-sm" : "text-slate-500"}`}>Log in</button>
            <button type="button" onClick={() => onModeChange("signup")} className={`rounded-lg py-3 text-sm font-extrabold transition ${isSignup ? "bg-brand-500 text-white shadow-sm" : "text-slate-500"}`}>Sign up</button>
          </div>
          <p className="text-[10px] font-extrabold tracking-[.18em] text-brand-600">{isSignup ? "GET STARTED" : "YOUR ACCOUNT"}</p>
          <h2 id="auth-title" className="mt-2 font-display text-3xl font-bold text-brand-navy">{isSignup ? "Create your account" : "Welcome back"}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">{isSignup ? "Join TruthLens and keep your investigations together." : "Enter your details to continue to TruthLens."}</p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            {isSignup && <Field label="Full name" name="name" placeholder="Your full name" autoComplete="name"/>}
            <Field label="Email address" name="email" type="email" placeholder="you@example.com" autoComplete="email"/>
            <div>
              <label htmlFor="auth-password" className="mb-2 block text-sm font-bold text-brand-navy">Password</label>
              <div className="relative"><input id="auth-password" name="password" type={showPassword ? "text" : "password"} required minLength={isSignup ? 8 : undefined} autoComplete={isSignup ? "new-password" : "current-password"} placeholder={isSignup ? "At least 8 characters" : "Enter your password"} className="w-full rounded-xl border border-slate-200 px-4 py-3.5 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-50"/><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">{showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}</button></div>
            </div>
            {isSignup && <Field label="Confirm password" name="confirmPassword" type="password" placeholder="Re-enter your password" autoComplete="new-password"/>}
            {isSignup && <label className="flex items-start gap-2 text-xs leading-5 text-slate-500"><input type="checkbox" required className="mt-1 accent-brand-500"/>I agree to the Terms of Service and Privacy Policy.</label>}
            {!isSignup && <div className="text-right"><button type="button" onClick={() => setError("Password reset will be connected when your backend is ready.")} className="text-xs font-bold text-brand-600 hover:underline">Forgot password?</button></div>}
            {error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-600">{error}</p>}
            <button type="submit" className="w-full rounded-xl bg-brand-500 px-5 py-4 text-sm font-extrabold text-white shadow-sm transition hover:bg-brand-600">{isSignup ? "Create account" : "Log in"} <span aria-hidden="true">→</span></button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">{isSignup ? "Already have an account?" : "New to TruthLens?"} <button onClick={() => onModeChange(isSignup ? "login" : "signup")} className="font-extrabold text-brand-600 hover:underline">{isSignup ? "Log in" : "Create account"}</button></p>
          <p className="mt-5 text-center text-[10px] leading-5 text-slate-400">Demo form only. Connect your own authentication API before production.</p>
        </section>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder, autoComplete }) {
  return <div><label htmlFor={name} className="mb-2 block text-sm font-bold text-brand-navy">{label}</label><input id={name} name={name} type={type} placeholder={placeholder} required autoComplete={autoComplete} className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-50"/></div>;
}
