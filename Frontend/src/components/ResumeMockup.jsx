import {
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

/* =========================================================
   HELPERS
========================================================= */

const getUrl = (url) => {
  if (!url) return "#";
  return url.startsWith("http") ? url : `https://${url}`;
};

const safeArray = (value) => (Array.isArray(value) ? value : []);

const demoResumeData = {
  name: "Alex Morgan",
  role: "Full Stack Developer",
  email: "alex.morgan@example.com",
  phone: "+91 98765 43210",
  location: "Lucknow, India",
  summary:
    "Full Stack Developer focused on building clean, scalable web applications with modern JavaScript technologies.",
  education: [
    {
      degree: "B.Tech in Computer Science",
      institute: "Institute of Technology",
      date: "2021 - 2025",
    },
  ],
  experience: [
    {
      title: "Full Stack Developer",
      company: "Software Studio",
      date: "2024 - Present",
      description:
        "Built and shipped reliable web applications with React, Node.js, and MongoDB for growing teams.",
    },
    {
      title: "Web Developer Intern",
      company: "Digital Labs",
      date: "2023 - 2024",
      description:
        "Developed responsive interfaces and reusable components while working closely with senior engineers.",
    },
  ],
  skills: [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
  ],
  projects: [
    {
      name: "Portfolio Platform",
      description:
        "A responsive portfolio platform for presenting projects and professional experience.",
    },
    {
      name: "Resume Builder",
      description:
        "A guided resume builder with live templates, structured editing, and PDF export.",
    },
  ],
  certifications: [
    { name: "Full Stack Web Development" },
    { name: "JavaScript Development" },
  ],
  achievements: [
    { title: "Built multiple production-ready web applications" },
    { title: "Completed competitive coding challenges" },
  ],
};

const demoResumeLinks = {
  linkedin: "linkedin.com/in/alex-morgan",
  github: "github.com/alex-morgan",
  portfolio: "alex-morgan.dev",
};

const hasMeaningfulResumeData = (data = {}, links = {}) =>
  Boolean(
    data.name ||
    data.role ||
    data.email ||
    data.phone ||
    data.location ||
    data.summary ||
    safeArray(data.education).length ||
    safeArray(data.experience).length ||
    safeArray(data.skills).length ||
    safeArray(data.projects).length ||
    safeArray(data.certifications).length ||
    safeArray(data.achievements).length ||
    links.linkedin ||
    links.github ||
    links.portfolio,
  );

const getInitials = (name = "") => {
  const words = name.trim().split(/\s+/).filter(Boolean);

  if (!words.length) return "RF";

  return words
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

/* =========================================================
   SOCIAL LINKS
========================================================= */

function SocialLinks({ links = {}, dark = false }) {
  const iconClass = dark
    ? "text-white hover:text-neutral-300"
    : "text-neutral-600 hover:text-black";

  return (
    <div className="flex items-center gap-2">
      {links.linkedin && (
        <a
          href={getUrl(links.linkedin)}
          target="_blank"
          rel="noreferrer"
          className={iconClass}
          aria-label="LinkedIn"
        >
          <FaLinkedin size={10} />
        </a>
      )}

      {links.github && (
        <a
          href={getUrl(links.github)}
          target="_blank"
          rel="noreferrer"
          className={iconClass}
          aria-label="GitHub"
        >
          <FaGithub size={10} />
        </a>
      )}

      {links.portfolio && (
        <a
          href={getUrl(links.portfolio)}
          target="_blank"
          rel="noreferrer"
          className={iconClass}
          aria-label="Portfolio"
        >
          <FaGlobe size={10} />
        </a>
      )}
    </div>
  );
}

/* =========================================================
   CONTACT
========================================================= */

function Contact({ data, dark = false }) {
  const text = dark ? "text-neutral-300" : "text-neutral-500";

  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[6px] ${text}`}
    >
      {data.email && (
        <span className="flex items-center gap-1">
          <FaEnvelope size={6} />
          {data.email}
        </span>
      )}

      {data.phone && (
        <span className="flex items-center gap-1">
          <FaPhone size={6} />
          {data.phone}
        </span>
      )}

      {data.location && (
        <span className="flex items-center gap-1">
          <FaLocationDot size={6} />
          {data.location}
        </span>
      )}
    </div>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function Title({ children, line = true }) {
  return (
    <div className="mb-1.5">
      <h3 className="text-[7px] font-bold tracking-[0.13em] text-neutral-800 uppercase">
        {children}
      </h3>

      {line && <div className="mt-1 h-px bg-neutral-200" />}
    </div>
  );
}

/* =========================================================
   MODERN
========================================================= */

function ModernTemplate({ data, links }) {
  const experience = safeArray(data.experience);
  const projects = safeArray(data.projects);
  const education = safeArray(data.education);
  const skills = safeArray(data.skills);
  const certifications = safeArray(data.certifications);
  const achievements = safeArray(data.achievements);

  return (
    <div className="h-full overflow-hidden bg-white px-[25px] py-[21px] text-neutral-800">
      <header className="border-b border-neutral-200 pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-[20px] font-bold tracking-[-0.04em]">
              {data.name || "Your Name"}
            </h1>

            {data.role && (
              <p className="mt-0.5 text-[7px] font-medium tracking-[0.12em] text-neutral-500 uppercase">
                {data.role}
              </p>
            )}
          </div>

          <SocialLinks links={links} />
        </div>

        <div className="mt-2.5">
          <Contact data={data} />
        </div>
      </header>

      <main className="mt-3.5">
        {data.summary && (
          <section>
            <Title>Profile</Title>

            <p className="text-[6.7px] leading-[1.45] text-neutral-600">
              {data.summary}
            </p>
          </section>
        )}

        {experience.length > 0 && (
          <section className={data.summary ? "mt-3" : ""}>
            <Title>Experience</Title>

            <div className="space-y-2.5">
              {experience.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between gap-3">
                    <div className="min-w-0">
                      <h4 className="text-[7px] font-bold">
                        {item.title || "Position"}
                      </h4>

                      {item.company && (
                        <p className="text-[6px] text-neutral-500">
                          {item.company}
                        </p>
                      )}
                    </div>

                    {item.date && (
                      <span className="shrink-0 text-[5.8px] text-neutral-400">
                        {item.date}
                      </span>
                    )}
                  </div>

                  {item.description && (
                    <p className="mt-0.5 text-[6.2px] leading-[1.4] text-neutral-600">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section className="mt-3">
            <Title>Projects</Title>

            <div className="grid grid-cols-2 gap-3">
              {projects.map((item, index) => (
                <div key={index}>
                  <h4 className="text-[7px] font-bold">
                    {item.name || "Project"}
                  </h4>

                  {item.description && (
                    <p className="mt-0.5 text-[6px] leading-[1.4] text-neutral-600">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section className="mt-3">
            <Title>Education</Title>

            {education.map((item, index) => (
              <div key={index} className="flex justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="text-[7px] font-bold">
                    {item.degree || "Degree"}
                  </h4>

                  {item.institute && (
                    <p className="text-[6px] text-neutral-500">
                      {item.institute}
                    </p>
                  )}
                </div>

                {item.date && (
                  <span className="shrink-0 text-[5.8px] text-neutral-400">
                    {item.date}
                  </span>
                )}
              </div>
            ))}
          </section>
        )}

        {(skills.length > 0 ||
          certifications.length > 0 ||
          achievements.length > 0) && (
          <div className="mt-3 grid grid-cols-3 gap-4">
            {skills.length > 0 && (
              <section>
                <Title>Skills</Title>

                <div className="flex flex-wrap gap-1">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded bg-neutral-100 px-1.5 py-0.5 text-[5.7px] text-neutral-600"
                    >
                      {typeof skill === "string" ? skill : skill.name}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {certifications.length > 0 && (
              <section>
                <Title>Certifications</Title>

                <div className="space-y-1">
                  {certifications.map((item, index) => (
                    <p key={index} className="text-[6px] text-neutral-600">
                      {typeof item === "string" ? item : item.name}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {achievements.length > 0 && (
              <section>
                <Title>Achievements</Title>

                <div className="space-y-1">
                  {achievements.map((item, index) => (
                    <p
                      key={index}
                      className="text-[6px] leading-[1.3] text-neutral-600"
                    >
                      • {typeof item === "string" ? item : item.title}
                    </p>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

/* =========================================================
   CLASSIC
========================================================= */

function ClassicTemplate({ data, links }) {
  const experience = safeArray(data.experience);
  const projects = safeArray(data.projects);
  const education = safeArray(data.education);
  const skills = safeArray(data.skills);
  const certifications = safeArray(data.certifications);
  const achievements = safeArray(data.achievements);

  return (
    <div className="h-full overflow-hidden bg-[#fffdf9] px-[27px] py-[22px] text-neutral-800">
      <header className="text-center">
        <h1 className="font-serif text-[19px] font-semibold">
          {data.name || "Your Name"}
        </h1>

        {data.role && (
          <p className="mt-0.5 text-[6.5px] tracking-[0.16em] text-neutral-500 uppercase">
            {data.role}
          </p>
        )}

        <div className="mt-2 flex justify-center">
          <Contact data={data} />
        </div>

        <div className="mt-1.5 flex justify-center">
          <SocialLinks links={links} />
        </div>

        <div className="mt-2.5 border-t border-neutral-400" />
      </header>

      <main className="mt-3">
        {data.summary && (
          <section>
            <Title>Professional Summary</Title>

            <p className="text-[6.4px] leading-[1.45] text-neutral-600">
              {data.summary}
            </p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mt-3">
            <Title>Professional Experience</Title>

            <div className="space-y-2.5">
              {experience.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between gap-3">
                    <div className="min-w-0">
                      <h4 className="text-[7px] font-bold">
                        {item.title || "Position"}
                      </h4>

                      {item.company && (
                        <p className="text-[6px] italic text-neutral-500">
                          {item.company}
                        </p>
                      )}
                    </div>

                    {item.date && (
                      <span className="shrink-0 text-[5.8px] text-neutral-500">
                        {item.date}
                      </span>
                    )}
                  </div>

                  {item.description && (
                    <p className="mt-0.5 text-[6.1px] leading-[1.4] text-neutral-600">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section className="mt-3">
            <Title>Education</Title>

            {education.map((item, index) => (
              <div key={index} className="flex justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="text-[7px] font-bold">
                    {item.degree || "Degree"}
                  </h4>

                  {item.institute && (
                    <p className="text-[6px] text-neutral-500">
                      {item.institute}
                    </p>
                  )}
                </div>

                {item.date && (
                  <span className="shrink-0 text-[5.8px] text-neutral-500">
                    {item.date}
                  </span>
                )}
              </div>
            ))}
          </section>
        )}

        {projects.length > 0 && (
          <section className="mt-3">
            <Title>Selected Projects</Title>

            <div className="grid grid-cols-2 gap-4">
              {projects.map((item, index) => (
                <div key={index}>
                  <h4 className="text-[7px] font-bold">
                    {item.name || "Project"}
                  </h4>

                  {item.description && (
                    <p className="mt-0.5 text-[6px] leading-[1.4] text-neutral-600">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {(skills.length > 0 ||
          certifications.length > 0 ||
          achievements.length > 0) && (
          <div className="mt-3 grid grid-cols-3 gap-4">
            {skills.length > 0 && (
              <section>
                <Title>Skills</Title>

                <p className="text-[5.9px] leading-[1.7] text-neutral-600">
                  {skills
                    .map((skill) =>
                      typeof skill === "string" ? skill : skill.name,
                    )
                    .join(" • ")}
                </p>
              </section>
            )}

            {certifications.length > 0 && (
              <section>
                <Title>Certifications</Title>

                <div className="space-y-1">
                  {certifications.map((item, index) => (
                    <p key={index} className="text-[6px] text-neutral-600">
                      {typeof item === "string" ? item : item.name}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {achievements.length > 0 && (
              <section>
                <Title>Achievements</Title>

                <div className="space-y-1">
                  {achievements.map((item, index) => (
                    <p key={index} className="text-[6px] text-neutral-600">
                      • {typeof item === "string" ? item : item.title}
                    </p>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

/* =========================================================
   MINIMAL
========================================================= */

function MinimalTemplate({ data, links }) {
  const experience = safeArray(data.experience);
  const projects = safeArray(data.projects);
  const education = safeArray(data.education);
  const skills = safeArray(data.skills);
  const certifications = safeArray(data.certifications);
  const achievements = safeArray(data.achievements);

  return (
    <div className="h-full overflow-hidden bg-white px-[30px] py-[24px] text-neutral-800">
      <header>
        <div className="flex justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-[21px] font-light tracking-[-0.05em]">
              {data.name || "Your Name"}
            </h1>

            {data.role && (
              <p className="mt-0.5 text-[6.5px] tracking-[0.18em] text-neutral-400 uppercase">
                {data.role}
              </p>
            )}
          </div>

          <SocialLinks links={links} />
        </div>

        <div className="mt-3 border-t border-neutral-200 pt-2">
          <Contact data={data} />
        </div>
      </header>

      <main className="mt-4">
        {data.summary && (
          <section>
            <h3 className="text-[6.5px] tracking-[0.2em] text-neutral-400 uppercase">
              About
            </h3>

            <p className="mt-1.5 text-[6.5px] leading-[1.55] text-neutral-500">
              {data.summary}
            </p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mt-3.5">
            <h3 className="text-[6.5px] tracking-[0.2em] text-neutral-400 uppercase">
              Experience
            </h3>

            <div className="mt-2 space-y-2.5">
              {experience.map((item, index) => (
                <div key={index} className="grid grid-cols-[1fr_auto] gap-5">
                  <div>
                    <h4 className="text-[7px] font-medium">
                      {item.title || "Position"}
                    </h4>

                    {item.company && (
                      <p className="mt-0.5 text-[6px] text-neutral-400">
                        {item.company}
                      </p>
                    )}

                    {item.description && (
                      <p className="mt-0.5 text-[6px] leading-[1.45] text-neutral-500">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {item.date && (
                    <span className="text-[5.8px] text-neutral-400">
                      {item.date}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {(projects.length > 0 || education.length > 0) && (
          <div className="mt-3.5 grid grid-cols-2 gap-6">
            {projects.length > 0 && (
              <section>
                <h3 className="text-[6.5px] tracking-[0.2em] text-neutral-400 uppercase">
                  Projects
                </h3>

                <div className="mt-2 space-y-2">
                  {projects.map((item, index) => (
                    <div key={index}>
                      <h4 className="text-[7px] font-medium">
                        {item.name || "Project"}
                      </h4>

                      {item.description && (
                        <p className="mt-0.5 text-[6px] leading-[1.45] text-neutral-500">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {education.length > 0 && (
              <section>
                <h3 className="text-[6.5px] tracking-[0.2em] text-neutral-400 uppercase">
                  Education
                </h3>

                <div className="mt-2">
                  {education.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[1fr_auto] gap-3"
                    >
                      <div>
                        <h4 className="text-[7px] font-medium">
                          {item.degree || "Degree"}
                        </h4>

                        {item.institute && (
                          <p className="mt-0.5 text-[6px] text-neutral-400">
                            {item.institute}
                          </p>
                        )}
                      </div>

                      {item.date && (
                        <span className="text-[5.8px] text-neutral-400">
                          {item.date}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {(skills.length > 0 ||
          certifications.length > 0 ||
          achievements.length > 0) && (
          <div className="mt-3.5 grid grid-cols-3 gap-5">
            {skills.length > 0 && (
              <section>
                <h3 className="text-[6.5px] tracking-[0.2em] text-neutral-400 uppercase">
                  Skills
                </h3>

                <div className="mt-1.5 flex flex-wrap gap-x-2 gap-y-1">
                  {skills.map((skill, index) => (
                    <span key={index} className="text-[6px] text-neutral-500">
                      {typeof skill === "string" ? skill : skill.name}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {certifications.length > 0 && (
              <section>
                <h3 className="text-[6.5px] tracking-[0.2em] text-neutral-400 uppercase">
                  Certifications
                </h3>

                <div className="mt-1.5 space-y-1">
                  {certifications.map((item, index) => (
                    <p key={index} className="text-[6px] text-neutral-500">
                      {typeof item === "string" ? item : item.name}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {achievements.length > 0 && (
              <section>
                <h3 className="text-[6.5px] tracking-[0.2em] text-neutral-400 uppercase">
                  Achievements
                </h3>

                <div className="mt-1.5 space-y-1">
                  {achievements.map((item, index) => (
                    <p key={index} className="text-[6px] text-neutral-500">
                      {typeof item === "string" ? item : item.title}
                    </p>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

/* =========================================================
   CREATIVE
========================================================= */

function CreativeTemplate({ data, links }) {
  const experience = safeArray(data.experience);
  const projects = safeArray(data.projects);
  const education = safeArray(data.education);
  const skills = safeArray(data.skills);
  const certifications = safeArray(data.certifications);
  const achievements = safeArray(data.achievements);

  return (
    <div className="flex h-full overflow-hidden bg-white text-neutral-800">
      <aside className="w-[28%] shrink-0 bg-[#181818] px-[13px] py-[21px] text-white">
        <div>
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-neutral-600 text-[11px] font-semibold">
            {getInitials(data.name)}
          </div>

          <h1 className="mt-3 text-[12px] font-semibold leading-tight">
            {data.name || "Your Name"}
          </h1>

          {data.role && (
            <p className="mt-1 text-[5.8px] tracking-[0.1em] text-neutral-400 uppercase">
              {data.role}
            </p>
          )}
        </div>

        {(data.email || data.phone || data.location) && (
          <div className="mt-5">
            <h3 className="text-[6px] tracking-[0.15em] text-neutral-500 uppercase">
              Contact
            </h3>

            <div className="mt-2 space-y-2 text-[5.5px] text-neutral-300">
              {data.email && (
                <p className="flex items-start gap-1.5">
                  <FaEnvelope size={6} className="mt-0.5 shrink-0" />
                  <span className="break-all">{data.email}</span>
                </p>
              )}

              {data.phone && (
                <p className="flex items-center gap-1.5">
                  <FaPhone size={6} />
                  {data.phone}
                </p>
              )}

              {data.location && (
                <p className="flex items-start gap-1.5">
                  <FaLocationDot size={6} className="mt-0.5 shrink-0" />
                  {data.location}
                </p>
              )}
            </div>
          </div>
        )}

        {(links.linkedin || links.github || links.portfolio) && (
          <div className="mt-5">
            <h3 className="text-[6px] tracking-[0.15em] text-neutral-500 uppercase">
              Connect
            </h3>

            <div className="mt-2">
              <SocialLinks links={links} dark />
            </div>
          </div>
        )}

        {skills.length > 0 && (
          <div className="mt-5">
            <h3 className="text-[6px] tracking-[0.15em] text-neutral-500 uppercase">
              Skills
            </h3>

            <div className="mt-2 space-y-1.5">
              {skills.map((skill, index) => (
                <p key={index} className="text-[5.5px] text-neutral-300">
                  {typeof skill === "string" ? skill : skill.name}
                </p>
              ))}
            </div>
          </div>
        )}

        {certifications.length > 0 && (
          <div className="mt-5">
            <h3 className="text-[6px] tracking-[0.15em] text-neutral-500 uppercase">
              Certifications
            </h3>

            <div className="mt-2 space-y-1">
              {certifications.map((item, index) => (
                <p
                  key={index}
                  className="text-[5.5px] leading-[1.3] text-neutral-300"
                >
                  {typeof item === "string" ? item : item.name}
                </p>
              ))}
            </div>
          </div>
        )}
      </aside>

      <main className="w-[72%] px-[17px] py-[21px]">
        {data.summary && (
          <section>
            <h3 className="text-[7px] font-bold tracking-[0.13em] text-neutral-400 uppercase">
              Profile
            </h3>

            <p className="mt-1.5 text-[6.5px] leading-[1.5] text-neutral-600">
              {data.summary}
            </p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mt-4">
            <h3 className="text-[7px] font-bold tracking-[0.13em] text-neutral-400 uppercase">
              Experience
            </h3>

            <div className="mt-2.5 space-y-3">
              {experience.map((item, index) => (
                <div key={index} className="border-l border-neutral-200 pl-2.5">
                  <div className="flex justify-between gap-2">
                    <div>
                      <h4 className="text-[7px] font-bold">
                        {item.title || "Position"}
                      </h4>

                      {item.company && (
                        <p className="text-[6px] text-neutral-400">
                          {item.company}
                        </p>
                      )}
                    </div>

                    {item.date && (
                      <span className="text-[5.5px] text-neutral-400">
                        {item.date}
                      </span>
                    )}
                  </div>

                  {item.description && (
                    <p className="mt-0.5 text-[6px] leading-[1.45] text-neutral-600">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section className="mt-4">
            <h3 className="text-[7px] font-bold tracking-[0.13em] text-neutral-400 uppercase">
              Projects
            </h3>

            <div className="mt-2 grid grid-cols-2 gap-2">
              {projects.map((item, index) => (
                <div
                  key={index}
                  className="rounded border border-neutral-200 p-2"
                >
                  <h4 className="text-[7px] font-bold">
                    {item.name || "Project"}
                  </h4>

                  {item.description && (
                    <p className="mt-0.5 text-[5.8px] leading-[1.4] text-neutral-600">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section className="mt-4">
            <h3 className="text-[7px] font-bold tracking-[0.13em] text-neutral-400 uppercase">
              Education
            </h3>

            <div className="mt-2">
              {education.map((item, index) => (
                <div key={index} className="flex justify-between gap-2">
                  <div>
                    <h4 className="text-[7px] font-bold">
                      {item.degree || "Degree"}
                    </h4>

                    {item.institute && (
                      <p className="text-[6px] text-neutral-400">
                        {item.institute}
                      </p>
                    )}
                  </div>

                  {item.date && (
                    <span className="text-[5.5px] text-neutral-400">
                      {item.date}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {achievements.length > 0 && (
          <section className="mt-4">
            <h3 className="text-[7px] font-bold tracking-[0.13em] text-neutral-400 uppercase">
              Achievements
            </h3>

            <div className="mt-2 grid grid-cols-2 gap-2">
              {achievements.map((item, index) => (
                <p key={index} className="text-[6px] text-neutral-600">
                  • {typeof item === "string" ? item : item.title}
                </p>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ResumeMockup({
  style = "modern",
  mode = "default",
  data = {},
  links = {},
}) {
  const normalizedStyle = style?.toLowerCase?.() || "modern";
  const useDemoData =
    mode === "template" && !hasMeaningfulResumeData(data, links);
  const resumeData = useDemoData ? demoResumeData : data;
  const resumeLinks = useDemoData ? demoResumeLinks : links;

  return (
    <div
      className="mx-auto w-full max-w-[500px] overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
      style={{
        aspectRatio: "210 / 297",
      }}
    >
      {normalizedStyle === "modern" && (
        <ModernTemplate data={resumeData} links={resumeLinks} />
      )}

      {normalizedStyle === "classic" && (
        <ClassicTemplate data={resumeData} links={resumeLinks} />
      )}

      {normalizedStyle === "minimal" && (
        <MinimalTemplate data={resumeData} links={resumeLinks} />
      )}

      {normalizedStyle === "creative" && (
        <CreativeTemplate data={resumeData} links={resumeLinks} />
      )}
    </div>
  );
}
