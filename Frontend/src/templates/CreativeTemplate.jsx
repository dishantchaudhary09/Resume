import React from "react";

const CreativeTemplate = ({ resume }) => {
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
    <div className="w-full min-h-[1123px] bg-white text-gray-900 flex font-sans">
      {/* LEFT SIDEBAR */}
      <aside className="w-[32%] bg-gray-900 text-white px-7 py-9">
        {/* Name */}
        <div>
          <div className="w-12 h-1 bg-white mb-5" />

          <h1 className="text-3xl font-bold leading-tight break-words">
            {personal?.name || "Your Name"}
          </h1>

          {personal?.jobTitle && (
            <p className="mt-3 text-sm text-gray-300 leading-5">
              {personal.jobTitle}
            </p>
          )}
        </div>

        {/* Contact */}
        <div className="mt-10">
          <SidebarTitle title="Contact" />

          <div className="space-y-3 text-xs text-gray-300 break-words">
            {personal?.email && <p>{personal.email}</p>}

            {personal?.phone && <p>{personal.phone}</p>}

            {personal?.location && <p>{personal.location}</p>}
          </div>
        </div>

        {/* Social Links */}
        {(socialLinks?.linkedin ||
          socialLinks?.github ||
          socialLinks?.portfolio) && (
          <div className="mt-8">
            <SidebarTitle title="Links" />

            <div className="space-y-3 text-xs text-gray-300 break-words">
              {socialLinks?.linkedin && <p>{socialLinks.linkedin}</p>}

              {socialLinks?.github && <p>{socialLinks.github}</p>}

              {socialLinks?.portfolio && <p>{socialLinks.portfolio}</p>}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills?.length > 0 && (
          <div className="mt-8">
            <SidebarTitle title="Skills" />

            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div key={index}>
                  <p className="text-xs text-gray-200 mb-1">{skill}</p>

                  <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-white rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {certifications?.length > 0 && (
          <div className="mt-8">
            <SidebarTitle title="Certifications" />

            <div className="space-y-4">
              {certifications.map((item, index) => (
                <div key={index}>
                  <p className="text-xs font-semibold text-white">
                    {item.name}
                  </p>

                  {item.issuer && (
                    <p className="mt-1 text-[11px] text-gray-400">
                      {item.issuer}
                    </p>
                  )}

                  {item.date && (
                    <p className="mt-1 text-[10px] text-gray-500">
                      {item.date}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </aside>

      {/* RIGHT CONTENT */}
      <main className="w-[68%] px-9 py-9">
        {/* Summary */}
        {personal?.summary && (
          <section>
            <SectionHeading title="Profile" />

            <p className="text-sm leading-6 text-gray-600">
              {personal.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {experience?.length > 0 && (
          <section className="mt-8">
            <SectionHeading title="Experience" />

            <div className="space-y-6">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-5 border-l-2 border-gray-900"
                >
                  <div className="absolute -left-[5px] top-1 w-2 h-2 bg-gray-900 rounded-full" />

                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-base">{item.position}</h3>

                      {item.company && (
                        <p className="mt-1 text-sm font-medium text-gray-600">
                          {item.company}
                        </p>
                      )}
                    </div>

                    <p className="text-xs text-gray-500 whitespace-nowrap">
                      {item.startDate}
                      {item.endDate && ` — ${item.endDate}`}
                    </p>
                  </div>

                  {item.description && (
                    <p className="mt-2 text-sm leading-6 text-gray-600">
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
          <section className="mt-8">
            <SectionHeading title="Selected Projects" />

            <div className="grid grid-cols-1 gap-4">
              {projects.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-4 rounded-lg"
                >
                  <div className="flex justify-between gap-3">
                    <h3 className="font-bold text-sm">{item.title}</h3>

                    {item.link && (
                      <span className="text-[10px] text-gray-500 break-all">
                        {item.link}
                      </span>
                    )}
                  </div>

                  {item.technologies?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 rounded text-[10px] text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

        {/* Education */}
        {education?.length > 0 && (
          <section className="mt-8">
            <SectionHeading title="Education" />

            <div className="space-y-5">
              {education.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-sm">
                        {item.degree}
                        {item.field && ` in ${item.field}`}
                      </h3>

                      {item.institution && (
                        <p className="mt-1 text-sm text-gray-600">
                          {item.institution}
                        </p>
                      )}
                    </div>

                    <p className="text-xs text-gray-500 whitespace-nowrap">
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

        {/* Achievements */}
        {achievements?.length > 0 && (
          <section className="mt-8">
            <SectionHeading title="Achievements" />

            <div className="space-y-4">
              {achievements.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="mt-1.5 w-2 h-2 bg-gray-900 rounded-full shrink-0" />

                  <div>
                    <div className="flex justify-between gap-4">
                      <h3 className="text-sm font-bold">{item.title}</h3>

                      {item.date && (
                        <span className="text-xs text-gray-500 whitespace-nowrap">
                          {item.date}
                        </span>
                      )}
                    </div>

                    {item.description && (
                      <p className="mt-1 text-xs leading-5 text-gray-600">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

/* Sidebar Heading */
const SidebarTitle = ({ title }) => {
  return (
    <div className="mb-4">
      <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold">
        {title}
      </h2>

      <div className="mt-2 w-7 h-[2px] bg-white" />
    </div>
  );
};

/* Main Content Heading */
const SectionHeading = ({ title }) => {
  return (
    <div className="mb-4">
      <h2 className="text-sm uppercase tracking-[0.18em] font-bold">{title}</h2>

      <div className="mt-2 w-10 h-[2px] bg-gray-900" />
    </div>
  );
};

export default CreativeTemplate;
