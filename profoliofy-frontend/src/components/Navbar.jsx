// File: src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#101929] border-b border-[#21436a]">
      <h1 className="text-2xl font-bold">Profoliofy</h1>
      <div className="flex items-center gap-6">
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#how-it-works" className="hover:text-gray-300">How It Works</a></li>
          <li><a href="#examples" className="hover:text-gray-300">Examples</a></li>
          <li><a href="#features" className="hover:text-gray-300">Features</a></li>
          <li><a href="#pricing" className="hover:text-gray-300">Pricing</a></li>
          <li><a href="#faq" className="hover:text-gray-300">FAQ</a></li>
        </ul>
        <Link to="/auth" className="ml-4 bg-[#415A77] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#324960]">
          Login
        </Link>
      </div>
    </nav>
  );
}
