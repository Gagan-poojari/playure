import React from "react";
import { Gamepad2 } from "lucide-react";
import GameSessionCard from "./GameSessionCard";
const EventHeader = ({ setDisplay }) => {
  return (
    <div className="bg-[#0f172a] font-sans">
      {" "}
      <div className="h-20 w-full  bg-indigo-900  p-[2px] flex justify-between items-center">
        <div className="flex bg-indigo-900 rounded-[5px]">
          <Gamepad2 className=" h-15 w-13 text-white" />
          <h1 className="text-3xl p-3 font bg-gradient-to-r from-red-600 to-blue-600 via-white background bg-clip-text text-transparent">Game Buddies</h1>
        </div>
        <button
          onClick={(e) => setDisplay(true)}
          className='text-amber-50 mr-7 font-semibold font-mono bg-sky-500 h-12 w-35 text-2xl rounded-[5px] hover:bg-sky-600 transition duration-300 ease-in" hover:scale-125  hover:shadow-xl '
        >
          Add Event
        </button>
      </div>
      <div className="grid grid-cols-2 gap-x-4.5 gap-y-10 relative top-10 m-4">
      <GameSessionCard/>
      <GameSessionCard/>
      <GameSessionCard/>
      <GameSessionCard/>
      </div>
    </div>
  );
};

export default EventHeader;
