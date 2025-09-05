// components/findfriends/FriendCard.jsx
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});


export default function FriendCard({ name, username, bio, mutualFriends, isFollowing, avatar }) {
  return (
    <div className={`bg-white ${poppins.className} rounded-2xl shadow-md p-6 flex flex-col items-center text-center w-full 
    transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out`}>
      <img
        src={avatar}
        alt={name}
        className="w-16 h-16 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm">@{username}</p>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">{bio}</p>
      <p className="text-purple-600 text-xs mt-2">{mutualFriends} mutual friends</p>
      <button
        className={`mt-4 px-4 py-2 rounded-full text-sm font-medium transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out
                  ${isFollowing ? "bg-green-500 text-white" : "bg-purple-500 text-white"}`}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
}
