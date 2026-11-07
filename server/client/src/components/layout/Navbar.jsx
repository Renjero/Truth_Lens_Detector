import { useState } from "react";
import { Menu, X, ShieldCheck, LogOut, UserRound, Route } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { useDispatch, useSelector } from 'react-redux'

export default function Navbar({  onAuth, onLogout }) {


  const {user} = useSelector(state => state.auth)
// const navigate = useNavigate();

// navigate("/dashboard");




const isAuthenticated = useSelector(
  (state) => state.auth.isAuthenticated
);

  const [menuOpen, setMenuOpen] = useState(false);
  const links = user ? [
    ["Home", "#home"],
     ["News detector",
       "#detector"],
    ["How it works", "#how"], 
    ["Articles", "#articles"]
  ] : [
    ["Home", "#home"],
    ["How it works", "#how"], 
    ["Articles", "#articles"]
  ];

  

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <nav className="section-wrap flex h-[76px] items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5" aria-label="TruthLens home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500 text-white shadow-sm"><ShieldCheck size={23} /></span>
          <span className="text-[22px] font-extrabold tracking-tight text-brand-navy">Truth<span className="text-brand-500">Lens.</span></span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-brand-500">{label}</a>)}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <span className="flex items-center gap-2 rounded-full bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700"><UserRound size={16}/>{user.name}</span>
              <button onClick={onLogout} className="rounded-xl border border-slate-200 p-2.5 text-slate-500 hover:border-red-200 hover:text-red-600" aria-label="Log out"><LogOut size={17}/></button>
            </>
          ) : (
            <>
              <button onClick={() => onAuth("login")} className="px-3 py-2 text-sm font-bold text-brand-navy hover:text-brand-500">Log in</button>
              <button onClick={() => onAuth("signup")} className="rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-600">Create account</button>
            </>
          )}
        </div>

        <button className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-brand-navy md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21}/> : <Menu size={21}/>}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-lg md:hidden">
          <div className="section-wrap flex flex-col gap-4">
            {links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="py-1 text-sm font-semibold text-slate-700">{label}</a>)}
            {user ? (
              <button onClick={() => { onLogout(); setMenuOpen(false); }} className="mt-1 flex items-center gap-2 text-left text-sm font-bold text-red-600"><LogOut size={16}/> Log out</button>
            ) : (
              <div className="flex gap-3 pt-2">
                <button onClick={() => { onAuth("login"); setMenuOpen(false); }} className="flex-1 rounded-xl border border-slate-200 py-3 text-sm font-bold">Log in</button>
                <button onClick={() => { onAuth("signup"); setMenuOpen(false); }} className="flex-1 rounded-xl bg-brand-500 py-3 text-sm font-bold text-white">Sign up</button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
