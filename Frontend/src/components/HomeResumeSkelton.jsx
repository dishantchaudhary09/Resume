const SkeletonLine = ({ width = "full", className = "" }) => {
  const widths = {
    short: "w-[35%]",
    medium: "w-[55%]",
    long: "w-[75%]",
    full: "w-full",
  };

  return (
    <div
      className={`h-[5px] rounded-full bg-[#E8E8E5] ${
        widths[width]
      } ${className}`}
    />
  );
};

const SkeletonSection = ({ title, children }) => (
  <section className="mt-5">
    <h3 className="mb-2 text-[7px] font-bold uppercase tracking-[0.12em] text-[#444]">
      {title}
    </h3>

    <div className="space-y-1.5">{children}</div>
  </section>
);

export default function HomeResumeSkeleton() {
  return (
    <div className="min-h-[520px] bg-white p-6 text-[#222]">
      {/* Header */}
      <div className="border-b border-[#E1E1DE] pb-4">
        <div className="mb-2 h-[13px] w-[38%] rounded-full bg-[#DDDDD9]" />

        <div className="flex gap-2">
          <SkeletonLine width="short" />
          <SkeletonLine width="short" />
          <SkeletonLine width="short" />
        </div>

        {/* Social links skeleton */}
        <div className="mt-2 flex gap-3">
          <div className="h-[5px] w-[16%] rounded-full bg-[#E8E8E5]" />
          <div className="h-[5px] w-[14%] rounded-full bg-[#E8E8E5]" />
          <div className="h-[5px] w-[17%] rounded-full bg-[#E8E8E5]" />
        </div>
      </div>

      {/* Profile */}
      <SkeletonSection title="Profile">
        <SkeletonLine width="full" />
        <SkeletonLine width="long" />
        <SkeletonLine width="medium" />
      </SkeletonSection>

      {/* Experience */}
      <SkeletonSection title="Experience">
        <div className="flex items-center justify-between">
          <SkeletonLine width="medium" />
          <SkeletonLine width="short" />
        </div>

        <SkeletonLine width="short" />
        <SkeletonLine width="full" />
        <SkeletonLine width="long" />

        <div className="mt-3 flex items-center justify-between">
          <SkeletonLine width="medium" />
          <SkeletonLine width="short" />
        </div>

        <SkeletonLine width="short" />
        <SkeletonLine width="long" />
      </SkeletonSection>

      {/* Projects */}
      <SkeletonSection title="Projects">
        <SkeletonLine width="medium" />
        <SkeletonLine width="full" />
        <SkeletonLine width="long" />

        <div className="mt-2">
          <SkeletonLine width="medium" />
          <SkeletonLine width="long" />
          <SkeletonLine width="medium" />
        </div>
      </SkeletonSection>

      {/* Education */}
      <SkeletonSection title="Education">
        <SkeletonLine width="medium" />
        <SkeletonLine width="long" />
        <SkeletonLine width="short" />
      </SkeletonSection>

      {/* Skills */}
      <SkeletonSection title="Skills">
        <div className="flex flex-wrap gap-1.5">
          <div className="h-4 w-10 rounded-full bg-[#E8E8E5]" />
          <div className="h-4 w-14 rounded-full bg-[#E8E8E5]" />
          <div className="h-4 w-12 rounded-full bg-[#E8E8E5]" />
          <div className="h-4 w-16 rounded-full bg-[#E8E8E5]" />
          <div className="h-4 w-11 rounded-full bg-[#E8E8E5]" />
        </div>
      </SkeletonSection>

      {/* Achievements */}
      <SkeletonSection title="Achievements">
        <SkeletonLine width="long" />
        <SkeletonLine width="medium" />
      </SkeletonSection>
    </div>
  );
}
