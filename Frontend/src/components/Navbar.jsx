import { Link, NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../redux/slice/themeSlice";
import { logout } from "../redux/slice/authSlice";

function Navbar() {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.mode);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const isAuthenticated = Boolean(user && token);

  const isDark = theme === "dark";

  const navLinkClass = ({ isActive }) =>
    `text-sm transition ${
      isActive
        ? "font-medium"
        : isDark
          ? "text-[#A7A7A7] hover:text-[#FAF9F4]"
          : "text-[#4B5563] hover:text-[#111111]"
    }`;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 border-b ${
        isDark
          ? "border-[#2B2E33] bg-[#111111] text-[#FAF9F4]"
          : "border-[#E7E7E7] bg-[#FAF9F4] text-[#111111]"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-lg font-semibold tracking-tight">
          ResumeForge
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/features" className={navLinkClass}>
            Features
          </NavLink>

          <NavLink to="/templates" className={navLinkClass}>
            Templates
          </NavLink>

          <NavLink to="/dashboard" className={navLinkClass}>
            Dashboard
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => dispatch(toggleTheme())}
            className={`flex h-9 w-9 items-center justify-center rounded-[12px] border transition ${
              isDark
                ? "border-[#3A3D43] hover:bg-[#191C21]"
                : "border-[#E0E0E0] hover:bg-[#E7E7E7]"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          {/* Auth Button */}
          {isAuthenticated ? (
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleLogout}
              className={`rounded-[15px] px-4 py-2.5 text-sm font-medium transition ${
                isDark
                  ? "bg-[#FAF9F4] text-[#111111] hover:bg-[#E7E7E7]"
                  : "bg-[#111111] text-[#FAF9F4] hover:bg-[#191C21]"
              }`}
            >
              Logout
            </motion.button>
          ) : (
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/login"
                className={`rounded-[15px] px-4 py-2.5 text-sm font-medium transition ${
                  isDark
                    ? "bg-[#FAF9F4] text-[#111111] hover:bg-[#E7E7E7]"
                    : "bg-[#111111] text-[#FAF9F4] hover:bg-[#191C21]"
                }`}
              >
                Login
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
