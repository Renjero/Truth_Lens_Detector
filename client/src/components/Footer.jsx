

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Truth<span className="text-teal-400">Lens</span>
            </h2>

            <p className="text-slate-400 mt-4 leading-7 text-sm">
              Discover the truth behind every story.
              Verify information, identify misinformation,
              and make smarter decisions.
            </p>

            <p className="text-teal-400 text-sm font-semibold mt-5">
              Think Before You Believe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <Link to="/" className="hover:text-teal-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400">About Us</Link>
              </li>
              <li>
                <Link to="/detector" className="hover:text-teal-400">News Detector</Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-teal-400">Blogs</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-slate-400 text-sm">
              <li>AI News Detection</li>
              <li>Fake News Identification</li>
              <li>Source Verification</li>
              <li>Fact Checking</li>
              <li>News Analysis</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Get In Touch
            </h3>

            <p className="text-slate-400 text-sm leading-7">
              Have questions or suggestions?
              We would love to hear from you.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-5 bg-teal-700 hover:bg-teal-600 px-5 py-2.5 rounded-lg text-sm font-semibold transition"
            >
              Contact Us
            </Link>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 mt-12 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} TruthLens. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-400">
            <Link to="/privacy-policy" className="hover:text-teal-400">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-teal-400">
              Terms & Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
