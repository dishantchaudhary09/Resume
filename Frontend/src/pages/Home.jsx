import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import MouseSpotlight from "../components/MouseSpotlight";
import ScrollReveal from "../components/ScrollReveal";

import features from "../data/features";
import { templates } from "../data/templates";
import ResumeMockup from "../components/ResumeMockup";
import HomeResumeSkeleton from "../components/HomeResumeSkelton";

function Home() {
  return (
    <div className="min-h-screen w-full bg-[#FAF9F4] text-[#111111]">
      {/* =====================================================
          MOUSE SPOTLIGHT
      ===================================================== */}
      <MouseSpotlight />

      {/* =====================================================
          FIXED NAVBAR
      ===================================================== */}
      <Navbar />

      {/* 
        Navbar height = 64px
        Main starts after navbar.
      */}
      <main className="pt-16">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="flex min-h-[calc(100svh-64px)] items-center overflow-hidden bg-[#111111] px-6 py-10 text-[#FAF9F4] md:px-8 md:py-12 lg:py-14">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* =================================================
                HERO CONTENT
            ================================================= */}

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#E7E7E7]/70">
                Resume builder / 01
              </p>

              <h1 className="mt-5 max-w-3xl text-5xl font-medium leading-[1.02] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                Build a resume
                <br />
                worth remembering.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#E7E7E7]/75 md:text-lg">
                Create a polished, professional resume with carefully designed
                templates, simple editing tools, and instant PDF export.
              </p>

              {/* CTA */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/builder"
                  className="inline-flex items-center justify-center rounded-[15px] border border-[#FAF9F4] bg-[#FAF9F4] px-5 py-3 text-sm font-medium text-[#111111] transition duration-300 hover:-translate-y-1"
                >
                  Create Resume
                </Link>

                <Link to="/templates">
                  <Button
                    variant="outline"
                    className="border-[#E7E7E7]/30 text-[#FAF9F4]"
                  >
                    Explore Templates
                  </Button>
                </Link>
              </div>
            </div>

            {/* =================================================
                HOME RESUME SKELETON
            ================================================= */}

            <div className="relative">
              {/* Preview Label */}
              <div className="absolute -right-5 -top-5 z-10 hidden rounded-full border border-[#E7E7E7]/20 bg-[#111111]/50 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-[#E7E7E7]/60 backdrop-blur-md md:block">
                Resume Preview
              </div>

              {/* Resume */}
              <div className="mx-auto w-full max-w-[500px] rotate-1 bg-[#FAF9F4] p-4 shadow-2xl transition-transform duration-500 hover:rotate-0 md:p-5">
                <HomeResumeSkeleton />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <ScrollReveal>
          <section className="px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-4xl">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#111111]/50">
                  The idea / 02
                </p>

                <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
                  Your resume is more than a document.
                  <br />
                  It is your first impression.
                </h2>

                <p className="mt-7 max-w-2xl text-base leading-7 text-[#111111]/60">
                  ResumeForge gives you the structure and tools to turn your
                  experience into a resume that feels intentional, clear, and
                  professional.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* =====================================================
            FEATURES
        ===================================================== */}

        <section className="bg-[#E7E7E7] px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#111111]/50">
                    Features / 03
                  </p>

                  <h2 className="mt-5 max-w-2xl text-4xl font-medium tracking-[-0.035em] md:text-5xl">
                    Everything you need.
                    <br />
                    Nothing you don't.
                  </h2>
                </div>

                <p className="max-w-sm text-sm leading-6 text-[#111111]/60">
                  A focused set of tools designed to make resume building easier
                  without getting in your way.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <ScrollReveal key={feature.id}>
                  <div
                    className={`min-h-[320px] rounded-[15px] p-7 transition-transform duration-300 hover:-translate-y-1 ${
                      feature.id % 2 === 1
                        ? "bg-[#191C21] text-[#FAF9F4]"
                        : "border border-[#111111]/10 bg-[#FAF9F4] text-[#111111]"
                    }`}
                  >
                    <p
                      className={`font-mono text-xs ${
                        feature.id % 2 === 1
                          ? "text-[#E7E7E7]/50"
                          : "text-[#111111]/45"
                      }`}
                    >
                      {String(feature.id).padStart(2, "0")}
                    </p>

                    <h3 className="mt-20 text-2xl font-medium">
                      {feature.title}
                    </h3>

                    <p
                      className={`mt-4 text-sm leading-6 ${
                        feature.id % 2 === 1
                          ? "text-[#E7E7E7]/65"
                          : "text-[#111111]/60"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            TEMPLATES
        ===================================================== */}

        <ScrollReveal>
          <section className="px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#111111]/50">
                    Templates / 04
                  </p>

                  <h2 className="mt-5 text-4xl font-medium tracking-[-0.035em] md:text-5xl">
                    Find a layout
                    <br />
                    that feels like you.
                  </h2>
                </div>

                <Link to="/templates">
                  <Button variant="outline">View all templates</Button>
                </Link>
              </div>

              <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {templates.map((template) => (
                  <Link
                    key={template.id}
                    to={`/builder?template=${template.id}`}
                    className="group rounded-[15px] bg-[#E7E7E7] p-5"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-[#FAF9F4] shadow-sm transition-transform duration-300 group-hover:-translate-y-2">
                      <ResumeMockup style={template.style} mode="template" />
                    </div>

                    <div className="pt-4">
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold text-[#111111]">
                          {template.name}
                        </p>

                        <span className="font-mono text-[9px] text-[#111111]/35">
                          {template.number}
                        </span>
                      </div>

                      <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-[#111111]/45">
                        {template.category}
                      </p>

                      <p className="mt-2 text-sm leading-5 text-[#111111]/60">
                        {template.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* =====================================================
            CTA
        ===================================================== */}

        <ScrollReveal>
          <section className="bg-[#191C21] px-6 py-24 text-[#FAF9F4] lg:px-8 lg:py-32">
            <div className="mx-auto max-w-7xl">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#E7E7E7]/50">
                Start / 05
              </p>

              <div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end">
                <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.035em] md:text-6xl">
                  Your next opportunity
                  <br />
                  deserves a better resume.
                </h2>

                <Link
                  to="/builder"
                  className="shrink-0 rounded-[15px] bg-[#FAF9F4] px-6 py-4 text-sm font-medium text-[#111111] transition duration-300 hover:-translate-y-1"
                >
                  Build yours
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </div>
  );
}

export default Home;
