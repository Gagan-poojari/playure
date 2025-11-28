"use client";

import { useState } from "react";

export default function CreateGameSession({setDisplay}) {
  const [formData, setFormData] = useState({
    game: "",
    gameType: "",
    date: "",
    time: "",
    region: "",
    maxPlayers: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-white/30 text-white flex items-center justify-center p-6  backdrop-blur-sm open-sans-1 text-[16px]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-neutral-900 p-6 rounded-xl shadow-lg space-y-5"
      >
        <h2 className="text-xl font-semibold">Create Game Session</h2>
        <p className="text-sm text-neutral-400">
          Set up a new gaming session and find your perfect squad members!
        </p>

        {/* Game */}
        <div>
          <label className="block mb-2 text-sm">Game *</label>
          <select
            name="game"
            value={formData.game}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select a game</option>
            <option value="valorant">Valorant</option>
            <option value="csgo">CS:GO</option>
            <option value="fortnite">Fortnite</option>
          </select>
        </div>

        {/* Game Type */}
        <div>
          <label className="block mb-2 text-sm">Game Type *</label>
          <select
            name="gameType"
            value={formData.gameType}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select game type</option>
            <option value="casual">Casual</option>
            <option value="ranked">Ranked</option>
          </select>
        </div>

        {/* Date & Time */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-2 text-sm">Date *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 text-sm">Time *</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-2 text-sm">Location/Region *</label>
          <select
            name="region"
            value={formData.region}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select region</option>
            <option value="na">North America</option>
            <option value="eu">Europe</option>
            <option value="asia">Asia</option>
          </select>
        </div>

        {/* Max Players */}
        <div>
          <label className="block mb-2 text-sm">Maximum Players</label>
          <input
            type="number"
            name="maxPlayers"
            value={formData.maxPlayers}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter max players"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 text-sm">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Describe your session, skill requirements, and what you're looking for in teammates..."
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
          onClick={()=>setDisplay(false)}
            type="button"
            className="px-4 py-2 rounded-lg bg-neutral-700 text-white hover:bg-neutral-600 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
          >
            Create Session
          </button>
        </div>
      </form>
    </div>
  );
}
