"use client";
import React from "react";
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  const stats = [
    { count: "10K+", label: "Active Athletes", color: "text-yellow-400" },
    { count: "500+", label: "Competitions", color: "text-pink-400" },
    { count: "50+", label: "Sports", color: "text-green-400" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center gap-5 items-center text-center px-4 py-0 bg-[url('/main-bg.jpg')] bg-cover bg-no-repeat bg-center">
      {/* Overlay */}
      <div className=" w-full h-14 flex justify-between gap-3 text-left text-white-950 m-1 p-2"> {/* login btn*/} 
        <a href="#" className=" px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white-950 font-semibold rounded-lg shadow-lg  hover:opacity-90 transition-all">
          Log in <span aria-hidden="true" classname="">&rarr;</span>
        </a>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/60 to-purple-800/60 z-0" />

      {/* Content */}

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          BUILDING THE{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-transparent bg-clip-text">
            FUTURE
          </span>
          <br />
          FOR SPORTS PLAYERS
        </h1>

        <p className="text-gray-200 text-lg mt-6">
          One stop solution for your sports career. Connect, compete, and
          collaborate with athletes worldwide.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition-all">
            Get Started →
          </button>
          <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg flex items-center gap-2 shadow-lg hover:bg-blue-50 transition-all">
            <FaPlay className="text-sm" />
            Watch a Demo
          </button>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap justify-center items-center gap-10">
            {stats.map((item, i) => (
              <div key={i} className="text-white text-center">
                <p className={`text-3xl font-bold ${item.color}`}>
                  {item.count}
                </p>
                <p className="mt-1 text-sm text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
