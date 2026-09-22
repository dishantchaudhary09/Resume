import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slice/authSlice.js";
import { toast } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await dispatch(login(formData)).unwrap();

      toast.success(result.message || "Login successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error || "Login failed");
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F4] text-[#111111]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side */}
        <section className="hidden bg-[#191C21] p-10 text-[#FAF9F4] lg:flex lg:flex-col lg:justify-between">
          <Link to="/" className="text-xl font-semibold tracking-tight">
            ResumeForge
          </Link>

          <div className="max-w-xl">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#E7E7E7]">
              Your career / 01
            </p>

            <h1 className="text-5xl font-medium leading-[1.05] tracking-tight xl:text-6xl">
              Build something
              <br />
              worth remembering.
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-[#E7E7E7]">
              Create, edit and manage your professional resume from one simple
              workspace.
            </p>
          </div>

          <p className="text-sm text-[#E7E7E7]">
            © {new Date().getFullYear()} ResumeForge
          </p>
        </section>

        {/* Right Side */}
        <section className="flex items-center justify-center px-6 py-12 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-md"
          >
            {/* Mobile Logo */}
            <Link
              to="/"
              className="mb-16 block text-xl font-semibold tracking-tight lg:hidden"
            >
              ResumeForge
            </Link>

            <div className="mb-10">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[#4B5563]">
                Welcome back
              </p>

              <h2 className="text-4xl font-medium tracking-tight">Sign in</h2>

              <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                Continue building a resume that stands out.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4B5563]"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-[15px] border border-[#E7E7E7] bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#111111]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>

                  <Link
                    to="#"
                    className="text-xs text-[#4B5563] transition hover:text-[#111111]"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4B5563]"
                  />

                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full rounded-[15px] border border-[#E7E7E7] bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#111111]"
                  />
                </div>
              </div>

              {/* Error */}
              {error && <p className="text-sm text-red-600">{error}</p>}

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { y: -2 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                className="flex w-full items-center justify-center gap-2 rounded-[15px] bg-[#111111] px-5 py-3.5 text-sm font-medium text-[#FAF9F4] transition disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign in"}

                {!loading && <ArrowRight size={16} />}
              </motion.button>
            </form>

            {/* Register */}
            <p className="mt-8 text-center text-sm text-[#4B5563]">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-[#111111] underline underline-offset-4"
              >
                Create one
              </Link>
            </p>

            {/* Back */}
            <div className="mt-12 text-center">
              <Link
                to="/"
                className="text-xs font-mono uppercase tracking-[0.15em] text-[#4B5563] transition hover:text-[#111111]"
              >
                ← Back to home
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

export default Login;
