import React from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export default function CompetitionCard({
  title,
  status,
  date,
  time,
  location,
  players,
  prize,
  buttonText,
  onButtonClick,
}) {
  const statusClass =
    status === "Registration Open"
      ? "bg-blue-500 text-white"
      : status === "Upcoming"
      ? "bg-gray-700 text-white"
      : status === "LIVE"
      ? "bg-red-500 text-white"
      : status==="Open"
      ?"bg-green-500 text-white"
      : "bg-gray-500 text-white";

  return (
    <article className="max-w-[380px] w-full bg-[#0b1220] border border-gray-800 rounded-2xl p-6 shadow-[0_10px_30px_rgba(2,6,23,0.7)]">
      <div className="flex items-start justify-between">
        <h3 className="text-white text-lg font-semibold leading-tight">
          {title}
        </h3>
        <span
          className={`ml-3 text-xs font-medium px-3 py-[6px] rounded-full ${statusClass}`}
        >
          {status}
        </span>
      </div>

      <ul className="mt-4 space-y-3 text-sm text-gray-300">
        <li className="flex items-center gap-3">
          <Calendar size={16} className="text-gray-400" />
          <span>{date}</span>
        </li>
        <li className="flex items-center gap-3">
          <Clock size={16} className="text-gray-400" />
          <span>{time}</span>
        </li>
        <li className="flex items-center gap-3">
          <MapPin size={16} className="text-gray-400" />
          <span className="inline-block max-w-[220px] truncate">{location}</span>
        </li>
        <li className="flex items-center gap-3">
          <Users size={16} className="text-gray-400" />
          <span>{players}</span>
        </li>
      </ul>

      <div className="mt-6">
        <div className="bg-[#0f1724] border border-gray-800 rounded-xl p-4 text-center">
          <div className="text-xs text-gray-400">PRIZE POOL</div>
          <div className="mt-1 text-2xl font-extrabold text-blue-400">
            {prize}
          </div>
        </div>

        <button
          onClick={onButtonClick}
          className="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600 transition"
        >
          {buttonText}
        </button>
      </div>
    </article>
  );
}
