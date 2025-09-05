// components/findfriends/SuggestedList.jsx
import FriendCard from "./FriendCard";

export default function SuggestedList() {
  const friends = [
    {
      name: "Rohit Sharma",
      username: "rohitplaymaker",
      bio: "Football enthusiast & weekend striker. Love organizing local matches and analyzing game tactics.",
      mutualFriends: 5,
      isFollowing: false,
      avatar: "/avatars/user1.png",
    },
    {
      name: "Arjun Verma",
      username: "arjun_cricketer",
      bio: "All-rounder in cricket and die-hard sports fan. Training young players at community academy.",
      mutualFriends: 3,
      isFollowing: false,
      avatar: "/avatars/user2.png",
    },
    {
      name: "Maya Patel",
      username: "mayap",
      bio: "Passionate marathon runner and fitness blogger. Sharing running tips and healthy lifestyle hacks.",
      mutualFriends: 8,
      isFollowing: false,
      avatar: "/avatars/user3.png",
    },
    {
      name: "Sanya Kapoor",
      username: "sanya.swims",
      bio: "Competitive swimmer and yoga practitioner. Always up for a challenge in the pool or on the mat.",
      mutualFriends: 2,
      isFollowing: true,
      avatar: "/avatars/user4.png",
    },
  ];

  return (
    <section className="px-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span className="bg-purple-100 text-purple-700 p-2 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 10a4 4 0 110-8 4 4 0 010 8zm0 2c-3.333 0-6 1.333-6 4v1h12v-1c0-2.667-2.667-4-6-4z" /></svg>
          </span>
          Suggested for You
        </h2>
        <a href="#" className="text-purple-600 text-sm">See All</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map((friend, index) => (
          <FriendCard key={index} {...friend} />
        ))}
      </div>
    </section>
  );
}
