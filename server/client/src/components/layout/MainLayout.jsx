import Navbar from "./Navbar";
import Footer from "./Footer";

// Shared page layout: the navigation and footer stay consistent across pages.
export default function MainLayout({ user, onAuth, onLogout, children }) {
  return (
    <>
      <Navbar user={user} onAuth={onAuth} onLogout={onLogout} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
