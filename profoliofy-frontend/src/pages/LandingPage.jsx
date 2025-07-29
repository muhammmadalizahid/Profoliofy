import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Move scrollToSection to a utility function outside components
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Account for fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['examples', 'features', 'pricing', 'reviews', 'faq'];
      const scrollPosition = window.scrollY;

      // Check each section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const isInView = top <= 100 && bottom >= 100;
          
          // Only update if we've scrolled past the section
          if (section === activeLink && !isInView && scrollPosition > element.offsetTop) {
            setActiveLink('');
            break;
          } else if (isInView) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink]); // Add activeLink as dependency

  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
    setActiveLink(sectionId);
  };

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-50">Profoliofy</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {[
            ['examples', 'Examples'],
            ['features', 'Features'],
            ['pricing', 'Pricing'],
            ['reviews', 'Reviews'],
            ['faq', 'FAQ']
          ].map(([id, label]) => (
            <button 
              key={id}
              onClick={() => handleClick(id)} 
              className={`text-gray-50 hover:text-gray-200 transition-colors relative pb-1
                ${activeLink === id ? 'border-b-2 border-gray-50' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link 
            to="/auth" 
            className="px-4 py-2 text-gray-50 hover:bg-blue-800 rounded-lg transition-colors"
          >
            Sign In
          </Link>
          <button 
            onClick={() => scrollToSection('generate')} 
            className="px-4 py-2 bg-gray-50 text-blue-900 hover:bg-gray-100 rounded-lg font-medium transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 scroll-smooth">
      {/* Blue Header with White Text */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900 shadow-lg">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="text-center px-4 pt-16 pb-16 max-w-4xl mx-auto" id="hero">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-900"
          >
            Build Your Professional Portfolio in Minutes
          </motion.h2>
          <p className="text-lg text-gray-600 mb-8">
            AI-powered portfolio creation with zero coding required.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/auth"
              className="inline-block bg-blue-900 hover:bg-blue-700 text-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Free
            </Link>
            <button 
              onClick={() => scrollToSection('examples')}
              className="inline-block border border-blue-900 text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-gray-100"
            >
              View Examples
            </button>
          </div>
          <div className="mt-12">
            <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center shadow-md border border-gray-200">
              <span className="text-gray-500">[ Portfolio Preview Demo ]</span>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="px-8 py-16 bg-gray-100">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
            {[
              ["1", "Describe Your Skills", "Tell us about your experience, projects, and what makes you unique"],
              ["2", "AI Generates Portfolio", "Our technology creates a professional portfolio tailored to you"],
              ["3", "Customize & Publish", "Make adjustments and go live in minutes"]
            ].map(([num, title, desc], i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <div className="text-2xl mb-4 font-bold text-blue-900">{num}</div>
                <h4 className="font-bold mb-2 text-lg text-gray-800">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Examples Section */}
        <section id="examples" className="px-8 py-16 bg-gray-50">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Portfolio Examples</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {["Software Engineer", "Graphic Designer", "Marketing Specialist"].map((profession, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center border border-gray-200">
                  <span className="text-gray-500">{profession} Example</span>
                </div>
                <h4 className="font-semibold mb-1 text-gray-800">{profession} Portfolio</h4>
                <button className="w-full mt-4 px-4 py-2 bg-blue-900 hover:bg-blue-700 text-gray-50 rounded-lg transition-colors">
                  View Example
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-8 py-16 bg-gray-100">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              ["🚀", "Instant Generation", "Get a complete portfolio in under a minute"],
              ["🎨", "Professional Designs", "Clean, modern templates for every profession"],
              ["📱", "Mobile Responsive", "Looks great on all devices automatically"],
              ["🔍", "SEO Optimized", "Get found by recruiters and clients"],
              ["🔄", "Easy Updates", "Edit content anytime with no coding"],
              ["📊", "Built-in Analytics", "Track visitors and engagement"]
            ].map(([icon, title, desc], i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-3 text-blue-900">{icon}</div>
                <h4 className="font-semibold text-lg mb-2 text-gray-800">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="px-8 py-20 bg-gray-50">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Simple Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-xl shadow-md border border-gray-200 overflow-hidden bg-gray-50">
              <div className="p-6 bg-blue-50 text-center">
                <h4 className="text-2xl font-semibold text-gray-800">Free</h4>
                <p className="text-xl font-bold mt-2 text-gray-600">$0/month</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-gray-600">
                  {["Basic portfolio", "Free subdomain", "Limited templates", "Basic analytics"].map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/auth"
                  className="w-full mt-6 py-3 rounded-lg font-semibold bg-blue-900 hover:bg-blue-700 text-gray-50 transition-colors inline-block text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="rounded-xl shadow-md overflow-hidden bg-blue-900 text-gray-50">
              <div className="p-6 bg-blue-800 text-center">
                <h4 className="text-2xl font-semibold">Pro</h4>
                <p className="text-xl font-bold mt-2">$9/month</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {["Everything in Free", "Custom domain", "Premium templates", "Advanced analytics", "Priority support"].map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 py-3 rounded-lg font-semibold bg-gray-50 text-blue-900 hover:bg-gray-100 transition-colors">
                  Go Pro
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="px-8 py-16 bg-gray-100">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              ["Sarah K.", "Got my dream job within 2 weeks of using my new portfolio!"],
              ["Michael T.", "Recruiters contact me weekly since I published my portfolio"],
              ["Priya M.", "So easy to use and the results look incredibly professional"]
            ].map(([name, quote], i) => (
              <div key={i} className="p-6 rounded-lg shadow-sm border border-gray-200 bg-gray-50">
                <p className="italic mb-4 text-gray-600">"{quote}"</p>
                <h4 className="font-semibold text-gray-800">{name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section id="generate" className="px-8 py-20 text-center bg-blue-900 text-gray-50">
          <h3 className="text-4xl font-bold mb-4">Ready to Build Your Portfolio?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who launched their portfolio in minutes.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/auth"
              className="inline-block bg-gray-50 hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Free
            </Link>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="inline-block border border-gray-50 text-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors hover:bg-blue-800"
            >
              See Pricing
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="px-8 py-16 bg-gray-50">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              ["Is this really free?", "Yes! You can create and publish a basic portfolio completely free forever. Our Pro plan offers additional features for professionals who need more."],
              ["Can I use my own domain?", "Absolutely. Pro users can connect any custom domain (like yourname.com) to their portfolio."],
              ["How do I update my portfolio?", "Our simple editor lets you update text, images, and sections with no technical skills required."],
              ["Is my data secure?", "We use enterprise-grade security measures to protect all your information and portfolio content."]
            ].map(([question, answer], i) => (
              <div key={i} className="p-6 bg-gray-100 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-lg mb-2 text-gray-800">{question}</h4>
                <p className="text-gray-600">{answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer - Blue with White Text */}
      <footer className="bg-blue-900 text-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-xl font-bold">Profoliofy</span>
              </div>
              <p className="text-sm opacity-80">
                AI-powered portfolio creation for professionals.
              </p>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                {[
                  ['examples', 'Examples'],
                  ['features', 'Features'],
                  ['pricing', 'Pricing'],
                  ['reviews', 'Reviews'],
                  ['faq', 'FAQ']
                ].map(([id, label]) => (
                  <li key={id}>
                    <button 
                      onClick={() => scrollToSection(id)} 
                      className={`hover:underline opacity-80 hover:opacity-100`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">About Us</Link></li>
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">Blog</Link></li>
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">Careers</Link></li>
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    to="/privacy-policy" 
                    className="hover:underline opacity-80 hover:opacity-100"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    to="#" 
                    className="hover:underline opacity-80 hover:opacity-100"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/cookie-policy" 
                    className="hover:underline opacity-80 hover:opacity-100"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-50 hover:text-blue-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                
                <a href="#" className="text-gray-50 hover:text-blue-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                
                <a href="#" className="text-gray-50 hover:text-blue-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748 1.857.344.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                
                <a href="#" className="text-gray-50 hover:text-blue-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2V19h-3v-9h3v1.3c.6-1 1.8-1.7 3.1-1.7 2.4 0 4.4 2 4.4 4.4V19z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 text-sm text-center opacity-80">
            © {new Date().getFullYear()} Profoliofy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}