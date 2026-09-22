import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

import { templates } from "../data/templates";
import ResumeMockup from "../components/ResumeMockup";

function Templates() {
  return (
    <main className="min-h-screen bg-[#FAF9F4] text-[#111111]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="bg-[#191C21] px-5 py-24 text-[#FAF9F4] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[#E7E7E7]">
              Templates / 01
            </p>

            <h1 className="text-5xl font-medium leading-[1.03] tracking-tight sm:text-6xl lg:text-8xl">
              Start with a design
              <br />
              that feels like you.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#E7E7E7] sm:text-lg">
              Choose a professionally designed template and turn your
              information into a resume that looks intentional from the first
              glance.
            </p>
          </motion.div>

          <div className="mt-16 flex items-center gap-3">
            <span className="rounded-full bg-[#FAF9F4] px-4 py-2 text-xs font-medium text-[#111111]">
              {String(templates.length).padStart(2, "0")} Templates
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#E7E7E7]">
              A4 ready
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          TEMPLATE COLLECTION
      ========================================================= */}

      <section className="px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          {/* Section Header */}

          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#4B5563]">
                Collection / 02
              </p>

              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                Featured templates
              </h2>
            </div>

            <span className="hidden font-mono text-[10px] uppercase tracking-[0.15em] text-[#4B5563] sm:block">
              2026 Collection
            </span>
          </div>

          {/* Template Grid */}

          <div className="grid gap-16 md:grid-cols-2">
            {templates.map((template, index) => (
              <motion.article
                key={template.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: (index % 2) * 0.1,
                }}
              >
                {/* =================================================
                    PREVIEW
                ================================================= */}

                <div className="group relative overflow-hidden rounded-[15px] bg-[#E7E7E7] p-5 sm:p-8">
                  {/* Hover Overlay */}

                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#191C21]/90 opacity-0 transition duration-300 group-hover:opacity-100">
                    <Link
                      to={`/builder?template=${template.id}`}
                      className="flex items-center gap-2 rounded-[15px] bg-[#FAF9F4] px-5 py-3 text-sm font-medium text-[#111111] transition hover:-translate-y-1"
                    >
                      Use this template
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>

                  {/* A4 Resume Preview */}

                  <div className="mx-auto w-full max-w-[430px]">
                    <ResumeMockup style={template.style} />
                  </div>
                </div>

                {/* =================================================
                    DETAILS
                ================================================= */}

                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-[#4B5563]">
                        {template.number}
                      </span>

                      <h3 className="text-xl font-medium">{template.name}</h3>
                    </div>

                    <p className="mt-2 max-w-md text-sm leading-6 text-[#4B5563]">
                      {template.description}
                    </p>

                    <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.12em] text-[#4B5563]">
                      {template.category}
                    </span>
                  </div>

                  <Link
                    to={`/builder?template=${template.id}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D5D5D5] transition hover:border-[#111111]"
                    title="Use template"
                  >
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPARISON
      ========================================================= */}

      <section className="border-y border-[#E7E7E7] bg-[#E7E7E7] px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#4B5563]">
                Choose your style / 03
              </p>

              <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
                Different styles.
                <br />
                Same foundation.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-[#4B5563]">
                Every ResumeForge template uses the same resume information, so
                you can change the visual style without rebuilding your content.
              </p>
            </div>

            <div className="rounded-[15px] bg-[#FAF9F4] p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-y-5">
                {[
                  "Personal Information",
                  "Education",
                  "Experience",
                  "Skills",
                  "Projects",
                  "Certifications",
                  "Achievements",
                  "Social Links",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#191C21] text-[#FAF9F4]">
                      <Check size={12} />
                    </div>

                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-[#E7E7E7] pt-6">
                <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#4B5563]">
                  <Sparkles size={13} />
                  Switch templates anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="bg-[#191C21] px-5 py-24 text-[#FAF9F4] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-10 md:flex-row md:items-end"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#E7E7E7]">
                Your resume / 04
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
                Pick a template.
                <br />
                Start building.
              </h2>
            </div>

            <Link
              to="/builder"
              className="flex w-fit items-center gap-2 rounded-[15px] bg-[#FAF9F4] px-6 py-4 text-sm font-medium text-[#111111] transition hover:-translate-y-1"
            >
              Create your resume
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Templates;
