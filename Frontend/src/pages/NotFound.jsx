import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAF9F4] text-[#111111]">
      {/* Header */}
      <header className="flex h-16 items-center border-b border-[#E7E7E7] px-5 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          ResumeForge
        </Link>
      </header>

      {/* Content */}
      <section className="flex flex-1 items-center justify-center px-5 py-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-3xl text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#4B5563]">
            Error / 404
          </p>

          <h1 className="mt-6 text-[clamp(7rem,20vw,15rem)] font-medium leading-none tracking-[-0.08em]">
            404
          </h1>

          <div className="mx-auto mt-4 max-w-lg">
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              This page doesn't exist.
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#4B5563]">
              The page you're looking for may have been moved, deleted, or the
              URL might be incorrect.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-[15px] border border-[#111111] px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>

            <Link
              to="/builder"
              className="inline-flex items-center justify-center gap-2 rounded-[15px] bg-[#111111] px-5 py-3 text-sm font-medium text-[#FAF9F4] transition hover:-translate-y-0.5"
            >
              Create Resume
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Bottom Label */}
          <div className="mt-16 border-t border-[#E7E7E7] pt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4B5563]">
              ResumeForge / Build a resume worth remembering.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default NotFound;
