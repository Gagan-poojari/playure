// components/findfriends/FriendsHeader.jsx
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
});

export default function FriendsHeader() {
  return (
    <div className={`${poppins.className} text-center my-8`}>
      <h1 className="text-4xl font-bold text-purple-700">Find Sports Buddies</h1>
      <p className="text-gray-600 mt-2">
        Connect with players, teammates, and fans who share your passion for sports. Search, team up, or challenge others in your favorite games.
      </p>
      <div className="mt-4 flex justify-center">
        <div className="relative w-1/2">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-300 ease-in-out transform origin-center
                         group-hover:scale-110 group-focus-within:scale-110 peer-focus:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search players..."
            className="w-full p-3 pl-10 border rounded-full shadow-sm 
                       transition-transform transform hover:scale-105 focus:scale-105
                       hover:shadow-md focus:shadow-lg
                       duration-300 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
      </div>
    </div>
  );
}
