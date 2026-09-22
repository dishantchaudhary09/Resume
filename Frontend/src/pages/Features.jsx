import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MouseSpotlight from "../components/MouseSpotlight";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Download,
  Edit3,
  Eye,
  FileText,
  LayoutTemplate,
  Palette,
  Save,
  Smartphone,
} from "lucide-react";
import { templates } from "../data/templates";

function Features() {
  const features = [
    {
      number: "01",
      icon: LayoutTemplate,
      title: "Choose your foundation",
      shortTitle: "Templates",
      description:
        "Start with a professionally structured template instead of building everything from scratch.",
      visual: "templates",
    },
    {
      number: "02",
      icon: Edit3,
      title: "Build without the clutter",
      shortTitle: "Builder",
      description:
        "Add your information through a focused workspace designed around the way resumes are actually built.",
      visual: "builder",
    },
    {
      number: "03",
      icon: Eye,
      title: "See every change",
      shortTitle: "Live preview",
      description:
        "Your resume preview updates alongside your edits so you always know what the final document looks like.",
      visual: "preview",
    },
    {
      number: "04",
      icon: Palette,
      title: "Make it yours",
      shortTitle: "Customize",
      description:
        "Adjust the visual presentation while keeping your resume clean, readable and professional.",
      visual: "customize",
    },
    {
      number: "05",
      icon: Save,
      title: "Keep everything together",
      shortTitle: "Save",
      description:
        "Save multiple resumes in one workspace and return to any version whenever you need it.",
      visual: "save",
    },
    {
      number: "06",
      icon: Download,
      title: "Ready when you are",
      shortTitle: "Export",
      description:
        "Export your finished resume as a polished PDF that's ready to share, upload or print.",
      visual: "export",
    },
    {
      number: "07",
      icon: Smartphone,
      title: "Built for modern screens",
      shortTitle: "Responsive",
      description:
        "Move between screen sizes with a workspace designed to remain comfortable and usable.",
      visual: "responsive",
    },
    {
      number: "08",
      icon: FileText,
      title: "Your complete profile",
      shortTitle: "Sections",
      description:
        "Bring education, experience, projects, skills, certifications and more into one structured profile.",
      visual: "sections",
    },
  ];

  const resumeSections = [
    "Personal Information",
    "Education",
    "Experience",
    "Skills",
    "Projects",
    "Certifications",
    "Achievements",
    "Social Links",
  ];

  const workflow = [
    {
      number: "01",
      title: "Choose",
      description: "Pick a visual direction that fits your career.",
    },
    {
      number: "02",
      title: "Build",
      description: "Fill your resume through a focused workspace.",
    },
    {
      number: "03",
      title: "Refine",
      description: "Customize the presentation and review every detail.",
    },
    {
      number: "04",
      title: "Export",
      description: "Download a polished PDF when you're ready.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF9F4] text-[#111111]">
      <Navbar />

      {/* =========================================================
          GLOBAL MOUSE SPOTLIGHT
      ========================================================= */}
      <MouseSpotlight />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative flex h-[calc(100svh-64px)] flex-col justify-between overflow-hidden bg-[#191C21] px-5 pt-8 text-[#FAF9F4] lg:px-10 lg:pt-10">
        {/* Ambient background */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-white/[0.025] blur-3xl" />

        <div className="relative mx-auto flex h-full w-full max-w-[1400px] flex-col justify-between box-border pb-8 lg:pb-10">
          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-[#FAF9F4]/40" />

            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8D9198]">
              Product / Features
            </p>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-6xl"
          >
            <h1 className="text-5xl font-medium leading-[0.98] tracking-tight sm:text-6xl lg:text-[7rem]">
              Everything between
              <br />
              <span className="text-[#8D9198]">an idea and a resume.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#BFC2C7] sm:text-lg">
              ResumeForge turns the resume-building process into one focused
              workflow — from choosing a template to exporting the final PDF.
            </p>
          </motion.div>

          {/* Bottom stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.7,
            }}
            className="grid border-t border-[#3A3D43] sm:grid-cols-3"
          >
            {/* Templates */}
            <div className="border-b border-[#3A3D43] py-5 sm:border-b-0 sm:border-r sm:pr-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#8D9198]">
                Templates
              </p>

              <p className="mt-2 text-2xl font-medium">
                {String(templates.length).padStart(2, "0")}
              </p>
            </div>

            {/* Workflow */}
            <div className="border-b border-[#3A3D43] py-5 sm:border-b-0 sm:border-r sm:px-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#8D9198]">
                Core workflow
              </p>

              <p className="mt-2 text-2xl font-medium">
                {String(workflow.length).padStart(2, "0")} steps
              </p>
            </div>

            {/* Export */}
            <div className="py-5 sm:pl-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#8D9198]">
                Final output
              </p>

              <p className="mt-2 text-2xl font-medium">PDF</p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.6,
          }}
          className="absolute bottom-8 right-6 hidden items-center gap-3 lg:flex"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#686D75]">
            Scroll to explore
          </span>

          <div className="h-10 w-px overflow-hidden bg-[#3A3D43]">
            <motion.div
              animate={{
                y: [0, 32, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-3 w-px bg-[#FAF9F4]"
            />
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          WORKFLOW
      ========================================================= */}
      <section className="border-b border-[#E7E7E7] px-5 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#4B5563]">
                The workflow / 01
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-medium tracking-tight sm:text-5xl">
                One process.
                <br />
                No unnecessary steps.
              </h2>
            </div>

            <div className="mt-12 lg:mt-0">
              {workflow.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group flex items-center border-t border-[#E7E7E7] py-7"
                >
                  <span className="w-16 font-mono text-[10px] text-[#9CA3AF]">
                    {item.number}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-xl font-medium">{item.title}</h3>

                    <p className="mt-1 text-sm text-[#6B7280]">
                      {item.description}
                    </p>
                  </div>

                  <ChevronRight
                    size={18}
                    className="text-[#9CA3AF] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#111111]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTERACTIVE FEATURES
      ========================================================= */}
      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          {/* Section heading */}
          <div className="mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#4B5563]">
              Inside ResumeForge / 02
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight sm:text-6xl">
              Every tool has a purpose.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B7280]">
              Explore the workspace through the features that actually shape the
              resume-building experience.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.number}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: (index % 2) * 0.08,
                  }}
                  className="group relative min-h-[430px] overflow-hidden rounded-[20px] border border-[#E1E1E1] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(17,17,17,0.08)]"
                >
                  {/* Card top */}
                  <div className="relative z-20 flex items-start justify-between">
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.15em] text-[#9CA3AF]">
                        {feature.number}
                      </span>

                      <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-[#6B7280]">
                        {feature.shortTitle}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E1E1E1] transition-all duration-500 group-hover:rotate-6 group-hover:border-[#111111] group-hover:bg-[#191C21]">
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#4B5563] transition-colors duration-300 group-hover:text-white"
                      />
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="absolute left-7 right-7 top-[100px] h-[190px] overflow-hidden rounded-[14px] border border-[#E7E7E7] bg-[#FAF9F4] transition-all duration-500 group-hover:scale-[1.02] group-hover:border-[#D0D0D0]">
                    {/* Templates */}
                    {feature.visual === "templates" && (
                      <div className="flex h-full items-center justify-center gap-3 p-5">
                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className={`h-[145px] w-[85px] rounded-md border border-[#DCDCDC] bg-white p-2 shadow-sm transition-all duration-500 ${
                              item === 2
                                ? "group-hover:-translate-y-3"
                                : "group-hover:translate-y-2"
                            }`}
                          >
                            <div className="h-2 w-12 rounded bg-[#111111]/70" />

                            <div className="mt-2 h-1 w-8 rounded bg-[#111111]/15" />

                            <div className="mt-5 space-y-2">
                              <div className="h-1 w-full rounded bg-[#111111]/10" />
                              <div className="h-1 w-[80%] rounded bg-[#111111]/10" />
                              <div className="h-1 w-[90%] rounded bg-[#111111]/10" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Builder */}
                    {feature.visual === "builder" && (
                      <div className="grid h-full grid-cols-[100px_1fr]">
                        <div className="border-r border-[#E7E7E7] p-3">
                          <div className="mb-4 h-2 w-12 rounded bg-[#111111]/30" />

                          {[1, 2, 3, 4].map((item) => (
                            <div
                              key={item}
                              className={`mb-2 h-7 rounded-md ${
                                item === 1 ? "bg-[#191C21]" : "bg-[#111111]/5"
                              }`}
                            />
                          ))}
                        </div>

                        <div className="p-5">
                          <div className="h-2 w-24 rounded bg-[#111111]/70" />

                          <div className="mt-5 space-y-4">
                            <div className="h-8 rounded-md border border-[#E1E1E1] bg-white" />

                            <div className="h-8 rounded-md border border-[#E1E1E1] bg-white" />

                            <div className="h-12 rounded-md border border-[#E1E1E1] bg-white" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Preview */}
                    {feature.visual === "preview" && (
                      <div className="flex h-full items-center justify-center">
                        <div className="h-[165px] w-[118px] -rotate-2 rounded-sm bg-white p-3 shadow-lg transition-transform duration-500 group-hover:rotate-0">
                          <div className="h-2.5 w-20 rounded bg-[#111111]/80" />

                          <div className="mt-2 h-1 w-14 rounded bg-[#111111]/15" />

                          <div className="mt-5 space-y-2">
                            <div className="h-1 w-full rounded bg-[#111111]/10" />
                            <div className="h-1 w-[85%] rounded bg-[#111111]/10" />
                            <div className="h-1 w-[92%] rounded bg-[#111111]/10" />
                          </div>

                          <div className="mt-5 space-y-2">
                            <div className="h-1 w-full rounded bg-[#111111]/10" />
                            <div className="h-1 w-[75%] rounded bg-[#111111]/10" />
                            <div className="h-1 w-[88%] rounded bg-[#111111]/10" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Customize */}
                    {feature.visual === "customize" && (
                      <div className="flex h-full items-center justify-center gap-5">
                        <div className="h-[150px] w-[105px] rounded-sm bg-white p-3 shadow-md">
                          <div className="h-2 w-16 rounded bg-[#111111]/80" />

                          <div className="mt-4 h-1 w-full rounded bg-[#111111]/10" />

                          <div className="mt-2 h-1 w-[80%] rounded bg-[#111111]/10" />
                        </div>

                        <div className="space-y-2">
                          <div className="h-8 w-8 rounded-full border border-[#D5D5D5] bg-white" />

                          <div className="h-8 w-8 rounded-full border border-[#D5D5D5] bg-[#191C21]" />

                          <div className="h-8 w-8 rounded-full border border-[#D5D5D5] bg-[#D9D9D9]" />
                        </div>
                      </div>
                    )}

                    {/* Save */}
                    {feature.visual === "save" && (
                      <div className="flex h-full items-center justify-center">
                        <div className="w-[230px] rounded-xl border border-[#E1E1E1] bg-white p-4 shadow-sm">
                          {[1, 2, 3].map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-3 border-b border-[#E7E7E7] py-3 last:border-0"
                            >
                              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#191C21] text-white">
                                <FileText size={12} />
                              </div>

                              <div className="flex-1">
                                <div className="h-1.5 w-20 rounded bg-[#111111]/30" />

                                <div className="mt-1.5 h-1 w-12 rounded bg-[#111111]/10" />
                              </div>

                              <Check size={13} className="text-[#4B5563]" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Export */}
                    {feature.visual === "export" && (
                      <div className="flex h-full items-center justify-center">
                        <motion.div
                          className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#191C21] text-white"
                          whileHover={{
                            scale: 1.08,
                          }}
                        >
                          <Download size={28} strokeWidth={1.4} />
                        </motion.div>

                        <div className="ml-5">
                          <p className="font-mono text-[9px] uppercase tracking-wider text-[#6B7280]">
                            Export
                          </p>

                          <p className="mt-1 text-sm font-medium">resume.pdf</p>
                        </div>
                      </div>
                    )}

                    {/* Responsive */}
                    {feature.visual === "responsive" && (
                      <div className="flex h-full items-center justify-center gap-4">
                        <div className="h-[145px] w-[90px] rounded-xl border-[5px] border-[#191C21] bg-white p-2 shadow-md">
                          <div className="h-2 w-12 rounded bg-[#111111]/60" />

                          <div className="mt-4 space-y-2">
                            <div className="h-1 rounded bg-[#111111]/10" />

                            <div className="h-1 rounded bg-[#111111]/10" />

                            <div className="h-1 w-[70%] rounded bg-[#111111]/10" />
                          </div>
                        </div>

                        <div className="h-[105px] w-[155px] rounded-lg border-4 border-[#191C21] bg-white p-3 shadow-md">
                          <div className="h-2 w-20 rounded bg-[#111111]/60" />

                          <div className="mt-4 grid grid-cols-2 gap-2">
                            <div className="h-8 rounded bg-[#111111]/5" />
                            <div className="h-8 rounded bg-[#111111]/5" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Sections */}
                    {feature.visual === "sections" && (
                      <div className="grid grid-cols-2 gap-2 p-5">
                        {resumeSections.map((section, itemIndex) => (
                          <div
                            key={section}
                            className="flex items-center gap-2 rounded-lg border border-[#E7E7E7] bg-white px-3 py-2 transition-all duration-300 group-hover:-translate-y-0.5"
                            style={{
                              transitionDelay: `${itemIndex * 30}ms`,
                            }}
                          >
                            <Check size={11} className="text-[#111111]" />

                            <span className="truncate text-[9px] text-[#4B5563]">
                              {section}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-7 left-7 right-7">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <h3 className="text-xl font-medium tracking-tight">
                          {feature.title}
                        </h3>

                        <p className="mt-2 max-w-md text-sm leading-6 text-[#6B7280]">
                          {feature.description}
                        </p>
                      </div>

                      <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E1E1E1] transition-all duration-300 group-hover:border-[#111111] group-hover:bg-[#191C21] group-hover:text-white sm:flex">
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          BUILDER SHOWCASE
      ========================================================= */}
      <section className="bg-[#191C21] px-5 py-24 text-[#FAF9F4] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            {/* Content */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8D9198]">
                The workspace / 03
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-6xl">
                Your resume,
                <br />
                <span className="text-[#8D9198]">always in view.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-[#BFC2C7]">
                Write on one side. See the result on the other. ResumeForge
                keeps the editing experience and the final document connected.
              </p>

              <Link
                to="/builder"
                className="mt-9 inline-flex items-center gap-2 rounded-[12px] bg-[#FAF9F4] px-5 py-3 text-sm font-medium text-[#111111] transition-all hover:-translate-y-1"
              >
                Open the builder
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>

            {/* Builder visual */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="overflow-hidden rounded-[18px] border border-[#3A3D43] bg-[#111317] shadow-2xl"
            >
              {/* Top bar */}
              <div className="flex h-12 items-center justify-between border-b border-[#2B2E34] px-5">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#FAF9F4]" />

                  <span className="text-xs font-medium">ResumeForge</span>
                </div>

                <span className="font-mono text-[8px] uppercase tracking-wider text-[#8D9198]">
                  Auto saved
                </span>
              </div>

              <div className="grid min-h-[460px] grid-cols-[150px_1fr_0.9fr]">
                {/* Sidebar */}
                <div className="border-r border-[#2B2E34] p-4">
                  <p className="font-mono text-[8px] uppercase tracking-wider text-[#686D75]">
                    Resume
                  </p>

                  <div className="mt-5 space-y-1">
                    {resumeSections.slice(0, 6).map((section, index) => (
                      <div
                        key={section}
                        className={`rounded-md px-2 py-2 text-[9px] ${
                          index === 0
                            ? "bg-[#FAF9F4] text-[#111111]"
                            : "text-[#8D9198]"
                        }`}
                      >
                        {section}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <div className="border-r border-[#2B2E34] p-6">
                  <p className="font-mono text-[8px] uppercase tracking-wider text-[#686D75]">
                    Personal information
                  </p>

                  <div className="mt-6 space-y-5">
                    <div>
                      <div className="mb-2 h-1.5 w-14 rounded bg-[#FAF9F4]/50" />

                      <div className="h-9 rounded-lg border border-[#30333A] bg-[#191C21]" />
                    </div>

                    <div>
                      <div className="mb-2 h-1.5 w-20 rounded bg-[#FAF9F4]/50" />

                      <div className="h-9 rounded-lg border border-[#30333A] bg-[#191C21]" />
                    </div>

                    <div>
                      <div className="mb-2 h-1.5 w-16 rounded bg-[#FAF9F4]/50" />

                      <div className="h-20 rounded-lg border border-[#30333A] bg-[#191C21]" />
                    </div>
                  </div>
                </div>

                {/* Resume preview */}
                <div className="bg-[#DCDCDC] p-5">
                  <div className="h-full bg-white p-5 shadow-xl">
                    <div className="h-3 w-28 rounded bg-[#111111]/80" />

                    <div className="mt-2 h-1.5 w-20 rounded bg-[#111111]/15" />

                    <div className="mt-6 space-y-2">
                      <div className="h-1.5 w-full rounded bg-[#111111]/10" />

                      <div className="h-1.5 w-[90%] rounded bg-[#111111]/10" />

                      <div className="h-1.5 w-[75%] rounded bg-[#111111]/10" />
                    </div>

                    <div className="mt-8">
                      <div className="h-2 w-20 rounded bg-[#111111]/50" />

                      <div className="mt-3 space-y-2">
                        <div className="h-1.5 w-full rounded bg-[#111111]/10" />

                        <div className="h-1.5 w-[85%] rounded bg-[#111111]/10" />

                        <div className="h-1.5 w-[92%] rounded bg-[#111111]/10" />
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="h-2 w-16 rounded bg-[#111111]/50" />

                      <div className="mt-3 flex gap-2">
                        <div className="h-4 w-12 rounded bg-[#E7E7E7]" />

                        <div className="h-4 w-16 rounded bg-[#E7E7E7]" />

                        <div className="h-4 w-10 rounded bg-[#E7E7E7]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPLETE PROFILE
      ========================================================= */}
      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#4B5563]">
                Complete profile / 04
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
                Nothing important
                <br />
                gets left behind.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#6B7280]">
                Structure your information once and let your chosen template
                handle the presentation.
              </p>
            </div>

            <div className="grid border-t border-[#E7E7E7] sm:grid-cols-2">
              {resumeSections.map((section, index) => (
                <motion.div
                  key={section}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  className="group flex items-center justify-between border-b border-[#E7E7E7] py-5 sm:pr-6"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[9px] text-[#9CA3AF]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm">{section}</span>
                  </div>

                  <ArrowUpRight
                    size={14}
                    className="text-[#9CA3AF] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#111111]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#E7E7E7] px-5 py-24 lg:px-10 lg:py-32">
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-white/60 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px]">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-col justify-between gap-10 md:flex-row md:items-end"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#4B5563]">
                Ready when you are / 05
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
                Stop formatting.
                <br />
                Start building.
              </h2>
            </div>

            <Link
              to="/builder"
              className="group flex w-fit items-center gap-3 rounded-[14px] bg-[#191C21] px-6 py-4 text-sm font-medium text-[#FAF9F4] transition-all hover:-translate-y-1"
            >
              Create your resume
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Features;
