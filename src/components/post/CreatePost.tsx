import React from 'react';

export function CreatePost() {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6 transform hover:scale-[1.01] transition-transform duration-200">
      <div className="flex space-x-4">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 bg-gray-100 rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
        />
      </div>
    </div>
  );
}