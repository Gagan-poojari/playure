const posts = [
  {
    id: 1,
    image: "/images/post1.jpg",
    caption: "Won my first state-level match! 🏆",
  },
  {
    id: 2,
    image: "/images/post2.jpg",
    caption: "Intense practice session with teammates.",
  },
];

export default function ProfilePosts() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="rounded-lg overflow-hidden bg-gray-50">
            <img
              src={post.image}
              alt="Post"
              className="w-full h-48 object-cover"
            />
            <p className="p-3 text-sm text-gray-700">{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
