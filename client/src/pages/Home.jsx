import { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Detector from "../features/detector/components/Detector";
import Articles from "../features/feed/components/Articles";
import AuthModal from "../features/auth/components/AuthModal";

const FREE_CREDITS = 2;

// Home page currently keeps the original demo state and UI behavior.
// We will replace demo authentication and detector behavior with API calls
// after confirming the exact routes and response format of your backends.


export default function Home() {


  const [credits, setCredits] = useState(() => {
    const saved = localStorage.getItem("truthlens_demo_credits");
    return saved === null ? FREE_CREDITS : Math.max(0, Math.min(FREE_CREDITS, Number(saved)));
  });


  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("truthlens_demo_user")) || null;
    } catch {
      return null;
    }
  });


  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  useEffect(() => {
    localStorage.setItem("truthlens_demo_credits", String(credits));
  }, [credits]);

  const openAuth = (mode = "login") => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  const handleDemoAuth = (formData) => {
    // Temporary demo only. This will be replaced by Authentication-Service.
    const nextUser = {
      name: formData.name || formData.email.split("@")[0],
      email: formData.email,
    };
    setUser(nextUser);
    localStorage.setItem("truthlens_demo_user", JSON.stringify(nextUser));
    setAuthOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("truthlens_demo_user");
  };

  return (
    <MainLayout user={user} onAuth={openAuth} onLogout={handleLogout}>
      <Hero onVerify={() => document.getElementById("detector")?.scrollIntoView({ behavior: "smooth" })} />
      <Detector
        credits={credits}
        user={user}
        onConsumeCredit={() => setCredits((current) => Math.max(0, current - 1))}
        onLoginRequired={() => openAuth("signup")}
      />
      <HowItWorks />
      <Articles />
      <AuthModal
        open={authOpen}
        mode={authMode}
        onModeChange={setAuthMode}
        onClose={() => setAuthOpen(false)}
        onSubmit={handleDemoAuth}
      />
    </MainLayout>
  );
}
