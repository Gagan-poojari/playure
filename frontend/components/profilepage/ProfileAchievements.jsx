const achievements = [
  { title: "Top Scorer", icon: "🏆" },
  { title: "MVP 2025", icon: "⭐" },
  { title: "Team Captain", icon: "👑" },
];

export default function ProfileAchievements() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Achievements</h2>
      <div className="flex gap-4">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-50 rounded-lg p-4 w-24 hover:bg-gray-100 transition"
          >
            <span className="text-3xl">{item.icon}</span>
            <span className="text-sm mt-2 text-gray-600 text-center">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
