"use client";

import SportsGearHero from "@/components/ecommercepage/SportsGearHero";
import Product from "@/components/ecommercepage/Product";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sport, setSport] = useState("");
  const data = [
    {
      name: "bat",
      category: "Cricket",
      model: "MRF",
      price: "600",
      location: "bengluru",
      img_url: "/ecommerce/mrfbat.png",
      status: false,
    },
    {
      name: "ball",
      category: "Football",
      model: "Nike",
      price: "400",
      location: "bengluru",
      img_url: "/ecommerce/football.png",
      status: false,
    },
    {
      name: "racket",
      category: "Badminton",
      model: "Yonex",
      price: "500",
      location: "bengluru",
      img_url: "/ecommerce/racket.png",
      status: false,
    },
    {
      name: "shoe",
      category: "Running",
      model: "nike",
      price: "800",
      location: "bengluru",
      img_url:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      status: false,
    },
    {
      name: "Bat",
      category: "Cricket",
      model: "SG",
      price: "700",
      location: "bengluru",
      img_url: "/ecommerce/ssbat.png",
      status: false,
    },
  ];

  const filteredData = data.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // If sport is empty, include all; otherwise match the category
    const matchesSport = sport
      ? item.category.toLowerCase() === sport.toLowerCase()
      : true;

    return matchesSearch && matchesSport;
  });
  return (
    <main className="min-h-screen grid bg-gray-100">
      <SportsGearHero setSearchTerm={setSearchTerm} setSport={setSport} />
      <div className="relative top-[40px] grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 p-6">
        {filteredData.length > 0
          ? filteredData.map((item, index) => (
              <Product obj={item} key={index} />
            ))
          : data.map((item, index) => <Product obj={item} key={index} />)}
      </div>
    </main>
  );
}
