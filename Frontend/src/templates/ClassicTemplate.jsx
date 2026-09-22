import React from "react";

const ClassicTemplate = ({ resume }) => {
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
    <div className="w-full min-h-[1123px] bg-white text-gray-900 px-12 py-10 font-serif">
      {/* Header */}
      <header className="border-b-2 border-gray-900 pb-5">
        <h1 className="text-3xl font-bold uppercase tracking-wide">
          {personal?.name || "Your Name"}
        </h1>

        {personal?.jobTitle && (
          <p className="mt-1 text-lg text-gray-700">{personal.jobTitle}</p>
        )}

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
          {personal?.email && <span>{personal.email}</span>}
          {personal?.phone && <span>{personal.phone}</span>}
          {personal?.location && <span>{personal.location}</span>}
        </div>

        <div className="mt-2 flex flex-wrap gap-4 text-sm">
          {socialLinks?.linkedin && <span>{socialLinks.linkedin}</span>}

          {socialLinks?.github && <span>{socialLinks.github}</span>}

          {socialLinks?.portfolio && <span>{socialLinks.portfolio}</span>}
        </div>
      </header>

      {/* Summary */}
      {personal?.summary && (
        <section className="mt-6">
          <SectionTitle title="Professional Summary" />

          <p className="text-sm leading-6 text-gray-700">{personal.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience?.length > 0 && (
        <section className="mt-6">
          <SectionTitle title="Experience" />

          <div className="space-y-5">
            {experience.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-base">{item.position}</h3>

                    <p className="text-sm italic text-gray-700">
                      {item.company}
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 whitespace-nowrap">
                    {item.startDate} {item.endDate && `— ${item.endDate}`}
                  </p>
                </div>

                {item.description && (
                  <p className="mt-2 text-sm leading-6 text-gray-700">
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
        <section className="mt-6">
          <SectionTitle title="Education" />

          <div className="space-y-4">
            {education.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-base">
                      {item.degree}
                      {item.field && ` in ${item.field}`}
                    </h3>

                    <p className="text-sm italic text-gray-700">
                      {item.institution}
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 whitespace-nowrap">
                    {item.startDate} {item.endDate && `— ${item.endDate}`}
                  </p>
                </div>

                {item.description && (
                  <p className="mt-2 text-sm leading-6 text-gray-700">
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
        <section className="mt-6">
          <SectionTitle title="Skills" />

          <p className="text-sm leading-6 text-gray-700">
            {skills.join(" • ")}
          </p>
        </section>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <section className="mt-6">
          <SectionTitle title="Projects" />

          <div className="space-y-4">
            {projects.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-base">{item.title}</h3>

                  {item.link && (
                    <span className="text-xs text-gray-600">{item.link}</span>
                  )}
                </div>

                {item.technologies?.length > 0 && (
                  <p className="mt-1 text-xs text-gray-600">
                    {item.technologies.join(" • ")}
                  </p>
                )}

                {item.description && (
                  <p className="mt-2 text-sm leading-6 text-gray-700">
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
        <section className="mt-6">
          <SectionTitle title="Certifications" />

          <div className="space-y-3">
            {certifications.map((item, index) => (
              <div key={index} className="flex justify-between gap-4">
                <div>
                  <h3 className="font-bold text-sm">{item.name}</h3>

                  {item.issuer && (
                    <p className="text-sm text-gray-700">{item.issuer}</p>
                  )}
                </div>

                {item.date && (
                  <p className="text-sm text-gray-600">{item.date}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Achievements */}
      {achievements?.length > 0 && (
        <section className="mt-6">
          <SectionTitle title="Achievements" />

          <div className="space-y-3">
            {achievements.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between gap-4">
                  <h3 className="font-bold text-sm">{item.title}</h3>

                  {item.date && (
                    <span className="text-sm text-gray-600">{item.date}</span>
                  )}
                </div>

                {item.description && (
                  <p className="mt-1 text-sm text-gray-700">
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
    <h2 className="mb-3 border-b border-gray-400 pb-1 text-sm font-bold uppercase tracking-widest">
      {title}
    </h2>
  );
};

export default ClassicTemplate;
