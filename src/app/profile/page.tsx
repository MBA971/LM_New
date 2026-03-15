"use client";

import { useState } from "react";

export default function Profile() {
  const [name, setName] = useState("Demo User");
  const [email, setEmail] = useState("demo@example.com");
  const [bio, setBio] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Profile Settings</h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-indigo-600 hover:text-indigo-500"
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-md border p-6">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-4xl text-indigo-600">👤</span>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-1">{name}</h2>
            <p className="text-slate-500 mb-4">{email}</p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-500">
                <span className="font-medium text-slate-700">5</span> courses enrolled
              </span>
              <span className="text-sm text-slate-500">
                <span className="font-medium text-slate-700">12</span> lessons completed
              </span>
              <span className="text-sm text-slate-500">
                <span className="font-medium text-slate-700">85%</span> avg quiz score
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Form */}
      <div className="bg-white rounded-lg shadow-md border p-6">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-slate-50 disabled:text-slate-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-slate-50 disabled:text-slate-500"
            />
          </div>
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-slate-700 mb-1">
              Bio
            </label>
            <textarea
              id="bio"
              rows={4}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              disabled={!isEditing}
              placeholder="Tell us about yourself..."
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-slate-50 disabled:text-slate-500"
            />
          </div>
          {isEditing && (
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white rounded-lg shadow-md border p-6">
        <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="font-medium">Change Password</p>
              <p className="text-sm text-slate-500">Update your password regularly</p>
            </div>
            <button className="text-indigo-600 hover:text-indigo-500 text-sm">
              Change
            </button>
          </div>
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-slate-500">Manage your email preferences</p>
            </div>
            <button className="text-indigo-600 hover:text-indigo-500 text-sm">
              Configure
            </button>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-red-600">Delete Account</p>
              <p className="text-sm text-slate-500">Permanently delete your account</p>
            </div>
            <button className="text-red-600 hover:text-red-500 text-sm">
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Learning Stats */}
      <div className="bg-white rounded-lg shadow-md border p-6">
        <h3 className="text-lg font-semibold mb-4">Learning Statistics</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-indigo-50 rounded-lg">
            <p className="text-3xl font-bold text-indigo-600">5</p>
            <p className="text-sm text-slate-600">Courses Enrolled</p>
          </div>
          <div className="text-center p-4 bg-emerald-50 rounded-lg">
            <p className="text-3xl font-bold text-emerald-600">12</p>
            <p className="text-sm text-slate-600">Lessons Completed</p>
          </div>
          <div className="text-center p-4 bg-amber-50 rounded-lg">
            <p className="text-3xl font-bold text-amber-600">85%</p>
            <p className="text-sm text-slate-600">Avg Quiz Score</p>
          </div>
        </div>
      </div>
    </div>
  );
}