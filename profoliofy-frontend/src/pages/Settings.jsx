// File: src/pages/Settings.jsx
import React, { useState } from "react";

export default function Settings() {
  const [user, setUser] = useState({
    name: "Ali Raza",
    email: "ali@example.com",
    password: "********",
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
    <div className="min-h-screen bg-[#1B263B] text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">User Settings</h1>

      <div className="max-w-xl mx-auto bg-[#243447] p-6 rounded-xl space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full p-2 rounded text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full p-2 rounded text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full p-2 rounded text-black"
          />
        </div>

        <div className="flex gap-4 mt-4">
          {editMode ? (
            <>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-600 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="px-4 py-2 bg-gray-600 rounded"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="px-4 py-2 bg-[#415A77] rounded"
            >
              Edit Profile
            </button>
          )}
          <button
            onClick={handleDelete}
            className="ml-auto px-4 py-2 bg-red-600 rounded"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
