import { Link } from "react-router-dom";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#191C21] text-[#FAF9F4]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-semibold">
              ResumeForge
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-[#E7E7E7]">
              Build a resume worth remembering. Create a professional resume
              with clean templates, simple editing, and easy PDF export.
            </p>

            <Link
              to="/builder"
              className="mt-7 inline-flex items-center gap-2 rounded-[15px] bg-[#FAF9F4] px-5 py-3 text-sm font-medium text-[#111111] transition hover:-translate-y-0.5"
            >
              Create your resume
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-medium">Product</h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/features"
                className="text-sm text-[#E7E7E7] transition hover:text-[#FAF9F4]"
              >
                Features
              </Link>

              <Link
                to="/templates"
                className="text-sm text-[#E7E7E7] transition hover:text-[#FAF9F4]"
              >
                Templates
              </Link>

              <Link
                to="/builder"
                className="text-sm text-[#E7E7E7] transition hover:text-[#FAF9F4]"
              >
                Resume Builder
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium">Company</h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-[#E7E7E7] transition hover:text-[#FAF9F4]"
              >
                About
              </Link>

              <Link
                to="/"
                className="text-sm text-[#E7E7E7] transition hover:text-[#FAF9F4]"
              >
                Contact
              </Link>

              <Link
                to="/"
                className="text-sm text-[#E7E7E7] transition hover:text-[#FAF9F4]"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-5 border-t border-[#E7E7E7]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-[#E7E7E7]/70">
            © {new Date().getFullYear()} ResumeForge. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {/* GitHub */}
            <a
              href="#"
              aria-label="GitHub"
              className="text-[#E7E7E7]/70 transition hover:text-[#FAF9F4]"
            >
              <FaGithub size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-[#E7E7E7]/70 transition hover:text-[#FAF9F4]"
            >
              <FaLinkedin size={18} />
            </a>

            {/* Email */}
            <a
              href="mailto:hello@resumeforge.com"
              aria-label="Email"
              className="text-[#E7E7E7]/70 transition hover:text-[#FAF9F4]"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
