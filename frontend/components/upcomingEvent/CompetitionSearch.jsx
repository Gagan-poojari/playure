import React from "react";

export default function CompetitionSearch({ value, onChange }) {
  return (
    <div className="w-full">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search competitions..."
        className="w-full md:w-[62%] lg:w-[55%] xl:w-[48%] h-12 rounded-full px-4 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
      />
    </div>
  );
}
