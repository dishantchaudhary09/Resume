import { useSelector } from "react-redux";

const SectionTitle = ({ children }) => (
  <div className="mb-2 flex items-center gap-2">
    <div className="h-px flex-1 bg-[#DCDCDC]" />
    <h3 className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#444]">
      {children}
    </h3>
    <div className="h-px flex-1 bg-[#DCDCDC]" />
  </div>
);

const Content = ({ title, children }) => (
  <div className="mt-4">
    <SectionTitle>{title}</SectionTitle>
    {children}
  </div>
);

const Experience = ({ resume, compact = false }) => {
  const experience = resume?.experience?.length
    ? resume.experience
    : [{ jobTitle: "Full Stack Developer", company: "Digital Labs", description: "Developed responsive web applications using React and Node.js.", startDate: "2024", endDate: "Present" }];

  return (
  <Content title="Experience">
    <div className="space-y-3">
      {experience.slice(0, 2).map((item, index) => (
      <div key={index}>
        <div className="flex justify-between">
          <div className="text-[7px] font-semibold">{item.jobTitle || item.position || "Job Position"}</div>
          {!compact && <span className="text-[5.5px] text-[#888]">{item.startDate} {item.startDate && item.endDate ? "-" : ""} {item.endDate}</span>}
        </div>
        <div className="text-[6px] text-[#777]">{item.company || "Company"}</div>
        <p className="mt-1 text-[6px] leading-[1.5] text-[#666]">
          {item.description || "Your experience description will appear here."}
        </p>
      </div>
      ))}
    </div>
  </Content>
  );
};

const Projects = ({ resume }) => (
  <Content title="Projects">
    <div className="space-y-2 text-[6px] leading-[1.5] text-[#666]">
      {(resume?.projects?.length ? resume.projects : [{ name: "Project Management Platform", description: "A collaborative team workflow platform." }, { name: "Personal Finance Dashboard", description: "A responsive expense tracking dashboard." }]).slice(0, 2).map((project, index) => (
        <div key={index}><strong className="text-[#333]">{project.name || project.title || "Project Name"}</strong> - {project.description || "Project description"}</div>
      ))}
    </div>
  </Content>
);

const Skills = ({ resume }) => (
  <Content title="Skills">
    <div className="flex flex-wrap gap-1.5">
      {(resume?.skills?.length ? resume.skills : ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Git', 'REST API', 'Tailwind CSS']).map((skill, index) => (
        <span key={index} className="rounded-full bg-[#F1F1EF] px-2 py-1 text-[5.5px] text-[#555]">{typeof skill === "string" ? skill : skill.name}</span>
      ))}
    </div>
  </Content>
);

function ModernTemplate({ resume }) {
  const personal = resume?.personal || {};
  return (
    <div className="min-h-[520px] bg-white p-5 text-[#222]">
      <div className="border-b border-[#D9D9D9] pb-3">
        <div className="text-[17px] font-bold tracking-tight">{personal.fullName || "Your Name"}</div>
        <div className="mt-1 text-[6px] text-[#777]">{[personal.email, personal.phone, personal.location].filter(Boolean).join(" - ") || "email@example.com - Phone - Location"}</div>
      </div>
      <Content title="Profile"><p className="text-[6.5px] leading-[1.55] text-[#666]">{personal.summary || "Your professional summary will appear here."}</p></Content>
      <Experience resume={resume} />
      <Projects resume={resume} />
      <Content title="Education"><div className="text-[7px] font-semibold">{resume?.education?.[0]?.degree || "B.Tech in Computer Science"}</div><div className="text-[6px] text-[#777]">{resume?.education?.[0]?.institution || "Your institution"}</div></Content>
      <Skills resume={resume} />
      <Content title="Achievements"><div className="space-y-1 text-[6px] text-[#666]">• Hackathon finalist<br />• Open-source contributor</div></Content>
    </div>
  );
}

function ClassicTemplate({ resume }) {
  return (
    <div className="min-h-[520px] bg-white p-6 text-[#222]">
      <div className="text-center"><div className="text-[18px] font-bold">{resume?.personal?.fullName || "Your Name"}</div><div className="mt-1 text-[5.5px] text-[#777]">{resume?.personal?.email || "email@example.com"}</div></div>
      <div className="mt-4 border-t border-[#222] pt-3"><Content title="Profile"><p className="text-[6px] leading-[1.55] text-[#666]">{resume?.personal?.summary || "Your professional summary will appear here."}</p></Content><Experience resume={resume} compact /><Content title="Education"><div className="text-[7px] font-bold">{resume?.education?.[0]?.degree || "Bachelor of Technology"}</div><div className="text-[6px] text-[#777]">{resume?.education?.[0]?.institution || "Your institution"}</div></Content><Projects resume={resume} /><Skills resume={resume} /></div>
    </div>
  );
}

function MinimalTemplate({ resume }) {
  return (
    <div className="min-h-[520px] bg-white p-6 text-[#222]"><div className="mb-5"><div className="text-[20px] font-semibold tracking-tight">{resume?.personal?.fullName || "Your Name"}</div><div className="mt-1 text-[5.5px] text-[#888]">{resume?.personal?.email || "email@example.com"}</div></div><Content title="Profile"><p className="text-[6px] leading-[1.6] text-[#666]">{resume?.personal?.summary || "Your professional summary will appear here."}</p></Content><Experience resume={resume} compact /><Projects resume={resume} /><Content title="Education"><div className="text-[6px] text-[#666]">{resume?.education?.[0]?.degree || "Your education"}</div></Content><Skills resume={resume} /></div>
  );
}

function CreativeTemplate({ resume }) {
  return (
    <div className="grid min-h-[520px] grid-cols-[34%_66%] bg-white"><aside className="bg-[#202124] p-5 text-white"><div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#222]">{(resume?.personal?.fullName || "YN").split(" ").map((word) => word[0]).slice(0, 2).join("")}</div><div className="text-[14px] font-bold leading-tight">{resume?.personal?.fullName || "Your Name"}</div><div className="mt-5"><div className="mb-2 text-[5.5px] uppercase tracking-[0.18em] text-[#999]">Contact</div><div className="space-y-1 text-[5.5px] text-[#DDD]">{resume?.personal?.email || "email@example.com"}<br />{resume?.personal?.phone || "Phone"}<br />{resume?.personal?.location || "Location"}</div></div></aside><main className="p-5 text-[#222]"><Content title="Profile"><p className="text-[6px] leading-[1.55] text-[#666]">{resume?.personal?.summary || "Your professional summary will appear here."}</p></Content><Experience resume={resume} compact /><Projects resume={resume} /><Content title="Education"><div className="text-[6px] text-[#666]">{resume?.education?.[0]?.degree || "Your education"}</div></Content></main></div>
  );
}

function ResumeMockup({ style = "modern", resume: resumeProp }) {
  const resumeState = useSelector((state) => state.resume);
  const resume = resumeProp || resumeState;

  if (style === "classic") return <ClassicTemplate resume={resume} />;
  if (style === "minimal") return <MinimalTemplate resume={resume} />;
  if (style === "creative") return <CreativeTemplate resume={resume} />;
  return <ModernTemplate resume={resume} />;
}

export default ResumeMockup;