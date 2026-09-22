import React from "react";

const MinimalTemplate = ({ resume }) => {
  const {
    personal,
    education,
    experience,
    skills,
    projects,
    certifications,
    achievements,
    socialLinks,
  } = resume;

  return (
    <div className="w-full min-h-[1123px] bg-white text-gray-900 px-14 py-12 font-sans">
      {/* Header */}
      <header className="pb-6 border-b border-gray-300">
        <h1 className="text-4xl font-semibold tracking-tight">
          {personal?.name || "Your Name"}
        </h1>

        {personal?.jobTitle && (
          <p className="mt-2 text-sm text-gray-500">{personal.jobTitle}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
          {personal?.email && <span>{personal.email}</span>}
          {personal?.phone && <span>{personal.phone}</span>}
          {personal?.location && <span>{personal.location}</span>}
        </div>

        {(socialLinks?.linkedin ||
          socialLinks?.github ||
          socialLinks?.portfolio) && (
          <div className="mt-2 flex flex-wrap gap-x-4 text-xs text-gray-500">
            {socialLinks?.linkedin && <span>{socialLinks.linkedin}</span>}

            {socialLinks?.github && <span>{socialLinks.github}</span>}

            {socialLinks?.portfolio && <span>{socialLinks.portfolio}</span>}
          </div>
        )}
      </header>

      {/* Summary */}
      {personal?.summary && (
        <section className="mt-7">
          <SectionTitle title="Profile" />

          <p className="text-sm leading-6 text-gray-600 max-w-3xl">
            {personal.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience?.length > 0 && (
        <section className="mt-7">
          <SectionTitle title="Experience" />

          <div className="space-y-5">
            {experience.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between gap-6">
                  <div>
                    <h3 className="text-sm font-semibold">{item.position}</h3>

                    {item.company && (
                      <p className="mt-1 text-xs text-gray-500">
                        {item.company}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-gray-400 whitespace-nowrap">
                    {item.startDate}
                    {item.endDate && ` — ${item.endDate}`}
                  </p>
                </div>

                {item.description && (
                  <p className="mt-2 text-xs leading-5 text-gray-600">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <section className="mt-7">
          <SectionTitle title="Education" />

          <div className="space-y-5">
            {education.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between gap-6">
                  <div>
                    <h3 className="text-sm font-semibold">
                      {item.degree}
                      {item.field && ` in ${item.field}`}
                    </h3>

                    {item.institution && (
                      <p className="mt-1 text-xs text-gray-500">
                        {item.institution}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-gray-400 whitespace-nowrap">
                    {item.startDate}
                    {item.endDate && ` — ${item.endDate}`}
                  </p>
                </div>

                {item.description && (
                  <p className="mt-2 text-xs leading-5 text-gray-600">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <section className="mt-7">
          <SectionTitle title="Skills" />

          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {skills.map((skill, index) => (
              <span key={index} className="text-xs text-gray-600">
                {skill}
                {index !== skills.length - 1 && (
                  <span className="ml-3 text-gray-300">/</span>
                )}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <section className="mt-7">
          <SectionTitle title="Projects" />

          <div className="space-y-5">
            {projects.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between gap-4">
                  <h3 className="text-sm font-semibold">{item.title}</h3>

                  {item.link && (
                    <span className="text-[10px] text-gray-400 break-all">
                      {item.link}
                    </span>
                  )}
                </div>

                {item.technologies?.length > 0 && (
                  <p className="mt-1 text-[11px] text-gray-400">
                    {item.technologies.join(" · ")}
                  </p>
                )}

                {item.description && (
                  <p className="mt-2 text-xs leading-5 text-gray-600">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications?.length > 0 && (
        <section className="mt-7">
          <SectionTitle title="Certifications" />

          <div className="space-y-3">
            {certifications.map((item, index) => (
              <div key={index} className="flex justify-between gap-5">
                <div>
                  <h3 className="text-xs font-semibold">{item.name}</h3>

                  {item.issuer && (
                    <p className="mt-1 text-[11px] text-gray-500">
                      {item.issuer}
                    </p>
                  )}
                </div>

                {item.date && (
                  <span className="text-[11px] text-gray-400 whitespace-nowrap">
                    {item.date}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Achievements */}
      {achievements?.length > 0 && (
        <section className="mt-7">
          <SectionTitle title="Achievements" />

          <div className="space-y-3">
            {achievements.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between gap-5">
                  <h3 className="text-xs font-semibold">{item.title}</h3>

                  {item.date && (
                    <span className="text-[11px] text-gray-400 whitespace-nowrap">
                      {item.date}
                    </span>
                  )}
                </div>

                {item.description && (
                  <p className="mt-1 text-[11px] leading-5 text-gray-500">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

const SectionTitle = ({ title }) => {
  return (
    <div className="mb-3">
      <h2 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-gray-500">
        {title}
      </h2>

      <div className="mt-2 h-px bg-gray-200" />
    </div>
  );
};

export default MinimalTemplate;
