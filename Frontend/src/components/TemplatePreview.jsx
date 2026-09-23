import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

/* =========================================================
   SAMPLE DATA
========================================================= */

const sampleData = {
  modern: {
    name: "Alex Morgan",
    role: "Full Stack Developer",
    email: "alex.morgan@email.com",
    phone: "+91 98765 43210",
    location: "Bengaluru, India",

    links: {
      linkedin: "linkedin.com/in/alexmorgan",
      github: "github.com/alexmorgan",
      portfolio: "alexmorgan.dev",
    },

    summary:
      "Full Stack Developer focused on building scalable web applications and creating clean, user-friendly digital experiences.",

    experience: [
      {
        jobTitle: "Full Stack Developer",
        company: "TechNova Solutions",
        location: "Bengaluru",
        startDate: "2024",
        endDate: "Present",
        description:
          "Developed responsive web applications using React, Node.js and MongoDB. Collaborated with cross-functional teams to deliver production-ready features.",
      },
      {
        jobTitle: "Frontend Developer Intern",
        company: "PixelWorks",
        location: "Remote",
        startDate: "2023",
        endDate: "2024",
        description:
          "Built reusable React components and improved application performance across multiple client projects.",
      },
    ],

    education: [
      {
        degree: "B.Tech in Computer Science",
        institution: "ABC Institute of Technology",
        location: "Bengaluru",
        startDate: "2021",
        endDate: "2025",
      },
    ],

    projects: [
      {
        name: "DevBoard",
        technologies: "React · Node.js · MongoDB",
        description:
          "A developer productivity platform for managing projects, tasks and technical documentation.",
        link: "#",
      },
      {
        name: "ShopSphere",
        technologies: "MERN Stack",
        description:
          "A full-stack e-commerce application with authentication, product management and secure checkout flow.",
        link: "#",
      },
    ],

    skills: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Git"],

    certifications: [
      {
        name: "Full Stack Web Development",
        organization: "Tech Academy",
        date: "2025",
      },
    ],

    achievements: [
      {
        title: "Hackathon Finalist",
        organization: "National Hackathon",
        date: "2024",
        description:
          "Selected among the top teams for developing an innovative technology solution.",
      },
    ],
  },

  classic: {
    name: "Emily Carter",
    role: "Software Engineer",
    email: "emily.carter@email.com",
    phone: "+1 987 654 3210",
    location: "New York, USA",

    links: {
      linkedin: "linkedin.com/in/emilycarter",
      github: "github.com/emilycarter",
      portfolio: "emilycarter.dev",
    },

    summary:
      "Software Engineer with experience developing reliable applications, working with modern technologies and solving complex technical problems.",

    experience: [
      {
        jobTitle: "Software Engineer",
        company: "Global Systems",
        location: "New York",
        startDate: "2023",
        endDate: "Present",
        description:
          "Designed and developed backend services and frontend interfaces for enterprise applications.",
      },
      {
        jobTitle: "Software Engineering Intern",
        company: "Digital Labs",
        location: "New York",
        startDate: "2022",
        endDate: "2023",
        description:
          "Worked with senior developers to implement application features and fix production issues.",
      },
    ],

    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "New York University",
        location: "New York",
        startDate: "2019",
        endDate: "2023",
      },
    ],

    projects: [
      {
        name: "Task Management System",
        technologies: "Java · Spring Boot · MySQL",
        description:
          "Enterprise task management platform designed for collaborative teams.",
      },
      {
        name: "Analytics Dashboard",
        technologies: "React · Node.js",
        description:
          "Interactive dashboard for monitoring business metrics and reports.",
      },
    ],

    skills: ["Java", "Spring Boot", "React", "SQL", "Git", "REST APIs"],

    certifications: [
      {
        name: "AWS Cloud Practitioner",
        organization: "Amazon Web Services",
        date: "2024",
      },
    ],

    achievements: [
      {
        title: "Employee Excellence Award",
        organization: "Global Systems",
        date: "2024",
      },
    ],
  },

  minimal: {
    name: "Daniel Lee",
    role: "Product Designer",
    email: "daniel.lee@email.com",
    phone: "+91 91234 56789",
    location: "Mumbai, India",

    links: {
      linkedin: "linkedin.com/in/daniellee",
      github: "github.com/daniellee",
      portfolio: "daniellee.design",
    },

    summary:
      "Product Designer focused on creating simple, accessible and meaningful digital experiences.",

    experience: [
      {
        jobTitle: "Product Designer",
        company: "DesignHouse",
        location: "Mumbai",
        startDate: "2023",
        endDate: "Present",
        description:
          "Designed user experiences and interfaces for web and mobile products while working closely with engineering teams.",
      },
    ],

    education: [
      {
        degree: "B.Des in Interaction Design",
        institution: "Design Institute",
        location: "Mumbai",
        startDate: "2019",
        endDate: "2023",
      },
    ],

    projects: [
      {
        name: "Finance App",
        technologies: "Figma · UX Research · Prototyping",
        description:
          "Designed a personal finance application focused on simplifying money management.",
      },
      {
        name: "Travel Platform",
        technologies: "Figma · Design Systems",
        description:
          "Created a responsive travel booking experience with a reusable design system.",
      },
    ],

    skills: [
      "Figma",
      "UI Design",
      "UX Research",
      "Prototyping",
      "Design Systems",
    ],

    certifications: [
      {
        name: "Google UX Design",
        organization: "Google",
        date: "2023",
      },
    ],

    achievements: [
      {
        title: "Design Excellence Award",
        organization: "Design Institute",
        date: "2023",
      },
    ],
  },

  creative: {
    name: "Ryan Cooper",
    role: "Creative Developer",
    email: "ryan.cooper@email.com",
    phone: "+91 99887 66554",
    location: "New Delhi, India",

    links: {
      linkedin: "linkedin.com/in/ryancooper",
      github: "github.com/ryancooper",
      portfolio: "ryancooper.dev",
    },

    summary:
      "Creative Developer combining design and technology to create memorable digital experiences and interactive products.",

    experience: [
      {
        jobTitle: "Creative Developer",
        company: "Studio North",
        location: "New Delhi",
        startDate: "2023",
        endDate: "Present",
        description:
          "Created interactive websites and digital experiences using modern frontend technologies and animation.",
      },
      {
        jobTitle: "Frontend Developer",
        company: "Creative Labs",
        location: "Remote",
        startDate: "2022",
        endDate: "2023",
        description:
          "Developed visually engaging interfaces and reusable frontend components.",
      },
    ],

    education: [
      {
        degree: "Bachelor of Computer Applications",
        institution: "Delhi University",
        location: "New Delhi",
        startDate: "2019",
        endDate: "2022",
      },
    ],

    projects: [
      {
        name: "Interactive Portfolio",
        technologies: "React · Framer Motion · WebGL",
        description:
          "Interactive portfolio website showcasing creative development projects.",
      },
      {
        name: "Music Experience",
        technologies: "React · Three.js",
        description:
          "Experimental music interface combining 3D visuals with interactive controls.",
      },
    ],

    skills: [
      "React",
      "Three.js",
      "JavaScript",
      "Framer Motion",
      "Figma",
      "WebGL",
    ],

    certifications: [
      {
        name: "Frontend Development",
        organization: "Meta",
        date: "2024",
      },
    ],

    achievements: [
      {
        title: "Creative Coding Finalist",
        organization: "Design Week",
        date: "2024",
      },
    ],
  },
};

/* =========================================================
   HELPERS
========================================================= */

function getUrl(value) {
  if (!value) return "#";

  return value.startsWith("http") ? value : `https://${value}`;
}

/* =========================================================
   SOCIAL LINKS
========================================================= */

function SocialLinks({ links = {} }) {
  if (!links.linkedin && !links.github && !links.portfolio) {
    return null;
  }

  return (
    <div className="mt-1.5 flex items-center gap-3 text-[7px] text-[#4B5563]">
      {links.linkedin && (
        <a
          href={getUrl(links.linkedin)}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1"
        >
          <FaLinkedin size={8} />
          <span>LinkedIn</span>
        </a>
      )}

      {links.github && (
        <a
          href={getUrl(links.github)}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1"
        >
          <FaGithub size={8} />
          <span>GitHub</span>
        </a>
      )}

      {links.portfolio && (
        <a
          href={getUrl(links.portfolio)}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1"
        >
          <FaGlobe size={8} />
          <span>Portfolio</span>
        </a>
      )}
    </div>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function ResumeHeading({ title }) {
  return (
    <h2 className="border-b border-[#D8D8D8] pb-1 text-[8px] font-semibold uppercase tracking-[0.12em]">
      {title}
    </h2>
  );
}

/* =========================================================
   MODERN TEMPLATE
========================================================= */

function ModernTemplate({ data }) {
  return (
    <div className="h-full w-full overflow-hidden bg-white px-7 py-6 text-[#111111]">
      <div className="border-b-2 border-[#111111] pb-2.5">
        <h1 className="text-[24px] font-semibold leading-none tracking-tight">
          {data.name}
        </h1>

        <p className="mt-1 text-[9px] font-medium">{data.role}</p>

        <div className="mt-1.5 flex flex-wrap gap-x-3 text-[7px] text-[#4B5563]">
          <span>{data.email}</span>
          <span>{data.phone}</span>
          <span>{data.location}</span>
        </div>

        <SocialLinks links={data.links} />
      </div>

      <section className="mt-3">
        <ResumeHeading title="Profile" />

        <p className="mt-1.5 text-[7.5px] leading-[1.35] text-[#4B5563]">
          {data.summary}
        </p>
      </section>

      <Experience data={data} />
      <Education data={data} />
      <Projects data={data} />
      <Skills data={data} />
      <Certifications data={data} />
      <Achievements data={data} />
    </div>
  );
}

/* =========================================================
   CLASSIC TEMPLATE
========================================================= */

function ClassicTemplate({ data }) {
  return (
    <div className="h-full w-full overflow-hidden bg-white px-8 py-6 text-[#111111]">
      <div className="border-b border-[#111111] pb-3 text-center">
        <h1 className="text-[22px] font-bold uppercase tracking-wide">
          {data.name}
        </h1>

        <p className="mt-1 text-[8.5px]">{data.role}</p>

        <div className="mt-1.5 flex justify-center gap-3 text-[6.5px] text-[#4B5563]">
          <span>{data.email}</span>
          <span>{data.phone}</span>
          <span>{data.location}</span>
        </div>

        <div className="flex justify-center">
          <SocialLinks links={data.links} />
        </div>
      </div>

      <div className="mt-3">
        <section>
          <ResumeHeading title="Professional Summary" />

          <p className="mt-1.5 text-[7.5px] leading-[1.35] text-[#4B5563]">
            {data.summary}
          </p>
        </section>

        <Experience data={data} />
        <Education data={data} />
        <Projects data={data} />
        <Skills data={data} />
        <Certifications data={data} />
        <Achievements data={data} />
      </div>
    </div>
  );
}

/* =========================================================
   MINIMAL TEMPLATE
========================================================= */

function MinimalTemplate({ data }) {
  return (
    <div className="h-full w-full overflow-hidden bg-white px-8 py-6 text-[#111111]">
      <div className="border-b border-[#E0E0E0] pb-3">
        <h1 className="text-[22px] font-medium leading-none">{data.name}</h1>

        <p className="mt-1 text-[8.5px] text-[#4B5563]">{data.role}</p>

        <div className="mt-1.5 text-[6.5px] text-[#4B5563]">
          {data.email} · {data.phone} · {data.location}
        </div>

        <SocialLinks links={data.links} />
      </div>

      <div className="mt-4 space-y-3">
        <section>
          <ResumeHeading title="About" />

          <p className="mt-1.5 text-[7.5px] leading-[1.35] text-[#4B5563]">
            {data.summary}
          </p>
        </section>

        <Experience data={data} />
        <Education data={data} />
        <Projects data={data} />
        <Skills data={data} />
        <Certifications data={data} />
        <Achievements data={data} />
      </div>
    </div>
  );
}

/* =========================================================
   CREATIVE TEMPLATE
========================================================= */

function CreativeTemplate({ data }) {
  return (
    <div className="grid h-full w-full grid-cols-[31%_69%] overflow-hidden bg-white text-[#111111]">
      <aside className="bg-[#191C21] px-5 py-6 text-[#FAF9F4]">
        <h1 className="text-[18px] font-semibold leading-tight">{data.name}</h1>

        <p className="mt-1 text-[8px] text-[#D8D8D8]">{data.role}</p>

        <div className="mt-4 space-y-1.5 text-[6.5px] leading-3 text-[#D8D8D8]">
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <p>{data.location}</p>
        </div>

        <div className="mt-5 flex flex-col gap-2 text-[#D8D8D8]">
          {data.links?.linkedin && (
            <a
              href={getUrl(data.links.linkedin)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[6.5px]"
            >
              <FaLinkedin size={8} />
              LinkedIn
            </a>
          )}

          {data.links?.github && (
            <a
              href={getUrl(data.links.github)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[6.5px]"
            >
              <FaGithub size={8} />
              GitHub
            </a>
          )}

          {data.links?.portfolio && (
            <a
              href={getUrl(data.links.portfolio)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[6.5px]"
            >
              <FaGlobe size={8} />
              Portfolio
            </a>
          )}
        </div>

        <div className="mt-5">
          <p className="text-[7px] uppercase tracking-[0.16em]">Skills</p>

          <div className="mt-2 space-y-1.5 text-[6.5px] text-[#D8D8D8]">
            {data.skills.map((skill, index) => (
              <p key={index}>
                {typeof skill === "string" ? skill : skill.name}
              </p>
            ))}
          </div>
        </div>
      </aside>

      <div className="px-6 py-6">
        <section>
          <ResumeHeading title="Profile" />

          <p className="mt-1.5 text-[7.5px] leading-[1.35] text-[#4B5563]">
            {data.summary}
          </p>
        </section>

        <Experience data={data} />
        <Education data={data} />
        <Projects data={data} />
        <Certifications data={data} />
        <Achievements data={data} />
      </div>
    </div>
  );
}

/* =========================================================
   EXPERIENCE
========================================================= */

function Experience({ data }) {
  if (!data.experience?.length) return null;

  return (
    <section className="mt-3">
      <ResumeHeading title="Experience" />

      <div className="mt-2 space-y-2">
        {data.experience.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between gap-3">
              <div>
                <h3 className="text-[7.5px] font-semibold">{item.jobTitle}</h3>

                <p className="mt-0.5 text-[6.5px] text-[#4B5563]">
                  {item.company}
                  {item.company && item.location && " · "}
                  {item.location}
                </p>
              </div>

              <span className="whitespace-nowrap text-[6px] text-[#4B5563]">
                {item.startDate}
                {item.startDate && item.endDate && " — "}
                {item.endDate}
              </span>
            </div>

            {item.description && (
              <p className="mt-0.5 text-[6.5px] leading-[1.3] text-[#4B5563]">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   EDUCATION
========================================================= */

function Education({ data }) {
  if (!data.education?.length) return null;

  return (
    <section className="mt-3">
      <ResumeHeading title="Education" />

      <div className="mt-2 space-y-1.5">
        {data.education.map((item, index) => (
          <div key={index} className="flex justify-between gap-3">
            <div>
              <h3 className="text-[7.5px] font-semibold">{item.degree}</h3>

              <p className="mt-0.5 text-[6.5px] text-[#4B5563]">
                {item.institution}
                {item.institution && item.location && " · "}
                {item.location}
              </p>
            </div>

            <span className="whitespace-nowrap text-[6px] text-[#4B5563]">
              {item.startDate}
              {item.startDate && item.endDate && " — "}
              {item.endDate}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   PROJECTS
========================================================= */

function Projects({ data }) {
  if (!data.projects?.length) return null;

  return (
    <section className="mt-3">
      <ResumeHeading title="Projects" />

      <div className="mt-2 space-y-1.5">
        {data.projects.map((project, index) => (
          <div key={index}>
            <div className="flex justify-between gap-3">
              <h3 className="text-[7.5px] font-semibold">{project.name}</h3>

              {project.link && (
                <span className="text-[6px] underline">View</span>
              )}
            </div>

            {project.technologies && (
              <p className="mt-0.5 text-[6.5px] font-medium text-[#4B5563]">
                {project.technologies}
              </p>
            )}

            {project.description && (
              <p className="mt-0.5 text-[6.5px] leading-[1.3] text-[#4B5563]">
                {project.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   SKILLS
========================================================= */

function Skills({ data }) {
  if (!data.skills?.length) return null;

  return (
    <section className="mt-3">
      <ResumeHeading title="Skills" />

      <div className="mt-1.5 flex flex-wrap gap-1">
        {data.skills.map((skill, index) => (
          <span
            key={index}
            className="rounded bg-[#E7E7E7] px-1.5 py-0.5 text-[6px]"
          >
            {typeof skill === "string" ? skill : skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   CERTIFICATIONS
========================================================= */

function Certifications({ data }) {
  if (!data.certifications?.length) return null;

  return (
    <section className="mt-3">
      <ResumeHeading title="Certifications" />

      <div className="mt-1.5 space-y-1">
        {data.certifications.map((item, index) => (
          <div key={index}>
            <p className="text-[7px] font-semibold">{item.name}</p>

            <p className="mt-0.5 text-[6px] text-[#4B5563]">
              {item.organization}
              {item.organization && item.date && " · "}
              {item.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   ACHIEVEMENTS
========================================================= */

function Achievements({ data }) {
  if (!data.achievements?.length) return null;

  return (
    <section className="mt-3">
      <ResumeHeading title="Achievements" />

      <div className="mt-1.5 space-y-1">
        {data.achievements.map((item, index) => (
          <div key={index}>
            <p className="text-[7px] font-semibold">{item.title}</p>

            <p className="mt-0.5 text-[6px] text-[#4B5563]">
              {item.organization}
              {item.organization && item.date && " · "}
              {item.date}
            </p>

            {item.description && (
              <p className="mt-0.5 text-[6px] leading-[1.3] text-[#4B5563]">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

function TemplatePreview({ style = "modern", links = {} }) {
  const data = sampleData[style] || sampleData.modern;

  /*
    Important:
    Sample social links are preserved.
    If external links are passed, they override sample links.
  */
  const previewData = {
    ...data,
    links: {
      ...data.links,
      ...links,
    },
  };

  let template;

  if (style === "classic") {
    template = <ClassicTemplate data={previewData} />;
  } else if (style === "minimal") {
    template = <MinimalTemplate data={previewData} />;
  } else if (style === "creative") {
    template = <CreativeTemplate data={previewData} />;
  } else {
    template = <ModernTemplate data={previewData} />;
  }

  /*
    The inner resume gets a little extra height.
    It is then scaled down into the exact A4 frame.

    This prevents:
    - content getting cut
    - bottom sections disappearing
    - data overlapping
    - different templates having different overflow
  */

  const scale = 0.82;
  const innerSize = `${100 / scale}%`;

  return (
    <div
      className="relative w-full overflow-hidden bg-white"
      style={{
        aspectRatio: "210 / 297",
      }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: innerSize,
          height: innerSize,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {template}
      </div>
    </div>
  );
}

export default TemplatePreview;
