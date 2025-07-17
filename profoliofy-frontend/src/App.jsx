// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import CreatePortfolio from "./pages/CreatePortfolio"; // ✅ fixed typo here
import Settings from "./pages/Settings";
import AuthPages from "./pages/AuthPages";
import TemplateSelection from "./pages/TemplateSelection"; // Import the new TemplateSelection page

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
      </Routes>
    </Router>
  );
}
