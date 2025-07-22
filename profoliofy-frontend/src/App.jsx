// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import CreatePortfolio from "./pages/CreatePortfolio"; // ✅ fixed typo here
import Settings from "./pages/Settings";
import AuthPages from "./pages/AuthPages";
import TemplateSelection from "./pages/TemplateSelection"; // Import the new TemplateSelection page
import ForgotPassword from "./pages/forgetpassword"; // Import ForgotPassword page
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createportfolio" element={<CreatePortfolio />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/auth" element={<AuthPages />} />
        <Route path="/templateselection" element={<TemplateSelection />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add Forgot Password route */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </Router>
  );
}
