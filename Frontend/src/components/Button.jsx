import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

function Button({
  children,
  variant = "primary",
  icon = false,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  const buttonStyles = {
    primary: "bg-[#111111] text-[#FAF9F4] border-[#111111]",
    secondary: "bg-[#FAF9F4] text-[#111111] border-[#E7E7E7]",
    dark: "bg-[#191C21] text-[#FAF9F4] border-[#191C21]",
    outline: "bg-transparent text-[#111111] border-[#111111]",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`
        inline-flex items-center justify-center gap-2
        px-5 py-3
        rounded-[15px]
        border
        text-sm font-medium
        transition
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${buttonStyles[variant]}
        ${className}
      `}
    >
      {children}

      {icon && <ArrowRight size={16} />}
    </motion.button>
  );
}

export default Button;
