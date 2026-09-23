import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { motion } from "motion/react";

import { ArrowLeft, Check, Eye, Plus, Save, Trash2, X } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import MouseSpotlight from "../components/MouseSpotlight";
import BuilderPreview from "../components/BuilderPreview";
import PDFExportButton from "../components/PdfExportButton";

import {
  updatePersonal,
  addEducation,
  updateEducation,
  deleteEducation,
  addExperience,
  updateExperience,
  deleteExperience,
  updateSkills,
  addProject,
  updateProject,
  deleteProject,
  addCertification,
  updateCertification,
  deleteCertification,
  addAchievement,
  updateAchievement,
  deleteAchievement,
  updateSocialLinks,
  updateTemplate,
  createResume,
  updateResume,
} from "../redux/slice/resumeSlice";

import { generateSummary } from "../service/api";

/* =========================================================
   DEFAULT DATA
========================================================= */

const emptyEducation = {
  degree: "",
  institution: "",
  location: "",
  startDate: "",
  endDate: "",
  description: "",
};

const emptyExperience = {
  jobTitle: "",
  company: "",
  location: "",
  startDate: "",
  endDate: "",
  description: "",
};

const emptyProject = {
  name: "",
  description: "",
  technologies: "",
  link: "",
};

const emptyCertification = {
  name: "",
  organization: "",
  date: "",
  link: "",
};

const emptyAchievement = {
  title: "",
  organization: "",
  date: "",
  description: "",
};

/* =========================================================
   INPUT
========================================================= */

function Input({ label, value, onChange, placeholder, type = "text" }) {
  const isDark = useSelector((state) => state.theme.mode === "dark");

  return (
    <div>
      <label
        className={`mb-2 block text-xs font-medium ${
          isDark ? "text-[#D7D7D7]" : "text-[#4B5563]"
        }`}
      >
        {label}
      </label>

      <input
        type={type}
        value={value || ""}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-[12px] border px-3.5 py-3 text-sm outline-none transition ${
          isDark
            ? "border-[#30343A] bg-[#191C21] text-[#FAF9F4] placeholder:text-[#70757D] focus:border-[#FAF9F4]"
            : "border-[#E0E0E0] bg-white text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#111111]"
        }`}
      />
    </div>
  );
}

/* =========================================================
   TEXTAREA
========================================================= */

function Textarea({ label, value, onChange, placeholder }) {
  const isDark = useSelector((state) => state.theme.mode === "dark");

  return (
    <div>
      <label
        className={`mb-2 block text-xs font-medium ${
          isDark ? "text-[#D7D7D7]" : "text-[#4B5563]"
        }`}
      >
        {label}
      </label>

      <textarea
        value={value || ""}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={5}
        className={`w-full resize-none rounded-[12px] border px-3.5 py-3 text-sm outline-none transition ${
          isDark
            ? "border-[#30343A] bg-[#191C21] text-[#FAF9F4] placeholder:text-[#70757D] focus:border-[#FAF9F4]"
            : "border-[#E0E0E0] bg-white text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#111111]"
        }`}
      />
    </div>
  );
}

/* =========================================================
   SECTION WRAPPER
========================================================= */

function SectionWrapper({ title, children }) {
  const isDark = useSelector((state) => state.theme.mode === "dark");

  return (
    <div
      className={`rounded-[15px] border p-5 sm:p-6 ${
        isDark ? "border-[#30343A] bg-[#111111]" : "border-[#E7E7E7] bg-white"
      }`}
    >
      <h2 className="text-lg font-medium">{title}</h2>

      <div className="mt-5">{children}</div>
    </div>
  );
}

/* =========================================================
   BUILDER
========================================================= */

function Builder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const resume = useSelector((state) => state.resume);
  const theme = useSelector((state) => state.theme.mode);

  const isDark = theme === "dark";

  const templateFromUrl = searchParams.get("template") || "modern";

  const [selectedTemplate, setSelectedTemplate] = useState(templateFromUrl);

  const [activeSection, setActiveSection] = useState("personal");

  const [showPreview, setShowPreview] = useState(false);

  const [saving, setSaving] = useState(false);

  const [message, setMessage] = useState("");

  const [summaryLoading, setSummaryLoading] = useState(false);

  const [skillInput, setSkillInput] = useState("");

  /* =======================================================
     TEMPLATE FROM URL
  ======================================================= */

  useEffect(() => {
    const template = searchParams.get("template");

    if (template) {
      setSelectedTemplate(template);
      dispatch(updateTemplate(template));
    }
  }, [searchParams, dispatch]);

  /* =======================================================
     EXISTING RESUME TEMPLATE
  ======================================================= */

  useEffect(() => {
    if (id && resume.template) {
      setSelectedTemplate(resume.template);
    }
  }, [id, resume.template]);

  /* =======================================================
     SECTIONS
  ======================================================= */

  const sections = [
    {
      id: "personal",
      label: "Personal Information",
    },
    {
      id: "education",
      label: "Education",
    },
    {
      id: "experience",
      label: "Experience",
    },
    {
      id: "skills",
      label: "Skills",
    },
    {
      id: "projects",
      label: "Projects",
    },
    {
      id: "certifications",
      label: "Certifications",
    },
    {
      id: "achievements",
      label: "Achievements",
    },
    {
      id: "social",
      label: "Social Links",
    },
  ];

  /* =======================================================
     TEMPLATE HANDLER
  ======================================================= */

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
    dispatch(updateTemplate(template));
  };

  /* =======================================================
     PERSONAL
  ======================================================= */

  const handlePersonalChange = (field, value) => {
    dispatch(
      updatePersonal({
        [field]: value,
      }),
    );
  };

  /* =======================================================
     EDUCATION
  ======================================================= */

  const handleAddEducation = () => {
    dispatch(
      addEducation({
        ...emptyEducation,
      }),
    );
  };

  const handleEducationChange = (index, field, value) => {
    dispatch(
      updateEducation({
        index,
        data: {
          [field]: value,
        },
      }),
    );
  };

  /* =======================================================
     EXPERIENCE
  ======================================================= */

  const handleAddExperience = () => {
    dispatch(
      addExperience({
        ...emptyExperience,
      }),
    );
  };

  const handleExperienceChange = (index, field, value) => {
    dispatch(
      updateExperience({
        index,
        data: {
          [field]: value,
        },
      }),
    );
  };

  /* =======================================================
     SKILLS
  ======================================================= */

  const addSkills = (value) => {
    const skillsToAdd = value
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);

    if (skillsToAdd.length === 0) {
      return;
    }

    const currentSkills = resume.skills || [];

    const newSkills = skillsToAdd.filter(
      (skill) =>
        !currentSkills.some(
          (existingSkill) =>
            existingSkill.toLowerCase() === skill.toLowerCase(),
        ),
    );

    if (newSkills.length > 0) {
      dispatch(updateSkills([...currentSkills, ...newSkills]));
    }

    setSkillInput("");
  };

  const handleSkillInputChange = (value) => {
    if (value.includes(",")) {
      addSkills(value);
      return;
    }

    setSkillInput(value);
  };

  const handleSkillKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addSkills(skillInput);
      return;
    }

    if (event.key === ",") {
      event.preventDefault();
      addSkills(skillInput);
      return;
    }

    if (
      event.key === "Backspace" &&
      skillInput.trim() === "" &&
      resume.skills.length > 0
    ) {
      dispatch(updateSkills(resume.skills.slice(0, -1)));
    }
  };

  const handleSkillPaste = (event) => {
    const pastedText = event.clipboardData.getData("text");

    if (pastedText.includes(",")) {
      event.preventDefault();
      addSkills(pastedText);
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = resume.skills.filter(
      (_, skillIndex) => skillIndex !== index,
    );

    dispatch(updateSkills(updatedSkills));
  };

  /* =======================================================
     PROJECTS
  ======================================================= */

  const handleAddProject = () => {
    dispatch(
      addProject({
        ...emptyProject,
      }),
    );
  };

  const handleProjectChange = (index, field, value) => {
    dispatch(
      updateProject({
        index,
        data: {
          [field]: value,
        },
      }),
    );
  };

  /* =======================================================
     CERTIFICATIONS
  ======================================================= */

  const handleAddCertification = () => {
    dispatch(
      addCertification({
        ...emptyCertification,
      }),
    );
  };

  const handleCertificationChange = (index, field, value) => {
    dispatch(
      updateCertification({
        index,
        data: {
          [field]: value,
        },
      }),
    );
  };

  /* =======================================================
     ACHIEVEMENTS
  ======================================================= */

  const handleAddAchievement = () => {
    dispatch(
      addAchievement({
        ...emptyAchievement,
      }),
    );
  };

  const handleAchievementChange = (index, field, value) => {
    dispatch(
      updateAchievement({
        index,
        data: {
          [field]: value,
        },
      }),
    );
  };

  /* =======================================================
     SOCIAL LINKS
  ======================================================= */

  const handleSocialChange = (field, value) => {
    dispatch(
      updateSocialLinks({
        [field]: value,
      }),
    );
  };

  /* =======================================================
     AI SUMMARY
  ======================================================= */

  const handleGenerateSummary = async () => {
    try {
      setSummaryLoading(true);

      const response = await generateSummary({
        name: resume.personal.fullName,
        experience: resume.experience,
        skills: resume.skills,
        projects: resume.projects,
      });

      const generatedSummary =
        response.data?.summary || response.data?.message || "";

      if (generatedSummary) {
        dispatch(
          updatePersonal({
            summary: generatedSummary,
          }),
        );
      }
    } catch (error) {
      console.error("Summary generation error:", error);
    } finally {
      setSummaryLoading(false);
    }
  };

  /* =======================================================
     SAVE
  ======================================================= */

  const handleSave = async () => {
    try {
      setSaving(true);
      setMessage("");

      const resumeData = {
        template: selectedTemplate,
        personal: resume.personal,
        education: resume.education,
        experience: resume.experience,
        skills: resume.skills,
        projects: resume.projects,
        certifications: resume.certifications,
        achievements: resume.achievements,
        socialLinks: resume.socialLinks,
      };

      if (resume.resumeId || id) {
        await dispatch(
          updateResume({
            id: resume.resumeId || id,
            data: resumeData,
          }),
        ).unwrap();

        setMessage("Resume saved successfully.");
      } else {
        const result = await dispatch(createResume(resumeData)).unwrap();

        setMessage("Resume created successfully.");

        if (result?._id) {
          navigate(`/builder/${result._id}`);
        }
      }
    } catch (error) {
      console.error("Save error:", error);

      setMessage(typeof error === "string" ? error : "Failed to save resume.");
    } finally {
      setSaving(false);
    }
  };

  /* =======================================================
     PERSONAL SECTION
  ======================================================= */

  const renderPersonal = () => (
    <SectionWrapper title="Personal Information">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="Full Name"
          value={resume.personal.fullName}
          onChange={(value) => handlePersonalChange("fullName", value)}
          placeholder="Your full name"
        />

        <Input
          label="Email"
          value={resume.personal.email}
          onChange={(value) => handlePersonalChange("email", value)}
          placeholder="you@example.com"
          type="email"
        />

        <Input
          label="Phone"
          value={resume.personal.phone}
          onChange={(value) => handlePersonalChange("phone", value)}
          placeholder="+91 XXXXX XXXXX"
        />

        <Input
          label="Location"
          value={resume.personal.location}
          onChange={(value) => handlePersonalChange("location", value)}
          placeholder="City, State"
        />
      </div>

      <div className="mt-4">
        <Textarea
          label="Professional Summary"
          value={resume.personal.summary}
          onChange={(value) => handlePersonalChange("summary", value)}
          placeholder="Write a short professional summary..."
        />

        <button
          type="button"
          onClick={handleGenerateSummary}
          disabled={summaryLoading}
          className={`mt-3 rounded-[12px] border px-4 py-2.5 text-xs font-medium transition ${
            isDark
              ? "border-[#3A3D43] hover:bg-[#191C21]"
              : "border-[#D7D7D7] hover:bg-[#F3F3F3]"
          }`}
        >
          {summaryLoading ? "Generating..." : "Generate Summary"}
        </button>
      </div>
    </SectionWrapper>
  );

  /* =======================================================
     EDUCATION SECTION
  ======================================================= */

  const renderEducation = () => (
    <SectionWrapper title="Education">
      <div className="space-y-5">
        {resume.education.map((item, index) => (
          <div
            key={index}
            className={`rounded-[12px] border p-4 ${
              isDark ? "border-[#30343A]" : "border-[#E7E7E7]"
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium">Education {index + 1}</p>

              <button
                type="button"
                onClick={() => dispatch(deleteEducation(index))}
                className="text-[#777] transition hover:text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Degree"
                value={item.degree}
                onChange={(value) =>
                  handleEducationChange(index, "degree", value)
                }
                placeholder="B.Tech Computer Science"
              />

              <Input
                label="Institution"
                value={item.institution}
                onChange={(value) =>
                  handleEducationChange(index, "institution", value)
                }
                placeholder="College / University"
              />

              <Input
                label="Location"
                value={item.location}
                onChange={(value) =>
                  handleEducationChange(index, "location", value)
                }
                placeholder="Lucknow, UP"
              />

              <Input
                label="Start Date"
                value={item.startDate}
                onChange={(value) =>
                  handleEducationChange(index, "startDate", value)
                }
                placeholder="2024"
              />

              <Input
                label="End Date"
                value={item.endDate}
                onChange={(value) =>
                  handleEducationChange(index, "endDate", value)
                }
                placeholder="2028"
              />
            </div>

            <div className="mt-4">
              <Textarea
                label="Description"
                value={item.description}
                onChange={(value) =>
                  handleEducationChange(index, "description", value)
                }
                placeholder="Additional details..."
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddEducation}
          className="flex items-center gap-2 rounded-[12px] border border-dashed border-[#BDBDBD] px-4 py-3 text-sm transition hover:border-[#111111]"
        >
          <Plus size={16} />
          Add Education
        </button>
      </div>
    </SectionWrapper>
  );

  /* =======================================================
     EXPERIENCE SECTION
  ======================================================= */

  const renderExperience = () => (
    <SectionWrapper title="Experience">
      <div className="space-y-5">
        {resume.experience.map((item, index) => (
          <div
            key={index}
            className={`rounded-[12px] border p-4 ${
              isDark ? "border-[#30343A]" : "border-[#E7E7E7]"
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium">Experience {index + 1}</p>

              <button
                type="button"
                onClick={() => dispatch(deleteExperience(index))}
                className="text-[#777] transition hover:text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Job Title"
                value={item.jobTitle}
                onChange={(value) =>
                  handleExperienceChange(index, "jobTitle", value)
                }
                placeholder="Frontend Developer"
              />

              <Input
                label="Company"
                value={item.company}
                onChange={(value) =>
                  handleExperienceChange(index, "company", value)
                }
                placeholder="Company name"
              />

              <Input
                label="Location"
                value={item.location}
                onChange={(value) =>
                  handleExperienceChange(index, "location", value)
                }
                placeholder="Remote / City"
              />

              <Input
                label="Start Date"
                value={item.startDate}
                onChange={(value) =>
                  handleExperienceChange(index, "startDate", value)
                }
                placeholder="Jan 2025"
              />

              <Input
                label="End Date"
                value={item.endDate}
                onChange={(value) =>
                  handleExperienceChange(index, "endDate", value)
                }
                placeholder="Present"
              />
            </div>

            <div className="mt-4">
              <Textarea
                label="Description"
                value={item.description}
                onChange={(value) =>
                  handleExperienceChange(index, "description", value)
                }
                placeholder="Describe your responsibilities and achievements..."
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddExperience}
          className="flex items-center gap-2 rounded-[12px] border border-dashed border-[#BDBDBD] px-4 py-3 text-sm transition hover:border-[#111111]"
        >
          <Plus size={16} />
          Add Experience
        </button>
      </div>
    </SectionWrapper>
  );

  /* =======================================================
     SKILLS SECTION
  ======================================================= */

  const renderSkills = () => (
    <SectionWrapper title="Skills">
      <div>
        <label
          className={`mb-2 block text-xs font-medium ${
            isDark ? "text-[#D7D7D7]" : "text-[#4B5563]"
          }`}
        >
          Add Skills
        </label>

        <input
          type="text"
          value={skillInput}
          onChange={(event) => handleSkillInputChange(event.target.value)}
          onKeyDown={handleSkillKeyDown}
          onPaste={handleSkillPaste}
          placeholder="Type a skill and press Enter"
          className={`w-full rounded-[12px] border px-3.5 py-3 text-sm outline-none transition ${
            isDark
              ? "border-[#30343A] bg-[#191C21] text-[#FAF9F4] placeholder:text-[#70757D] focus:border-[#FAF9F4]"
              : "border-[#E0E0E0] bg-white text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#111111]"
          }`}
        />

        <p
          className={`mt-2 text-xs ${
            isDark ? "text-[#777]" : "text-[#6B7280]"
          }`}
        >
          Press Enter or comma to add a skill. Spaces are allowed inside skill
          names.
        </p>
      </div>

      {resume.skills.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {resume.skills.map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${
                isDark
                  ? "border-[#30343A] bg-[#191C21] text-[#FAF9F4]"
                  : "border-[#E0E0E0] bg-[#F3F3F3] text-[#111111]"
              }`}
            >
              <span>{skill}</span>

              <button
                type="button"
                onClick={() => handleRemoveSkill(index)}
                className="flex h-4 w-4 items-center justify-center rounded-full text-[#777] transition hover:text-red-500"
                aria-label={`Remove ${skill}`}
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      )}

      {resume.skills.length === 0 && (
        <div
          className={`mt-5 rounded-[12px] border border-dashed px-4 py-6 text-center text-xs ${
            isDark
              ? "border-[#30343A] text-[#777]"
              : "border-[#D7D7D7] text-[#9CA3AF]"
          }`}
        >
          Your added skills will appear here.
        </div>
      )}
    </SectionWrapper>
  );

  /* =======================================================
     PROJECTS
  ======================================================= */

  const renderProjects = () => (
    <SectionWrapper title="Projects">
      <div className="space-y-5">
        {resume.projects.map((item, index) => (
          <div
            key={index}
            className={`rounded-[12px] border p-4 ${
              isDark ? "border-[#30343A]" : "border-[#E7E7E7]"
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium">Project {index + 1}</p>

              <button
                type="button"
                onClick={() => dispatch(deleteProject(index))}
                className="text-[#777] transition hover:text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Project Name"
                value={item.name}
                onChange={(value) => handleProjectChange(index, "name", value)}
                placeholder="ResumeForge"
              />

              <Input
                label="Technologies"
                value={item.technologies}
                onChange={(value) =>
                  handleProjectChange(index, "technologies", value)
                }
                placeholder="React, Node.js, MongoDB"
              />

              <Input
                label="Project Link"
                value={item.link}
                onChange={(value) => handleProjectChange(index, "link", value)}
                placeholder="https://..."
              />
            </div>

            <div className="mt-4">
              <Textarea
                label="Description"
                value={item.description}
                onChange={(value) =>
                  handleProjectChange(index, "description", value)
                }
                placeholder="Describe the project..."
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddProject}
          className="flex items-center gap-2 rounded-[12px] border border-dashed border-[#BDBDBD] px-4 py-3 text-sm transition hover:border-[#111111]"
        >
          <Plus size={16} />
          Add Project
        </button>
      </div>
    </SectionWrapper>
  );

  /* =======================================================
     CERTIFICATIONS
  ======================================================= */

  const renderCertifications = () => (
    <SectionWrapper title="Certifications">
      <div className="space-y-5">
        {resume.certifications.map((item, index) => (
          <div
            key={index}
            className={`rounded-[12px] border p-4 ${
              isDark ? "border-[#30343A]" : "border-[#E7E7E7]"
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium">Certification {index + 1}</p>

              <button
                type="button"
                onClick={() => dispatch(deleteCertification(index))}
                className="text-[#777] transition hover:text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Certification Name"
                value={item.name}
                onChange={(value) =>
                  handleCertificationChange(index, "name", value)
                }
                placeholder="React Certification"
              />

              <Input
                label="Organization"
                value={item.organization}
                onChange={(value) =>
                  handleCertificationChange(index, "organization", value)
                }
                placeholder="Organization"
              />

              <Input
                label="Date"
                value={item.date}
                onChange={(value) =>
                  handleCertificationChange(index, "date", value)
                }
                placeholder="2026"
              />

              <Input
                label="Certificate Link"
                value={item.link}
                onChange={(value) =>
                  handleCertificationChange(index, "link", value)
                }
                placeholder="https://..."
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddCertification}
          className="flex items-center gap-2 rounded-[12px] border border-dashed border-[#BDBDBD] px-4 py-3 text-sm transition hover:border-[#111111]"
        >
          <Plus size={16} />
          Add Certification
        </button>
      </div>
    </SectionWrapper>
  );

  /* =======================================================
     ACHIEVEMENTS
  ======================================================= */

  const renderAchievements = () => (
    <SectionWrapper title="Achievements">
      <div className="space-y-5">
        {resume.achievements.map((item, index) => (
          <div
            key={index}
            className={`rounded-[12px] border p-4 ${
              isDark ? "border-[#30343A]" : "border-[#E7E7E7]"
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium">Achievement {index + 1}</p>

              <button
                type="button"
                onClick={() => dispatch(deleteAchievement(index))}
                className="text-[#777] transition hover:text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Title"
                value={item.title}
                onChange={(value) =>
                  handleAchievementChange(index, "title", value)
                }
                placeholder="Hackathon Winner"
              />

              <Input
                label="Organization"
                value={item.organization}
                onChange={(value) =>
                  handleAchievementChange(index, "organization", value)
                }
                placeholder="Organization"
              />

              <Input
                label="Date"
                value={item.date}
                onChange={(value) =>
                  handleAchievementChange(index, "date", value)
                }
                placeholder="2026"
              />
            </div>

            <div className="mt-4">
              <Textarea
                label="Description"
                value={item.description}
                onChange={(value) =>
                  handleAchievementChange(index, "description", value)
                }
                placeholder="Describe your achievement..."
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddAchievement}
          className="flex items-center gap-2 rounded-[12px] border border-dashed border-[#BDBDBD] px-4 py-3 text-sm transition hover:border-[#111111]"
        >
          <Plus size={16} />
          Add Achievement
        </button>
      </div>
    </SectionWrapper>
  );

  /* =======================================================
     SOCIAL LINKS
  ======================================================= */

  const renderSocialLinks = () => (
    <SectionWrapper title="Social Links">
      <div className="grid gap-4">
        <Input
          label="LinkedIn"
          value={resume.socialLinks.linkedin}
          onChange={(value) => handleSocialChange("linkedin", value)}
          placeholder="https://linkedin.com/in/username"
        />

        <Input
          label="GitHub"
          value={resume.socialLinks.github}
          onChange={(value) => handleSocialChange("github", value)}
          placeholder="https://github.com/username"
        />

        <Input
          label="Portfolio"
          value={resume.socialLinks.portfolio}
          onChange={(value) => handleSocialChange("portfolio", value)}
          placeholder="https://yourportfolio.com"
        />
      </div>
    </SectionWrapper>
  );

  /* =======================================================
     ACTIVE SECTION
  ======================================================= */

  const renderActiveSection = () => {
    switch (activeSection) {
      case "personal":
        return renderPersonal();

      case "education":
        return renderEducation();

      case "experience":
        return renderExperience();

      case "skills":
        return renderSkills();

      case "projects":
        return renderProjects();

      case "certifications":
        return renderCertifications();

      case "achievements":
        return renderAchievements();

      case "social":
        return renderSocialLinks();

      default:
        return renderPersonal();
    }
  };

  /* =======================================================
     TEMPLATE BUTTON
  ======================================================= */

  const TemplateButton = ({ id: templateId, name }) => {
    const active = selectedTemplate === templateId;

    return (
      <button
        type="button"
        onClick={() => handleTemplateChange(templateId)}
        className={`rounded-[12px] border px-3 py-2.5 text-left transition ${
          active
            ? isDark
              ? "border-[#FAF9F4] bg-[#FAF9F4] text-[#111111]"
              : "border-[#111111] bg-[#111111] text-[#FAF9F4]"
            : isDark
              ? "border-[#30343A] hover:border-[#777]"
              : "border-[#E0E0E0] hover:border-[#111111]"
        }`}
      >
        <div className="text-xs font-medium">{name}</div>

        {active && (
          <div className="mt-1 flex items-center gap-1 text-[10px]">
            <Check size={10} />
            Selected
          </div>
        )}
      </button>
    );
  };

  /* =======================================================
     BUILDER UI
  ======================================================= */

  return (
    <main
      className={`min-h-screen pt-16 ${
        isDark ? "bg-[#111111] text-[#FAF9F4]" : "bg-[#FAF9F4] text-[#111111]"
      }`}
    >
      <MouseSpotlight />

      <Navbar />

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div
        className={`sticky top-16 z-40 border-b ${
          isDark
            ? "border-[#30343A] bg-[#111111]"
            : "border-[#E7E7E7] bg-[#FAF9F4]"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <div className="flex items-center gap-3">
            <Link
              to="/dashboard"
              className={`flex h-9 w-9 items-center justify-center rounded-[10px] border ${
                isDark ? "border-[#30343A]" : "border-[#E0E0E0]"
              }`}
            >
              <ArrowLeft size={16} />
            </Link>

            <div>
              <p className="text-sm font-medium">Resume Builder</p>

              <p
                className={`font-mono text-[9px] uppercase tracking-[0.12em] ${
                  isDark ? "text-[#777]" : "text-[#6B7280]"
                }`}
              >
                {selectedTemplate} template
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {message && (
              <span
                className={`hidden items-center gap-1 text-xs sm:flex ${
                  message.includes("success")
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                <Check size={13} />
                {message}
              </span>
            )}

            <button
              type="button"
              onClick={() => setShowPreview(true)}
              className={`flex items-center gap-2 rounded-[12px] border px-3 py-2.5 text-xs font-medium ${
                isDark
                  ? "border-[#30343A] hover:bg-[#191C21]"
                  : "border-[#E0E0E0] hover:bg-[#E7E7E7]"
              }`}
            >
              <Eye size={15} />
              Preview
            </button>

            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className={`flex items-center gap-2 rounded-[12px] px-4 py-2.5 text-xs font-medium ${
                isDark
                  ? "bg-[#FAF9F4] text-[#111111]"
                  : "bg-[#111111] text-[#FAF9F4]"
              }`}
            >
              <Save size={15} />

              {saving ? "Saving..." : "Save Resume"}
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN BUILDER
      ===================================================== */}

      <div className="mx-auto max-w-[1600px] px-5 py-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[230px_minmax(0,1fr)_560px]">
          {/* =================================================
              LEFT SIDEBAR
          ================================================= */}

          <aside className="hidden lg:block">
            <div className="sticky top-[105px]">
              <p
                className={`mb-3 font-mono text-[10px] uppercase tracking-[0.15em] ${
                  isDark ? "text-[#777]" : "text-[#6B7280]"
                }`}
              >
                Resume Sections
              </p>

              <div className="space-y-1">
                {sections.map((section, index) => {
                  const active = activeSection === section.id;

                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => setActiveSection(section.id)}
                      className={`flex w-full items-center gap-3 rounded-[11px] px-3 py-3 text-left text-sm transition ${
                        active
                          ? isDark
                            ? "bg-[#FAF9F4] text-[#111111]"
                            : "bg-[#111111] text-[#FAF9F4]"
                          : isDark
                            ? "text-[#A7A7A7] hover:bg-[#191C21] hover:text-[#FAF9F4]"
                            : "text-[#4B5563] hover:bg-[#E7E7E7] hover:text-[#111111]"
                      }`}
                    >
                      <span className="font-mono text-[9px] opacity-60">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {section.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8">
                <p
                  className={`mb-3 font-mono text-[10px] uppercase tracking-[0.15em] ${
                    isDark ? "text-[#777]" : "text-[#6B7280]"
                  }`}
                >
                  Template
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <TemplateButton id="modern" name="Modern" />
                  <TemplateButton id="classic" name="Classic" />
                  <TemplateButton id="minimal" name="Minimal" />
                  <TemplateButton id="creative" name="Creative" />
                </div>
              </div>
            </div>
          </aside>

          {/* =================================================
              FORM AREA
          ================================================= */}

          <section>
            <div className="mb-5 lg:hidden">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSection(section.id)}
                    className={`rounded-[11px] border px-3 py-2.5 text-xs ${
                      activeSection === section.id
                        ? isDark
                          ? "border-[#FAF9F4] bg-[#FAF9F4] text-[#111111]"
                          : "border-[#111111] bg-[#111111] text-[#FAF9F4]"
                        : isDark
                          ? "border-[#30343A]"
                          : "border-[#E0E0E0]"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                <TemplateButton id="modern" name="Modern" />
                <TemplateButton id="classic" name="Classic" />
                <TemplateButton id="minimal" name="Minimal" />
                <TemplateButton id="creative" name="Creative" />
              </div>
            </div>

            {renderActiveSection()}
          </section>

          {/* =================================================
              DESKTOP LIVE PREVIEW
          ================================================= */}

          <aside className="hidden lg:block">
            <div className="sticky top-[105px]">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6B7280]">
                    Live Preview
                  </p>

                  <p className="mt-1 text-xs text-[#777]">
                    {selectedTemplate.charAt(0).toUpperCase() +
                      selectedTemplate.slice(1)}{" "}
                    template
                  </p>
                </div>

                <PDFExportButton
                  className={`flex items-center gap-2 rounded-[10px] border px-3 py-2 text-xs transition ${
                    isDark
                      ? "border-[#30343A] hover:bg-[#191C21]"
                      : "border-[#E0E0E0] hover:bg-[#E7E7E7]"
                  }`}
                >
                  Export
                </PDFExportButton>
              </div>

              <div
                className={`overflow-hidden rounded-[15px] border p-4 ${
                  isDark
                    ? "border-[#30343A] bg-[#191C21]"
                    : "border-[#E7E7E7] bg-[#E7E7E7]"
                }`}
              >
                <div className="mx-auto aspect-[210/297] w-full max-w-[560px] overflow-hidden bg-white shadow-xl">
                  <BuilderPreview />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* =====================================================
          MOBILE PREVIEW MODAL
      ===================================================== */}

      {showPreview && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className={`relative flex max-h-[95vh] w-full max-w-[650px] flex-col overflow-hidden rounded-[18px] ${
              isDark ? "bg-[#191C21]" : "bg-[#FAF9F4]"
            }`}
          >
            <div
              className={`flex items-center justify-between border-b px-5 py-4 ${
                isDark ? "border-[#30343A]" : "border-[#E7E7E7]"
              }`}
            >
              <div>
                <p className="text-sm font-medium">Resume Preview</p>

                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#777]">
                  {selectedTemplate} template
                </p>
              </div>

              <div className="flex items-center gap-2">
                <PDFExportButton
                  className={`flex items-center gap-2 rounded-[10px] px-3 py-2 text-xs font-medium transition ${
                    isDark
                      ? "bg-[#FAF9F4] text-[#111111] hover:bg-[#E7E7E7]"
                      : "bg-[#111111] text-[#FAF9F4] hover:bg-[#191C21]"
                  }`}
                >
                  Export PDF
                </PDFExportButton>

                <button
                  type="button"
                  onClick={() => setShowPreview(false)}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${
                    isDark
                      ? "border-[#30343A] hover:bg-[#30343A]"
                      : "border-[#D5D5D5] hover:bg-[#E7E7E7]"
                  }`}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto p-5">
              <div className="mx-auto aspect-[210/297] w-full max-w-[520px] overflow-hidden bg-white shadow-2xl">
                <BuilderPreview />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}

export default Builder;
