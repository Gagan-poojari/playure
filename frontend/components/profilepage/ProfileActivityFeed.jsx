const activities = [
  "Played a football match at City Arena",
  "Joined a tennis tournament",
  "Reviewed a new sports venue",
];

export default function ProfileActivityFeed() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <ul className="space-y-3">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
          >
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}
