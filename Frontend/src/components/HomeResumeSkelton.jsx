const SkeletonLine = ({ width = "full", className = "" }) => {
  const widths = {
    xs: "w-[22%]",
    short: "w-[35%]",
    medium: "w-[55%]",
    long: "w-[75%]",
    full: "w-full",
  };

  return (
    <div
      className={`h-[5px] rounded-full bg-[#E8E8E5] ${
        widths[width] || widths.full
      } ${className}`}
    />
  );
};

const SkeletonSection = ({ title, children }) => (
  <section className="mt-5">
    <h3 className="mb-2 border-b border-[#E3E3DF] pb-1 text-[7px] font-bold uppercase tracking-[0.14em] text-[#444]">
      {title}
    </h3>

    <div className="space-y-1.5">{children}</div>
  </section>
);

const SkeletonItem = ({ lines = 2 }) => (
  <div className="space-y-1.5">
    <SkeletonLine width="medium" className="h-[6px]" />

    {Array.from({ length: lines }).map((_, index) => (
      <SkeletonLine key={index} width={index === lines - 1 ? "long" : "full"} />
    ))}
  </div>
);

export default function HomeResumeSkeleton() {
  return (
    <div className="min-h-[520px] bg-white px-7 py-6 text-[#222]">
      {/* =========================================
          HEADER
      ========================================= */}

      <header className="border-b border-[#DCDCD8] pb-4">
        {/* Name */}
        <div className="mb-2.5 h-[15px] w-[42%] rounded-full bg-[#D9D9D5]" />

        {/* Contact Information */}
        <div className="flex flex-wrap gap-x-3 gap-y-1.5">
          <SkeletonLine width="short" />
          <SkeletonLine width="short" />
          <SkeletonLine width="medium" />
        </div>

        {/* Social Icons */}
        <div className="mt-2.5 flex items-center gap-2.5">
          <div className="h-[9px] w-[9px] rounded-full bg-[#DCDCD8]" />
          <div className="h-[9px] w-[9px] rounded-full bg-[#DCDCD8]" />
          <div className="h-[9px] w-[9px] rounded-full bg-[#DCDCD8]" />
        </div>
      </header>

      {/* =========================================
          PROFILE
      ========================================= */}

      <SkeletonSection title="Profile">
        <SkeletonLine width="full" />
        <SkeletonLine width="full" />
        <SkeletonLine width="long" />
      </SkeletonSection>

      {/* =========================================
          EXPERIENCE
      ========================================= */}

      <SkeletonSection title="Experience">
        <div className="space-y-4">
          <div>
            <div className="mb-1 flex items-center justify-between gap-4">
              <SkeletonLine width="medium" className="h-[6px]" />
              <SkeletonLine width="short" />
            </div>

            <SkeletonLine width="short" className="mb-1.5" />
            <SkeletonLine width="full" />
            <SkeletonLine width="long" />
            <SkeletonLine width="medium" />
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between gap-4">
              <SkeletonLine width="medium" className="h-[6px]" />
              <SkeletonLine width="short" />
            </div>

            <SkeletonLine width="short" className="mb-1.5" />
            <SkeletonLine width="full" />
            <SkeletonLine width="long" />
          </div>
        </div>
      </SkeletonSection>

      {/* =========================================
          PROJECTS
      ========================================= */}

      <SkeletonSection title="Projects">
        <div className="space-y-4">
          <SkeletonItem lines={3} />
          <SkeletonItem lines={2} />
        </div>
      </SkeletonSection>

      {/* =========================================
          EDUCATION
      ========================================= */}

      <SkeletonSection title="Education">
        <div className="space-y-3.5">
          <div>
            <div className="flex items-center justify-between gap-4">
              <SkeletonLine width="medium" className="h-[6px]" />
              <SkeletonLine width="short" />
            </div>

            <SkeletonLine width="long" className="mt-1.5" />
          </div>

          <div>
            <div className="flex items-center justify-between gap-4">
              <SkeletonLine width="medium" className="h-[6px]" />
              <SkeletonLine width="short" />
            </div>

            <SkeletonLine width="long" className="mt-1.5" />
          </div>
        </div>
      </SkeletonSection>

      {/* =========================================
          SKILLS
      ========================================= */}

      <SkeletonSection title="Skills">
        <div className="flex flex-wrap gap-1.5">
          <div className="flex h-4 items-center justify-center rounded-full bg-[#E8E8E5] px-2">
            <div className="h-[4px] w-6 rounded-full bg-[#D5D5D1]" />
          </div>

          <div className="flex h-4 items-center justify-center rounded-full bg-[#E8E8E5] px-2">
            <div className="h-[4px] w-9 rounded-full bg-[#D5D5D1]" />
          </div>

          <div className="flex h-4 items-center justify-center rounded-full bg-[#E8E8E5] px-2">
            <div className="h-[4px] w-7 rounded-full bg-[#D5D5D1]" />
          </div>

          <div className="flex h-4 items-center justify-center rounded-full bg-[#E8E8E5] px-2">
            <div className="h-[4px] w-11 rounded-full bg-[#D5D5D1]" />
          </div>

          <div className="flex h-4 items-center justify-center rounded-full bg-[#E8E8E5] px-2">
            <div className="h-[4px] w-8 rounded-full bg-[#D5D5D1]" />
          </div>
        </div>
      </SkeletonSection>

      {/* =========================================
          CERTIFICATIONS
      ========================================= */}

      <SkeletonSection title="Certifications">
        <div className="space-y-3">
          <div>
            <SkeletonLine width="medium" className="h-[6px]" />
            <SkeletonLine width="short" className="mt-1.5" />
          </div>

          <div>
            <SkeletonLine width="long" className="h-[6px]" />
            <SkeletonLine width="short" className="mt-1.5" />
          </div>
        </div>
      </SkeletonSection>

      {/* =========================================
          ACHIEVEMENTS
      ========================================= */}

      <SkeletonSection title="Achievements">
        <SkeletonLine width="long" />
        <SkeletonLine width="medium" />
        <SkeletonLine width="short" />
      </SkeletonSection>
    </div>
  );
}
