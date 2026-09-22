import React from "react";

const ModernTemplate = ({ resume }) => {
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
    <div className="w-full min-h-[1123px] bg-white text-gray-900 px-10 py-10 font-sans">
      {/* Header */}
      <header className="relative overflow-hidden rounded-2xl bg-gray-900 text-white px-8 py-8">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gray-700/40 -translate-y-1/2 translate-x-1/3" />

        <div className="relative">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-3">
            Resume
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            {personal?.name || "Your Name"}
          </h1>

          {personal?.jobTitle && (
            <p className="mt-2 text-sm text-gray-300">{personal.jobTitle}</p>
          )}

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-gray-300">
            {personal?.email && <span>{personal.email}</span>}

            {personal?.phone && <span>{personal.phone}</span>}

            {personal?.location && <span>{personal.location}</span>}
          </div>

          {(socialLinks?.linkedin ||
            socialLinks?.github ||
            socialLinks?.portfolio) && (
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-gray-400">
              {socialLinks?.linkedin && <span>{socialLinks.linkedin}</span>}

              {socialLinks?.github && <span>{socialLinks.github}</span>}

              {socialLinks?.portfolio && <span>{socialLinks.portfolio}</span>}
            </div>
          )}
        </div>
      </header>

      {/* Summary */}
      {personal?.summary && (
        <section className="mt-7">
          <SectionHeading number="01" title="Profile" />

          <p className="mt-3 text-sm leading-6 text-gray-600">
            {personal.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience?.length > 0 && (
        <section className="mt-7">
          <SectionHeading number="02" title="Experience" />

          <div className="mt-4 space-y-5">
            {experience.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_auto] gap-5 border-b border-gray-100 pb-5 last:border-0"
              >
                <div>
                  <h3 className="text-sm font-bold">{item.position}</h3>

                  {item.company && (
                    <p className="mt-1 text-xs font-medium text-gray-500">
                      {item.company}
                    </p>
                  )}

                  {item.description && (
                    <p className="mt-2 text-xs leading-5 text-gray-600">
                      {item.description}
                    </p>
                  )}
                </div>

                <DateBadge startDate={item.startDate} endDate={item.endDate} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Two Column Area */}
      <div className="mt-7 grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          {/* Education */}
          {education?.length > 0 && (
            <section>
              <SectionHeading number="03" title="Education" />

              <div className="mt-4 space-y-5">
                {education.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-bold">{item.degree}</h3>

                        {item.field && (
                          <p className="text-xs text-gray-500">{item.field}</p>
                        )}
                      </div>

                      <span className="text-[10px] text-gray-400 whitespace-nowrap">
                        {item.endDate || item.startDate}
                      </span>
                    </div>

                    {item.institution && (
                      <p className="mt-1 text-xs text-gray-600">
                        {item.institution}
                      </p>
                    )}

                    {item.description && (
                      <p className="mt-2 text-[11px] leading-5 text-gray-500">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {projects?.length > 0 && (
            <section className="mt-7">
              <SectionHeading number="04" title="Projects" />

              <div className="mt-4 space-y-4">
                {projects.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-200 p-4"
                  >
                    <div className="flex justify-between gap-3">
                      <h3 className="text-sm font-bold">{item.title}</h3>

                      {item.link && (
                        <span className="text-[9px] text-gray-400 break-all">
                          {item.link}
                        </span>
                      )}
                    </div>

                    {item.technologies?.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {item.technologies.map((technology, techIndex) => (
                          <span
                            key={techIndex}
                            className="rounded-full bg-gray-100 px-2 py-1 text-[9px] text-gray-600"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.description && (
                      <p className="mt-2 text-[11px] leading-5 text-gray-600">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div>
          {/* Skills */}
          {skills?.length > 0 && (
            <section>
              <SectionHeading number="05" title="Skills" />

              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-lg border border-gray-200 px-3 py-2 text-[10px] font-medium text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {certifications?.length > 0 && (
            <section className="mt-7">
              <SectionHeading number="06" title="Certifications" />

              <div className="mt-4 space-y-4">
                {certifications.map((item, index) => (
                  <div key={index} className="border-l-2 border-gray-900 pl-3">
                    <h3 className="text-xs font-bold">{item.name}</h3>

                    {item.issuer && (
                      <p className="mt-1 text-[11px] text-gray-500">
                        {item.issuer}
                      </p>
                    )}

                    {item.date && (
                      <p className="mt-1 text-[10px] text-gray-400">
                        {item.date}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Achievements */}
          {achievements?.length > 0 && (
            <section className="mt-7">
              <SectionHeading number="07" title="Achievements" />

              <div className="mt-4 space-y-4">
                {achievements.map((item, index) => (
                  <div key={index} className="rounded-xl bg-gray-50 p-3">
                    <div className="flex justify-between gap-3">
                      <h3 className="text-xs font-bold">{item.title}</h3>

                      {item.date && (
                        <span className="text-[10px] text-gray-400 whitespace-nowrap">
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
      </div>
    </div>
  );
};

/* Section Heading */
const SectionHeading = ({ number, title }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-mono text-gray-400">{number}</span>

      <h2 className="text-xs font-bold uppercase tracking-[0.18em]">{title}</h2>

      <div className="h-px flex-1 bg-gray-200" />
    </div>
  );
};

/* Date Badge */
const DateBadge = ({ startDate, endDate }) => {
  if (!startDate && !endDate) return null;

  return (
    <div className="rounded-full bg-gray-100 px-3 py-1 h-fit">
      <span className="text-[9px] text-gray-500 whitespace-nowrap">
        {startDate}
        {endDate && ` — ${endDate}`}
      </span>
    </div>
  );
};

export default ModernTemplate;
