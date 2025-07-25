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
import Payment from "./pages/Payment";
import PaymentConfirmation from "./pages/PaymentConfirmation"; // Import PaymentConfirmation page
import PaymentSuccess  from "./pages/PaymentSuccess";
import PaymentFailure from "./pages/PaymentFailure"; // Import PaymentFailure page
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
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-confirmation" element={<PaymentConfirmation />} /> {/* Add Payment Confirmation route */}
        <Route path="/payment-success" element={<PaymentSuccess />} /> {/* Add Payment Status route */}
        <Route path="/payment-failure" element={<PaymentFailure />} /> {/* Add Payment Failure route */}  
      </Routes>
    </Router>
  );
}
