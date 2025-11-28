// components/SportsGearHero.jsx
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function SportsGearHero({ setSearchTerm, setSport }) {
  return (
    <section
      className={`relative bg-cover bg-center bg-no-repeat  ${poppins.className} relative min-h-500px flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-red-400  p-8`}
    >
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug">
        Find Your Perfect <span className="text-yellow-400">Sports Gear</span>
      </h1>

      {/* Description */}
      <p className="text-white text-lg mt-4 max-w-2xl">
        Discover premium sports equipment from trusted sellers or find free
        donations from generous athletes in your community.
      </p>

      {/* Search Bar */}
      <div className="mt-6 flex items-center w-full max-w-lg bg-white rounded-full shadow-md overflow-hidden">
        <input
          type="text"
          placeholder="What sport equipment are you looking for?"
          className="flex-grow p-3 px-5 outline-none text-gray-700"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3">
          Search
        </button>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {[
          "Running",
          "Cricket",
          "Football",
          "Tennis",
          "Fitness",
          "Swimming",
        ].map((category) => (
          <motion.button
            key={category}
            onClick={() => {
              setSport(category);
              console.log(category);
            }}
            whileTap={{backgroundColor:"blue",scale:1.3}}
            transition={{duration:1}}
            className="bg-white/20 text-white px-4 py-2 rounded-lg backdrop-blur-sm hover:bg-white/30 transition"
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Call to Action Buttons */}
      <div className="flex gap-4 mt-8">
        <button onClick={()=>setSport("")} className="bg-white text-blue-600 font-medium px-6 py-3 rounded-full shadow hover:shadow-lg scale-110  transition">
          clear Filter
        </button>
        <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-full shadow hover:shadow-lg transition">
          Browse Donations
        </button>
      </div>
    </section>
  );
}
