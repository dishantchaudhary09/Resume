import { Routes, Route } from "react-router-dom";

// Public pages
import Home from "./pages/Home";
import Features from "./pages/Features";
import Templates from "./pages/Templates";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

// Protected pages
import Dashboard from "./pages/Dashboard";
import Builder from "./pages/Builder";
import Preview from "./pages/Preview";

// Route protection
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* ================= PUBLIC ROUTES ================= */}

      <Route path="/" element={<Home />} />

      <Route path="/features" element={<Features />} />

      <Route path="/templates" element={<Templates />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />


      {/* ================= PROTECTED ROUTES ================= */}

      {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/builder" element={<Builder />} />

        <Route path="/builder/:id" element={<Builder />} />

        <Route path="/preview" element={<Preview />} />
      {/* </Route> */}


      {/* ================= 404 ================= */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;