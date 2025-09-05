const friends = [
  { name: "Ravi", img: "/images/friend1.jpg" },
  { name: "Anita", img: "/images/friend2.jpg" },
  { name: "Kiran", img: "/images/friend3.jpg" },
];

export default function ProfileFriends() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Friends</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {friends.map((friend, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-20"
          >
            <img
              src={friend.img}
              alt={friend.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <span className="text-xs mt-2">{friend.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
