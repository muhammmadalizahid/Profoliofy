// File: src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons for menu

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-[#101929] border-b border-[#21436a] text-white">
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        <h1 className="text-2xl font-bold">Profoliofy</h1>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-[#21436a] rounded-lg"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
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
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-3 space-y-3 bg-[#152238] shadow-lg">
          <ul className="space-y-3 text-sm font-medium">
            <li><a href="#how-it-works" className="block py-2 hover:text-gray-300">How It Works</a></li>
            <li><a href="#examples" className="block py-2 hover:text-gray-300">Examples</a></li>
            <li><a href="#features" className="block py-2 hover:text-gray-300">Features</a></li>
            <li><a href="#pricing" className="block py-2 hover:text-gray-300">Pricing</a></li>
            <li><a href="#faq" className="block py-2 hover:text-gray-300">FAQ</a></li>
          </ul>
          <Link 
            to="/auth" 
            className="block w-full text-center bg-[#415A77] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#324960]"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
