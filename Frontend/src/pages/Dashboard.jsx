import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
import {
  Plus,
  FileText,
  ArrowUpRight,
  Clock3,
  LayoutTemplate,
} from "lucide-react";

import { fetchResumes } from "../redux/slice/resumeSlice.js";

function Dashboard() {
  const dispatch = useDispatch();

  // ===============================
  // REDUX DATA
  // ===============================

  const { resumes = [], loading, error } = useSelector((state) => state.resume);

  const user = useSelector((state) => state.auth.user);

  // ===============================
  // GET USER RESUMES
  // ===============================

  useEffect(() => {
    dispatch(fetchResumes());
  }, [dispatch]);

  // ===============================
  // USER NAME
  // ===============================

  const firstName = user?.name ? user.name.split(" ")[0] : "there";

  // ===============================
  // LAST ACTIVITY
  // ===============================

  const latestResume = resumes?.[0];

  const lastActivity = latestResume?.updatedAt
    ? new Date(latestResume.updatedAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "No activity";

  // ===============================
  // FORMAT UPDATED DATE
  // ===============================

  const formatUpdatedDate = (date) => {
    if (!date) return "No activity";

    const updatedDate = new Date(date);
    const today = new Date();

    const isToday = updatedDate.toDateString() === today.toDateString();

    if (isToday) {
      return "Today";
    }

    return updatedDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-[#FAF9F4] text-[#111111]">
      <Navbar />

      {/* ===============================
          HEADER
      =============================== */}

      <header className="border-b border-[#E7E7E7]">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 lg:px-8">
          <Link to="/" className="text-xl font-semibold tracking-tight">
            ResumeForge
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/templates"
              className="hidden text-sm text-[#4B5563] transition hover:text-[#111111] sm:block"
            >
              Templates
            </Link>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#191C21] text-xs font-medium uppercase text-[#FAF9F4]">
              {user?.name
                ? user.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)
                : "U"}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1400px] px-5 py-10 lg:px-8 lg:py-14">
        {/* ===============================
            WELCOME
        =============================== */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[#4B5563]">
              Workspace / 01
            </p>

            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
              Welcome back{user?.name ? `, ${firstName}` : ""}.
            </h1>

            <p className="mt-3 max-w-lg text-sm leading-6 text-[#4B5563]">
              Pick up where you left off or start creating a new resume.
            </p>
          </div>

          <Link
            to="/builder"
            className="inline-flex w-fit items-center gap-2 rounded-[15px] bg-[#111111] px-5 py-3.5 text-sm font-medium text-[#FAF9F4] transition hover:-translate-y-0.5"
          >
            <Plus size={17} />
            Create Resume
          </Link>
        </motion.section>

        {/* ===============================
            STATS
        =============================== */}

        <section className="mt-10 grid border-y border-[#E7E7E7] sm:grid-cols-3">
          <div className="border-b border-[#E7E7E7] px-5 py-6 sm:border-b-0 sm:border-r">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#4B5563]">
              Total resumes
            </p>

            <p className="mt-3 text-3xl font-medium">
              {String(resumes?.length || 0).padStart(2, "0")}
            </p>
          </div>

          <div className="border-b border-[#E7E7E7] px-5 py-6 sm:border-b-0 sm:border-r">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#4B5563]">
              Templates
            </p>

            <p className="mt-3 text-3xl font-medium">04</p>
          </div>

          <div className="px-5 py-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#4B5563]">
              Last activity
            </p>

            <p className="mt-3 text-lg font-medium">{lastActivity}</p>
          </div>
        </section>

        {/* ===============================
            MAIN CONTENT
        =============================== */}

        <section className="mt-14 grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* ===============================
              RESUMES
          =============================== */}

          <div>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4B5563]">
                  Your work
                </p>

                <h2 className="mt-2 text-2xl font-medium">Recent resumes</h2>
              </div>

              {resumes?.length > 0 && (
                <span className="hidden text-sm text-[#4B5563] sm:block">
                  {resumes.length} resume
                  {resumes.length !== 1 ? "s" : ""}
                </span>
              )}
            </div>

            {/* LOADING */}

            {loading && (
              <div className="rounded-[15px] border border-[#E7E7E7] bg-white p-8 text-center">
                <p className="text-sm text-[#4B5563]">
                  Loading your resumes...
                </p>
              </div>
            )}

            {/* ERROR */}

            {!loading && error && (
              <div className="rounded-[15px] border border-red-200 bg-white p-8 text-center">
                <p className="text-sm text-red-600">{error}</p>

                <button
                  onClick={() => dispatch(fetchResumes())}
                  className="mt-4 rounded-[12px] bg-[#111111] px-4 py-2 text-sm text-white"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* RESUME LIST */}

            {!loading && !error && resumes?.length > 0 && (
              <div className="space-y-3">
                {resumes.map((resume, index) => (
                  <motion.div
                    key={resume._id}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    className="group flex items-center justify-between rounded-[15px] border border-[#E7E7E7] bg-white p-4 transition hover:border-[#111111]"
                  >
                    <div className="flex items-center gap-4">
                      {/* Mini Preview */}

                      <div className="flex h-20 w-16 shrink-0 items-center justify-center bg-[#E7E7E7]">
                        <FileText size={22} />
                      </div>

                      <div>
                        <h3 className="text-sm font-medium">
                          {resume.personal?.fullName ||
                            resume.personal?.name ||
                            resume.title ||
                            "Untitled Resume"}
                        </h3>

                        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#4B5563]">
                          <span className="flex items-center gap-1">
                            <LayoutTemplate size={13} />

                            {resume.template
                              ? resume.template.charAt(0).toUpperCase() +
                                resume.template.slice(1)
                              : "Modern"}
                          </span>

                          <span className="flex items-center gap-1">
                            <Clock3 size={13} />

                            {formatUpdatedDate(resume.updatedAt)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Open Resume */}

                    <Link
                      to={`/builder/${resume._id}`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E7E7E7] transition group-hover:border-[#111111]"
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}

            {/* EMPTY STATE */}

            {!loading && !error && resumes?.length === 0 && (
              <div className="rounded-[15px] border border-[#E7E7E7] bg-white p-10 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#E7E7E7]">
                  <FileText size={20} />
                </div>

                <h3 className="mt-5 text-lg font-medium">No resumes yet</h3>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#4B5563]">
                  Create your first resume and start building your professional
                  profile.
                </p>

                <Link
                  to="/builder"
                  className="mt-6 inline-flex items-center gap-2 rounded-[12px] bg-[#111111] px-5 py-3 text-sm font-medium text-[#FAF9F4]"
                >
                  <Plus size={17} />
                  Create Resume
                </Link>
              </div>
            )}

            {/* CREATE ANOTHER */}

            {resumes?.length > 0 && (
              <Link
                to="/builder"
                className="mt-4 flex min-h-[110px] items-center justify-center rounded-[15px] border border-dashed border-[#CFCFCF] text-sm text-[#4B5563] transition hover:border-[#111111] hover:text-[#111111]"
              >
                <span className="flex items-center gap-2">
                  <Plus size={17} />
                  Create another resume
                </span>
              </Link>
            )}
          </div>

          {/* ===============================
              RIGHT PANEL
          =============================== */}

          <aside>
            {/* Quick Start */}

            <div className="rounded-[15px] bg-[#191C21] p-6 text-[#FAF9F4]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#E7E7E7]">
                Quick start
              </p>

              <h3 className="mt-5 text-2xl font-medium leading-tight">
                Create a resume
                <br />
                in minutes.
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#E7E7E7]">
                Choose a template, add your details and export your finished
                resume as a PDF.
              </p>

              <Link
                to="/builder"
                className="mt-7 flex items-center justify-center gap-2 rounded-[12px] bg-[#FAF9F4] px-4 py-3 text-sm font-medium text-[#111111]"
              >
                Start building
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Templates */}

            <div className="mt-8">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4B5563]">
                    Explore
                  </p>

                  <h3 className="mt-2 text-xl font-medium">Templates</h3>
                </div>

                <Link
                  to="/templates"
                  className="text-xs text-[#4B5563] hover:text-[#111111]"
                >
                  View all
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/templates"
                  className="group overflow-hidden rounded-[12px] border border-[#E7E7E7] bg-white p-2"
                >
                  <div className="aspect-[3/4] bg-[#E7E7E7] transition group-hover:scale-[1.02]" />

                  <p className="px-1 py-2 text-xs font-medium">Modern</p>
                </Link>

                <Link
                  to="/templates"
                  className="group overflow-hidden rounded-[12px] border border-[#E7E7E7] bg-white p-2"
                >
                  <div className="aspect-[3/4] bg-[#191C21] transition group-hover:scale-[1.02]" />

                  <p className="px-1 py-2 text-xs font-medium">Minimal</p>
                </Link>
              </div>
            </div>
          </aside>
        </section>

        {/* ===============================
            BOTTOM CTA
        =============================== */}

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-[#E7E7E7] pt-10"
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4B5563]">
                ResumeForge
              </p>

              <h2 className="mt-2 text-2xl font-medium">
                Ready to improve your resume?
              </h2>
            </div>

            <Link
              to="/builder"
              className="flex w-fit items-center gap-2 text-sm font-medium underline underline-offset-4"
            >
              Start building
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

export default Dashboard;
