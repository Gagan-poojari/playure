const stats = [
  { label: "Connections", value: 120 },
  { label: "Social Score", value: 85 },
  { label: "Matches", value: 34 },
  { label: "Win Rate", value: "76%" },
  { label: "Avg Points", value: 24 },
  { label: "Active Days", value: 58 },
];

export default function ProfileStats() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Statistics</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition"
          >
            <span className="text-2xl font-bold text-blue-600">{stat.value}</span>
            <span className="text-sm text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
