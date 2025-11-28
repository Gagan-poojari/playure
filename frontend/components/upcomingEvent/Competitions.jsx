"use client";

import React, { useMemo, useState } from "react";
import CompetitionCard from "./CompetitionCard";
import CompetitionFilter from "./CompetitionFilter";
import CompetitionSearch from "./CompetitionSearch";

export default function Competitions() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [q, setQ] = useState("");

  const today = new Date();
  const getRelativeDate = (daysAhead) => {
    const d = new Date(today);
    d.setDate(today.getDate() + daysAhead);
    return d.toLocaleDateString("en-IN", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const allCompetitions = [
    {
      id: 1,
      title: "Cricket World Championship",
      status: "Registration Open",
      date: getRelativeDate(2),
      time: "2:00 PM IST",
      location: "M. Chinnaswamy Stadium, Bangalore, India",
      players: "16/32 players",
      prize: "₹10,00,000",
      buttonText: "Register Now",
    },
    {
      id: 2,
      title: "Football Premier League",
      status: "Upcoming",
      date: getRelativeDate(5),
      time: "6:00 PM IST",
      location: "Sree Kanteerava Stadium, Bangalore, India",
      players: "22/32 players",
      prize: "₹15,00,000",
      buttonText: "View Details",
    },
    {
      id: 3,
      title: "Volleyball Championship",
      status: "LIVE",
      date: getRelativeDate(8),
      time: "1:00 PM IST",
      location: "Koramangala Indoor Stadium, Bangalore, India",
      players: "12/24 players",
      prize: "₹5,00,000",
      buttonText: "View Details",
    },
    {
      id: 4,
      title: "City Badminton Open",
      status: "Open",
      date: getRelativeDate(12),
      time: "10:00 AM IST",
      location: "Bangalore City Sports Complex",
      players: "8/16 players",
      prize: "₹80,000",
      buttonText: "Register",
    },
    {
      id: 5,
      title: "State Football Cup",
      status: "Ended",
      date: getRelativeDate(-10),
      time: "4:00 PM IST",
      location: "Bangalore Football Arena",
      players: "32/32 players",
      prize: "₹2,50,000",
      buttonText: "View",
    },
    {
      id: 6,
      title: "Inter-College Soccer",
      status: "Open",
      date: getRelativeDate(20),
      time: "3:30 PM IST",
      location: "Bangalore University Grounds",
      players: "10/22 players",
      prize: "₹40,000",
      buttonText: "Register",
    },
  ];

  const filters = [
    { name: "All", count: 6 },
    { name: "Open", count: 3 },
    { name: "Upcoming", count: 2 },
    { name: "Live", count: 1 },
    { name: "Ended", count: 3 },
  ];

  const normalizedStatus = (s) => {
    if (!s) return s;
    const lower = s.toLowerCase();
    if (lower.includes("register") || lower === "open") return "Open";
    if (lower.includes("upcoming")) return "Upcoming";
    if (lower.includes("live")) return "Live";
    if (lower.includes("end")) return "Ended";
    return s;
  };

  const visible = useMemo(() => {
    const qLower = q.trim().toLowerCase();
    return allCompetitions.filter((c) => {
      const matchQ =
        qLower === "" ||
        c.title.toLowerCase().includes(qLower) ||
        c.location.toLowerCase().includes(qLower);

      const ns = normalizedStatus(c.status);
      const matchFilter =
        activeFilter === "All" ||
        activeFilter === ns ||
        (activeFilter === "Open" && ns === "Open");

      return matchQ && matchFilter;
    });
  }, [allCompetitions, q, activeFilter]);

  return (
    <section className="min-h-screen bg-black/90 text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 inline-flex items-center gap-3 justify-center">
            <span className="text-3xl">🏆</span>
            Sports Competitions
          </h1>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Join the ultimate sports competitions in Bangalore. Compete with the
            best athletes in Cricket, Football, Volleyball, and more.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <CompetitionSearch value={q} onChange={setQ} />
          <div className="w-full lg:w-auto flex items-center justify-start lg:justify-end">
            <CompetitionFilter
              filters={filters}
              active={activeFilter}
              onChange={setActiveFilter}
            />
          </div>
        </div>

        <div className="mt-4 text-gray-400">
          Showing {visible.length} of {allCompetitions.length} active competitions
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {visible.length === 0 ? (
            <div className="text-gray-400 col-span-full">No competitions found.</div>
          ) : (
            visible.map((c) => (
              <CompetitionCard
                key={c.id}
                title={c.title}
                status={c.status}
                date={c.date}
                time={c.time}
                location={c.location}
                players={c.players}
                prize={c.prize}
                buttonText={c.buttonText}
                onButtonClick={() => alert(`${c.title} -> ${c.buttonText}`)}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
