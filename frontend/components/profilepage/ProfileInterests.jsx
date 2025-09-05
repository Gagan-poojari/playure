const interests = ["Badminton", "Fitness", "Table Tennis", "Running", "Yoga"];

export default function ProfileInterests() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Interests</h2>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
          >
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
}
