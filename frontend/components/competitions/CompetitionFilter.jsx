import React from "react";

export default function CompetitionFilter({ filters, active, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {filters.map((f) => {
        const isActive = active === f.name;
        return (
          <button
            key={f.name}
            onClick={() => onChange(f.name)}
            className={`flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium transition 
              ${isActive ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            <span>{f.name}</span>
            <span className={`ml-1 inline-flex items-center justify-center w-6 h-6 text-xs rounded-full ${isActive ? "bg-white/10" : "bg-gray-700"}`}>
              {f.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
