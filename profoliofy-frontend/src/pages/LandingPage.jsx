// File: src/pages/LandingPage.jsx
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#101929] text-white scroll-smooth">
      {/* ✅ Use extracted Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center px-4 py-24 max-w-4xl mx-auto" id="hero">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6"
        >
          Create Your Portfolio Using Just a Prompt
        </motion.h2>
        <p className="text-lg text-gray-300 mb-8">
          No coding. No designing. Just tell us who you are — we’ll build the site.
        </p>
        <a href="#generate" className="inline-block bg-[#415A77] hover:bg-[#324960] px-6 py-3 rounded-lg font-semibold">
          Generate My Portfolio
        </a>
        <div className="mt-12">
          <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-300">[ Prompt → AI Builds → Preview Animation Here ]</span>
          </div>
        </div>
      </section>

      {/* The rest of your landing page sections follow below... (unchanged) */}
      {/* Hero Section */}
      <section className="text-center px-4 py-24 max-w-4xl mx-auto" id="hero">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6"
        >
          Create Your Portfolio Using Just a Prompt
        </motion.h2>
        <p className="text-lg text-gray-300 mb-8">
          No coding. No designing. Just tell us who you are — we’ll build the site.
        </p>
        <a href="#generate" className="inline-block bg-[#415A77] hover:bg-[#324960] px-6 py-3 rounded-lg font-semibold">
          Generate My Portfolio
        </a>
        <div className="mt-12">
          {/* 🔁 Add loop animation or before/after demo here */}
          <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-300">[ Prompt → AI Builds → Preview Animation Here ]</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-8 py-16 bg-[#243447]">
        <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          <div>
            <div className="text-4xl mb-4">✅</div>
            <h4 className="font-bold mb-2">Describe Yourself</h4>
            <p className="text-gray-300 text-sm">Enter your name, field, and experience.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">⚙️</div>
            <h4 className="font-bold mb-2">AI Builds the Site</h4>
            <p className="text-gray-300 text-sm">We generate a full site in seconds with content and design.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="font-bold mb-2">Launch Instantly</h4>
            <p className="text-gray-300 text-sm">Get a free subdomain or use your own domain.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="#generate" className="text-blue-400 underline hover:text-blue-300">Try a demo</a>
        </div>
      </section>

      {/* Live Examples */}
      <section id="examples" className="px-8 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Live Examples</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Zain the Dev", "Fatima the Designer", "Sara the Student"].map((name, i) => (
            <div key={i} className="bg-white text-black p-4 rounded-lg shadow">
              <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-600">[ Site Preview ]</span>
              </div>
              <h4 className="font-semibold mb-1">{name}</h4>
              <p className="text-sm text-gray-700 mb-2">“{name.split(" ")[0]}'s Prompt”</p>
              <button className="px-4 py-2 bg-[#415A77] text-white rounded">Preview</button>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-8 py-16 bg-[#243447] text-center">
  <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto justify-items-center">
    {[
      ["💡", "AI-Powered Site Generator", "No templates, no drag & drop. Just describe your profession and let the AI build a personalized site for you."],
      ["✨", "Fully Responsive", "Your portfolio adapts perfectly to every screen — phone, tablet, or desktop."],
      ["🌐", "Free Subdomain", "Launch instantly with a free subdomain, or connect your own custom domain."],
      ["🔧", "Easy Editing", "Use our visual tools to update your site’s content anytime without touching code."],
      ["📊", "Analytics Ready", "Track site visits, user engagement, and performance right from your dashboard."],
      ["🔒", "Secure & SEO Friendly", "We ensure fast loading, SSL security, and SEO best practices — all built-in."],
    ].map(([icon, title, desc], i) => (
      <div key={i} className="flex flex-col items-center text-center space-y-2 w-full">
        <span className="text-3xl">{icon}</span>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm text-gray-300 max-w-md">{desc}</p>
      </div>
    ))}
  </div>
</section>
  {/* Pricing Section */}
  <section id="pricing" className="px-8 py-20 bg-[#1B263B] text-white text-center">
    <h3 className="text-3xl font-bold mb-12">Pricing</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="bg-[#243447] p-8 rounded-xl shadow-md border border-[#415A77]">
        <h4 className="text-2xl font-semibold mb-2">Free Plan</h4>
        <p className="text-gray-300 mb-4">Great for students and beginners.</p>
        <ul className="text-left text-sm text-gray-300 space-y-2">
          <li>✅ AI-generated portfolio site</li>
          <li>✅ Free subdomain (yourname.profoliofy.com)</li>
          <li>✅ Visual editing tools</li>
          <li>✅ Limited analytics</li>
          <li>❌ No custom domain</li>
          <li>❌ No premium templates</li>
        </ul>
        <div className="mt-6">
          <span className="text-xl font-bold">Free</span>
        </div>
      </div>
      <div className="bg-[#324960] p-8 rounded-xl shadow-md border border-[#415A77]">
        <h4 className="text-2xl font-semibold mb-2">Premium Plan</h4>
        <p className="text-gray-300 mb-4">For professionals who want more.</p>
        <ul className="text-left text-sm text-gray-300 space-y-2">
          <li>✅ Everything in Free</li>
          <li>✅ Connect your own domain</li>
          <li>✅ Access premium AI templates</li>
          <li>✅ Advanced analytics</li>
          <li>✅ Priority support</li>
        </ul>
        <div className="mt-6">
          <span className="text-xl font-bold">$10/month</span>
        </div>
      </div>
    </div>
  </section>

      {/* Testimonials */}
      <section className="bg-[#1B263B] px-8 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">What Users Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ["Fatima, Designer", "I got freelance gigs with a site I made in 5 mins!"],
            ["Zain, Developer", "I just described my projects, and boom — a dev site was ready."],
            ["Sara, Student", "I don’t code. But now I have a website I’m proud of."],
          ].map(([name, quote], i) => (
            <div key={i} className="bg-[#243447] p-6 rounded-xl shadow-md">
              <p className="italic mb-4">“{quote}”</p>
              <h4 className="font-semibold">{name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id="generate" className="px-8 py-20 text-center bg-[#324960]">
        <h3 className="text-4xl font-bold mb-4">Ready to launch your portfolio?</h3>
        <p className="text-lg text-gray-200 mb-6">
          Start for free. No login needed. See the magic in action.
        </p>
        <a href="/dashboard" className="inline-block bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold text-white">
          Generate My Portfolio
        </a>
      </section>

      {/* FAQ Section (Optional) */}
      <section id="faq" className="px-8 py-16 bg-[#1B263B]">
    <h3 className="text-3xl font-bold text-center mb-12">FAQs</h3>
    <div className="max-w-3xl mx-auto space-y-8 text-left">
      {[ 
        [
          "Is it free?",
          "Yes. Profoliofy is free to start — you can generate and publish your AI-powered portfolio instantly on a subdomain without paying a single rupee."
        ],
        [
          "Can I use my own domain?",
          "Absolutely. You can connect your personal or business domain with just a few clicks, giving your portfolio a fully professional look."
        ],
        [
          "Can I edit after generation?",
          "Yes, you can easily update text, images, and even sections using our intuitive visual editor — no coding knowledge required."
        ],
        [
          "Do I need to know coding?",
          "Nope. Profoliofy is built specifically for non-coders — creatives, freelancers, students — anyone who wants a site without technical hassle."
        ]
      ].map(([q, a], i) => (
        <div key={i}>
          <h4 className="font-semibold text-lg mb-1">{q}</h4>
          <p className="text-gray-300 text-sm leading-relaxed">{a}</p>
        </div>
      ))}
    </div>
    </section>
      <Footer />
    </div>
  );
}
