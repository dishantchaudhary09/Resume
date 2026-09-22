import { motion } from "motion/react";

function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF9F4]">
      <div className="flex items-center gap-3">
        <motion.div
          className="h-3 w-3 rounded-full bg-[#111111]"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="h-3 w-3 rounded-full bg-[#111111]"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: 0.1,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="h-3 w-3 rounded-full bg-[#111111]"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: 0.2,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}

export default Loader;
