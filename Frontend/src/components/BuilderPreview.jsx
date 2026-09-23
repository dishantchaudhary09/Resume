import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

/* =========================================================
   HELPERS
========================================================= */

function getUrl(value) {
  if (!value) return "#";

  return value.startsWith("http") ? value : `https://${value}`;
}

/* =========================================================
   SECTION HEADING
========================================================= */

function ResumeHeading({ title }) {
  return (
    <h2
      className="
        border-b border-[#D8D8D8]
        pb-1
        text-[12px]
        font-semibold
        uppercase
        tracking-[0.12em]
        text-[#111111]
      "
    >
      {title}
    </h2>
  );
}

/* =========================================================
   SOCIAL LINKS
========================================================= */

function SocialLinks({ links }) {
  if (!links?.linkedin && !links?.github && !links?.portfolio) {
    return null;
  }

  return (
    <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-[10.5px] text-[#4B5563]">
      {links.linkedin && (
        <a
          href={getUrl(links.linkedin)}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="flex items-center justify-center"
        >
          <FaLinkedin size={12} />
        </a>
      )}

      {links.github && (
        <a
          href={getUrl(links.github)}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
          className="flex items-center justify-center"
        >
          <FaGithub size={12} />
        </a>
      )}

      {links.portfolio && (
        <a
          href={getUrl(links.portfolio)}
          target="_blank"
          rel="noreferrer"
          aria-label="Portfolio"
          title="Portfolio"
          className="flex items-center justify-center"
        >
          <FaGlobe size={12} />
        </a>
      )}
    </div>
  );
}

/* =========================================================
   MODERN TEMPLATE
========================================================= */

function ModernTemplate({ data }) {
  return (
    <div
      className="w-full bg-white text-[#111111]"
      style={{
        minHeight: "1123px",
        padding: "42px 40px",
        boxSizing: "border-box",
      }}
    >
      <div className="border-b-[2px] border-[#111111] pb-5">
        <h1 className="text-[27px] font-semibold leading-none tracking-tight">
          {data.personal.fullName || "Your Name"}
        </h1>

        {(data.personal.email ||
          data.personal.phone ||
          data.personal.location) && (
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[10.5px] text-[#4B5563]">
            {data.personal.email && <span>{data.personal.email}</span>}

            {data.personal.phone && <span>{data.personal.phone}</span>}

            {data.personal.location && <span>{data.personal.location}</span>}
          </div>
        )}

        <SocialLinks links={data.socialLinks} />
      </div>

      <CommonSections data={data} />
    </div>
  );
}

/* =========================================================
   CLASSIC TEMPLATE
========================================================= */

function ClassicTemplate({ data }) {
  return (
    <div
      className="w-full bg-white text-[#111111]"
      style={{
        minHeight: "1123px",
        padding: "42px 40px",
        boxSizing: "border-box",
      }}
    >
      <div className="text-center">
        <h1 className="text-[26px] font-bold uppercase leading-none tracking-wide">
          {data.personal.fullName || "Your Name"}
        </h1>

        {(data.personal.email ||
          data.personal.phone ||
          data.personal.location) && (
          <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10.5px] text-[#4B5563]">
            {data.personal.email && <span>{data.personal.email}</span>}

            {data.personal.phone && <span>{data.personal.phone}</span>}

            {data.personal.location && <span>{data.personal.location}</span>}
          </div>
        )}

        <div className="flex justify-center">
          <SocialLinks links={data.socialLinks} />
        </div>
      </div>

      <div className="mt-6">
        <CommonSections data={data} />
      </div>
    </div>
  );
}

/* =========================================================
   MINIMAL TEMPLATE
========================================================= */

function MinimalTemplate({ data }) {
  return (
    <div
      className="w-full bg-white text-[#111111]"
      style={{
        minHeight: "1123px",
        padding: "42px 40px",
        boxSizing: "border-box",
      }}
    >
      <div>
        <h1 className="text-[27px] font-medium leading-none">
          {data.personal.fullName || "Your Name"}
        </h1>

        {(data.personal.email ||
          data.personal.phone ||
          data.personal.location) && (
          <div className="mt-4 text-[10.5px] text-[#4B5563]">
            {data.personal.email}

            {data.personal.email && data.personal.phone && " · "}

            {data.personal.phone}

            {(data.personal.email || data.personal.phone) &&
              data.personal.location &&
              " · "}

            {data.personal.location}
          </div>
        )}

        <SocialLinks links={data.socialLinks} />
      </div>

      <div className="mt-6">
        <CommonSections data={data} />
      </div>
    </div>
  );
}

/* =========================================================
   CREATIVE TEMPLATE
========================================================= */

function CreativeTemplate({ data }) {
  return (
    <div
      className="w-full bg-white text-[#111111]"
      style={{
        minHeight: "1123px",
        boxSizing: "border-box",
      }}
    >
      <div className="grid w-full grid-cols-[31%_69%] items-start">
        {/* SIDEBAR */}

        <aside
          className="
            self-start
            min-h-[1123px]
            bg-[#191C21]
            px-[30px]
            py-[42px]
            text-[#FAF9F4]
          "
        >
          <h1 className="break-words text-[22px] font-semibold leading-tight">
            {data.personal.fullName || "Your Name"}
          </h1>

          <div className="mt-6 space-y-2.5 text-[9.5px] leading-[1.45] text-[#D8D8D8]">
            {data.personal.email && (
              <p className="break-all">{data.personal.email}</p>
            )}

            {data.personal.phone && <p>{data.personal.phone}</p>}

            {data.personal.location && <p>{data.personal.location}</p>}
          </div>

          {data.socialLinks?.linkedin ||
          data.socialLinks?.github ||
          data.socialLinks?.portfolio ? (
            <div className="mt-6 space-y-2.5 text-[9.5px] text-[#D8D8D8]">
              {data.socialLinks.linkedin && (
                <a
                  href={getUrl(data.socialLinks.linkedin)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="flex items-center justify-center"
                >
                  <FaLinkedin size={11} />
                </a>
              )}

              {data.socialLinks.github && (
                <a
                  href={getUrl(data.socialLinks.github)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className="flex items-center justify-center"
                >
                  <FaGithub size={11} />
                </a>
              )}

              {data.socialLinks.portfolio && (
                <a
                  href={getUrl(data.socialLinks.portfolio)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Portfolio"
                  title="Portfolio"
                  className="flex items-center justify-center"
                >
                  <FaGlobe size={11} />
                </a>
              )}
            </div>
          ) : null}

          {data.skills.length > 0 && (
            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.16em]">Skills</p>

              <div className="mt-3 space-y-2 text-[9.5px] leading-[1.45] text-[#D8D8D8]">
                {data.skills.map((skill, index) => (
                  <p key={index}>
                    {typeof skill === "string" ? skill : skill.name}
                  </p>
                ))}
              </div>
            </div>
          )}
        </aside>

        {/* MAIN CONTENT */}

        <div className="px-[38px] py-[42px]">
          <CommonSections data={data} />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   COMMON SECTIONS
========================================================= */

function CommonSections({ data }) {
  const {
    personal,
    education,
    experience,
    skills,
    projects,
    certifications,
    achievements,
  } = data;

  const hasAnything =
    personal.summary ||
    experience.length ||
    education.length ||
    skills.length ||
    projects.length ||
    certifications.length ||
    achievements.length;

  if (!hasAnything) {
    return (
      <div className="flex min-h-[420px] items-center justify-center">
        <div className="text-center">
          <p className="text-[12px] font-medium text-[#111111]">
            Your resume preview
          </p>

          <p className="mt-2 max-w-[260px] text-[10px] leading-[1.5] text-[#777777]">
            Start filling in your details to see your resume appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* PROFILE */}

      {personal.summary && (
        <section className="mt-7">
          <ResumeHeading title="Profile" />

          <p className="mt-3 text-[11px] leading-[1.5] text-[#4B5563]">
            {personal.summary}
          </p>
        </section>
      )}

      {/* EXPERIENCE */}

      {experience.length > 0 && (
        <section className="mt-7">
          <ResumeHeading title="Experience" />

          <div className="mt-3 space-y-4">
            {experience.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between gap-5">
                  <div className="min-w-0">
                    <h3 className="text-[12px] font-semibold leading-[1.3]">
                      {item.jobTitle}
                    </h3>

                    {(item.company || item.location) && (
                      <p className="mt-1 text-[10.5px] leading-[1.4] text-[#4B5563]">
                        {item.company}

                        {item.company && item.location && " · "}

                        {item.location}
                      </p>
                    )}
                  </div>

                  {(item.startDate || item.endDate) && (
                    <span className="shrink-0 text-[10px] leading-[1.4] text-[#4B5563]">
                      {item.startDate}

                      {item.startDate && item.endDate && " — "}

                      {item.endDate}
                    </span>
                  )}
                </div>

                {item.description && (
                  <p className="mt-2 text-[10.5px] leading-[1.5] text-[#4B5563]">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EDUCATION */}

      {education.length > 0 && (
        <section className="mt-7">
          <ResumeHeading title="Education" />

          <div className="mt-3 space-y-4">
            {education.map((item, index) => (
              <div key={index} className="flex justify-between gap-5">
                <div className="min-w-0">
                  <h3 className="text-[12px] font-semibold leading-[1.3]">
                    {item.degree}
                  </h3>

                  {(item.institution || item.location) && (
                    <p className="mt-1 text-[10.5px] leading-[1.4] text-[#4B5563]">
                      {item.institution}

                      {item.institution && item.location && " · "}

                      {item.location}
                    </p>
                  )}

                  {item.description && (
                    <p className="mt-2 text-[10.5px] leading-[1.5] text-[#4B5563]">
                      {item.description}
                    </p>
                  )}
                </div>

                {(item.startDate || item.endDate) && (
                  <span className="shrink-0 text-[10px] leading-[1.4] text-[#4B5563]">
                    {item.startDate}

                    {item.startDate && item.endDate && " — "}

                    {item.endDate}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROJECTS */}

      {projects.length > 0 && (
        <section className="mt-7">
          <ResumeHeading title="Projects" />

          <div className="mt-3 space-y-4">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="flex items-start justify-between gap-5">
                  <h3 className="text-[12px] font-semibold leading-[1.3]">
                    {project.name}
                  </h3>

                  {project.link && (
                    <span className="shrink-0 text-[10px] underline">View</span>
                  )}
                </div>

                {project.technologies && (
                  <p className="mt-1 text-[10.5px] font-medium leading-[1.4] text-[#4B5563]">
                    {project.technologies}
                  </p>
                )}

                {project.description && (
                  <p className="mt-2 text-[10.5px] leading-[1.5] text-[#4B5563]">
                    {project.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SKILLS */}

      {skills.length > 0 && (
        <section className="mt-7">
          <ResumeHeading title="Skills" />

          <div className="mt-3 flex flex-wrap items-start gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="
                  inline-flex
                  h-auto
                  w-auto
                  items-center
                  justify-center
                  max-w-full
                  whitespace-normal
                  rounded
                  bg-[#E7E7E7]
                  px-2.5
                  py-1.5
                  text-center
                  text-[10px]
                  leading-[1.1]
                  break-words
                  text-[#111111]
                "
              >
                {typeof skill === "string" ? skill : skill.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* CERTIFICATIONS */}

      {certifications.length > 0 && (
        <section className="mt-7">
          <ResumeHeading title="Certifications" />

          <div className="mt-3 space-y-3">
            {certifications.map((item, index) => (
              <div key={index}>
                <p className="text-[11px] font-semibold leading-[1.3]">
                  {item.name}
                </p>

                {(item.organization || item.date) && (
                  <p className="mt-1 text-[10.5px] leading-[1.4] text-[#4B5563]">
                    {item.organization}

                    {item.organization && item.date && " · "}

                    {item.date}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ACHIEVEMENTS */}

      {achievements.length > 0 && (
        <section className="mt-7">
          <ResumeHeading title="Achievements" />

          <div className="mt-3 space-y-3">
            {achievements.map((item, index) => (
              <div key={index}>
                <p className="text-[11px] font-semibold leading-[1.3]">
                  {item.title}
                </p>

                {(item.organization || item.date) && (
                  <p className="mt-1 text-[10.5px] leading-[1.4] text-[#4B5563]">
                    {item.organization}

                    {item.organization && item.date && " · "}

                    {item.date}
                  </p>
                )}

                {item.description && (
                  <p className="mt-2 text-[10.5px] leading-[1.5] text-[#4B5563]">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

/* =========================================================
   A4 PREVIEW
========================================================= */

function A4AutoFit({ children }) {
  const containerRef = useRef(null);

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const updateScale = () => {
      const availableWidth = container.clientWidth;

      if (!availableWidth) {
        return;
      }

      /*
       * A4 CSS pixel dimensions at 96 DPI:
       *
       * 210mm ≈ 794px
       * 297mm ≈ 1123px
       */
      const documentWidth = 794;

      const nextScale = availableWidth / documentWidth;

      setScale(Math.min(1, nextScale));
    };

    updateScale();

    const resizeObserver = new ResizeObserver(() => {
      updateScale();
    });

    resizeObserver.observe(container);

    window.addEventListener("resize", updateScale);

    const timeout = setTimeout(updateScale, 100);

    return () => {
      clearTimeout(timeout);

      resizeObserver.disconnect();

      window.removeEventListener("resize", updateScale);
    };
  }, [children]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white"
      style={{
        aspectRatio: "210 / 297",
      }}
    >
      <div
        id="resume-export-document"
        className="
          resume-pdf-document
          absolute
          left-0
          top-0
          origin-top-left
          overflow-hidden
          bg-white
        "
        style={{
          width: "794px",
          minWidth: "794px",

          height: "1123px",
          minHeight: "1123px",

          maxWidth: "794px",
          maxHeight: "1123px",

          transform: `scale(${scale})`,
          transformOrigin: "top left",

          boxSizing: "border-box",
          backgroundColor: "#ffffff",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

function BuilderPreview() {
  const resume = useSelector((state) => state.resume);

  const selectedTemplate = resume?.template || "modern";

  const data = {
    personal: resume?.personal || {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
    },

    education: resume?.education || [],

    experience: resume?.experience || [],

    skills: resume?.skills || [],

    projects: resume?.projects || [],

    certifications: resume?.certifications || [],

    achievements: resume?.achievements || [],

    socialLinks: resume?.socialLinks || {
      linkedin: "",
      github: "",
      portfolio: "",
    },
  };

  let template;

  if (selectedTemplate === "classic") {
    template = <ClassicTemplate data={data} />;
  } else if (selectedTemplate === "minimal") {
    template = <MinimalTemplate data={data} />;
  } else if (selectedTemplate === "creative") {
    template = <CreativeTemplate data={data} />;
  } else {
    template = <ModernTemplate data={data} />;
  }

  return <A4AutoFit>{template}</A4AutoFit>;
}

export default BuilderPreview;
