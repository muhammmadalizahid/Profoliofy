// File: src/pages/AuthPages.jsx
import React, { useState } from "react";

export default function AuthPages() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${isLogin ? "Logging in" : "Signing up"} with: ${form.email}`);
  };

  const isFormValid =
    form.email && form.password && (isLogin || form.name);

  return (
    <div className="min-h-screen bg-[#1B263B] text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#243447] bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-md space-y-6"
      >
        {/* Branding */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold mb-2">Profoliofy</h1>
          <p className="text-gray-400 text-sm">
            {isLogin ? "Welcome back! Log in to continue." : "Create an account to get started."}
          </p>
        </div>

        {/* Name (only for signup) */}
        {!isLogin && (
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#415A77]"
            />
          </div>
        )}

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#415A77]"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#415A77]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-xs text-gray-300 mt-1 hover:underline"
          >
            {showPassword ? "Hide" : "Show"} Password
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-2 px-4 rounded font-semibold ${
            isFormValid
              ? "bg-[#415A77] hover:bg-[#324960]"
              : "bg-gray-600 cursor-not-allowed"
          }`}
        >
          {isLogin ? "Login" : "Create Account"}
        </button>

        {/* Toggle Link */}
        <p className="text-center text-sm text-gray-300">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 underline hover:text-white"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>

        {/* Optional OAuth Placeholder */}
        <div className="text-center text-gray-400 my-4 text-sm">or</div>
        <button className="w-full py-2 border border-gray-600 rounded hover:bg-[#324960] text-sm">
          Continue with Google
        </button>
      </form>
    </div>
  );
}
