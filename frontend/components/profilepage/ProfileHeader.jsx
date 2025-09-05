export default function ProfileHeader() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6 text-gray-800">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src="/images/profile-pic.jpg" // Replace with your image path
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-blue-500"/>
      </div>

      {/* Profile Info */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl font-bold">John Doe</h1>
        <p className="text-sm text-gray-500">Professional Badminton Player</p>
        <p className="text-sm text-gray-400">Bangalore, India</p>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4 justify-center md:justify-start">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Follow
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
