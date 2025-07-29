import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Settings as SettingsIcon, Edit3, Trash2, Save, X } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-50">Portfoliofy</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="#features" className="text-gray-50 hover:text-gray-200 transition-colors">Features</Link>
          <Link to="#examples" className="text-gray-50 hover:text-gray-200 transition-colors">Examples</Link>
          <Link to="#pricing" className="text-gray-50 hover:text-gray-200 transition-colors">Pricing</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link 
            to="/auth" 
            className="px-4 py-2 text-gray-50 hover:bg-blue-800 rounded-lg transition-colors"
          >
            Sign In
          </Link>
          <Link 
            to="#generate" 
            className="px-4 py-2 bg-gray-50 text-blue-900 hover:bg-gray-100 rounded-lg font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
      <footer className="bg-blue-900 text-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand Column - Unchanged */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-xl font-bold">Portfoliofy</span>
              </div>
              <p className="text-sm opacity-80">
                AI-powered portfolio creation for professionals.
              </p>
            </div>

            {/* Product Column - Unchanged */}
            <div>
              <h4 className="text-md font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#features" className="hover:underline opacity-80 hover:opacity-100">Features</Link></li>
                <li><Link to="#examples" className="hover:underline opacity-80 hover:opacity-100">Examples</Link></li>
                <li><Link to="#pricing" className="hover:underline opacity-80 hover:opacity-100">Pricing</Link></li>
                <li><Link to="#faq" className="hover:underline opacity-80 hover:opacity-100">FAQ</Link></li>
              </ul>
            </div>

            {/* Company Column - Unchanged */}
            <div>
              <h4 className="text-md font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">About Us</Link></li>
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">Blog</Link></li>
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">Careers</Link></li>
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">Contact</Link></li>
              </ul>
            </div>

            {/* Legal Column - Unchanged */}
            <div>
              <h4 className="text-md font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">Terms of Service</Link></li>
                <li><Link to="#" className="hover:underline opacity-80 hover:opacity-100">Cookie Policy</Link></li>
              </ul>
            </div>

            {/* New Follow Us Column */}
            <div>
              <h4 className="text-md font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Facebook Icon */}
                <a href="#" className="text-gray-50 hover:text-blue-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                
                {/* Twitter Icon */}
                <a href="#" className="text-gray-50 hover:text-blue-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                
                {/* Instagram Icon */}
                <a href="#" className="text-gray-50 hover:text-blue-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748 1.857.344.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                
                {/* LinkedIn Icon */}
                <a href="#" className="text-gray-50 hover:text-blue-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2V19h-3v-9h3v1.3c.6-1 1.8-1.7 3.1-1.7 2.4 0 4.4 2 4.4 4.4V19z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright - Unchanged */}
          <div className="border-t border-blue-800 mt-12 pt-8 text-sm text-center opacity-80">
            © {new Date().getFullYear()} Portfoliofy. All rights reserved.
          </div>
        </div>
      </footer>
  );
};

export default function Settings() {
  const [user, setUser] = useState({
    name: "Ali Raza",
    email: "ali@example.com",
    password: "",
  });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    alert("Profile updated successfully");
    setEditMode(false);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      alert("Account deleted");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Blue Header with White Text */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900 shadow-lg">
        <Navbar />
      </header>

      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              <SettingsIcon className="w-8 h-8 text-blue-900" />
              Account Settings
            </h1>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  disabled={!editMode}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    editMode ? 'border-gray-300 bg-white' : 'border-gray-200 bg-gray-50'
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  disabled={!editMode}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    editMode ? 'border-gray-300 bg-white' : 'border-gray-200 bg-gray-50'
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  disabled={!editMode}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    editMode ? 'border-gray-300 bg-white' : 'border-gray-200 bg-gray-50'
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>

              {/* Account Status Section */}
              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Account Status</h2>
                <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-blue-900">Free Plan</p>
                    <p className="text-sm text-blue-700">Basic features included</p>
                  </div>
                  <Link
                    to="/pricing"
                    className="px-4 py-2 bg-blue-900 text-white rounded-lg text-sm hover:bg-blue-800 transition-colors"
                  >
                    Upgrade to Premium
                  </Link>
                </div>
              </div>

              {/* Payment History Section */}
              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Payment History</h2>
                <div className="text-sm text-gray-500">
                  No payment history available
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                {editMode ? (
                  <>
                    <button
                      onClick={handleSubmit}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                    >
                      <Save className="w-5 h-5" />
                      Save Changes
                    </button>
                    <button
                      onClick={() => setEditMode(false)}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors"
                    >
                      <X className="w-5 h-5" />
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setEditMode(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    <Edit3 className="w-5 h-5" />
                    Edit Profile
                  </button>
                )}
                <button
                  onClick={handleDelete}
                  className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors ml-auto"
                >
                  <Trash2 className="w-5 h-5" />
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}