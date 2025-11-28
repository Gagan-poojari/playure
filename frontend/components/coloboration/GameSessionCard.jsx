"use client";

import { Users, MapPin, Clock, Crown, Star } from "lucide-react";
import { easeIn, easeOut, motion, scale } from "framer-motion";



export default function GameSessionCard() {
  return (
    <motion.div initial={{scale:1}} whileHover={{scale:1.1}} transition={{ease:easeOut}} className="bg-neutral-900/30 text-white rounded-xl shadow-lg p-5 w-full max-w-3xl mx-auto border border-neutral-800 backdrop-blur-2xl">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <Star className="text-green-400 h-5 w-5" />
          <h2 className="text-xl font-semibold">Cricket</h2>
          <span className="ml-2 px-3 py-1 text-xs font-medium bg-green-800/40 text-green-400 rounded-full">
            Tournament
          </span>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1 text-sm">
            <Users className="h-4 w-4 text-cyan-400" />
            <span>3/11</span>
          </div>
          <span className="text-xs bg-green-800/40 text-green-400 px-2 py-0.5 rounded-full mt-1">
            8 needed
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-neutral-400 text-sm mt-2">
        Looking for skilled players for weekend tournament. Equipment provided!
      </p>

      {/* Time & Location */}
      <div className="flex flex-wrap gap-6 text-sm text-neutral-300 mt-4">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-cyan-400" />
          <span>08:00 PM</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-cyan-400" />
          <span>Downtown Sports Complex</span>
        </div>
      </div>

      {/* Host */}
      <div className="flex items-center gap-2 mt-4 text-sm">
        <Crown className="h-4 w-4 text-yellow-400" />
        <span className="text-neutral-400">Host:</span>
        <span className="font-semibold text-white">CricketCaptain</span>
      </div>

      {/* Divider */}
      <div className="border-t border-neutral-800 my-4" />

      {/* Players */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-neutral-400">Players:</span>
        <div className="flex -space-x-2">
          {["C", "F", "P"].map((player, index) => (
            <div
              key={index}
              className="h-8 w-8 flex items-center justify-center rounded-full bg-cyan-500 text-black font-bold border-2 border-neutral-900"
            >
              {player}
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-5">
        <button className="px-4 py-2 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-600/20 transition text-sm font-medium">
          View Details
        </button>
        <button className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition text-sm">
          Join Session
        </button>
      </div>
    </motion.div>
  );
}
