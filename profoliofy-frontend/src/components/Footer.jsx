// File: src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-400 text-sm py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div>
            <h1 className="text-xl font-bold text-white mb-4">Profoliofy</h1>
            <p className="text-gray-400 leading-relaxed">
              AI-powered portfolio builder for creators, freelancers, and students. Launch your site in minutes — no code needed.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-white font-semibold mb-4">Navigation</h2>
            <ul className="space-y-3">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h2 className="text-white font-semibold mb-4">Legal</h2>
            <ul className="space-y-3">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-white font-semibold mb-4">Follow Us</h2>
            <ul className="space-y-3">
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1B263B] mt-12 pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Profoliofy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
