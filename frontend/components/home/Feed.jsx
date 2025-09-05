"use client";
import { useState } from "react";
import { FaPhotoVideo, FaHeart, FaComment, FaShare } from "react-icons/fa";
import { IoSend, IoImage, IoVideocam, IoTrophy } from "react-icons/io5";
import { MdVerified, MdMoreHoriz } from "react-icons/md";

const Feed = () => {
  const [postText, setPostText] = useState("");
  const [likedPosts, setLikedPosts] = useState(new Set());

  const toggleLike = (postId) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
    }
    setLikedPosts(newLiked);
  };

  const posts = [
    {
      id: 1,
      author: "PV Sindhu",
      verified: true,
      timeAgo: "2h",
      content: "Won the international badminton finals! Proud moment! 🏆 Sharing a few shots from the finals. Thanks to my coach and team for believing in me.",
      image: "https://assets.telegraphindia.com/telegraph/b1feb128-cc26-42b2-bcdf-f971070bdc2a.jpg",
      likes: 127,
      comments: 23,
      achievement: "International Champion"
    },
    {
      id: 2,
      author: "Marcus Rodriguez",
      verified: false,
      timeAgo: "5h",
      content: "Finally completed my first marathon! 42.2km of pure determination. The feeling crossing that finish line was indescribable. Next goal: sub 4 hours! 💪",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      likes: 89,
      comments: 12,
      achievement: "Marathon Finisher"
    },
    {
      id: 3,
      author: "Sarah Chen",
      verified: true,
      timeAgo: "1d",
      content: "Teaching kids the fundamentals of tennis today. Their enthusiasm and quick learning never fails to inspire me. Future champions in the making! 🎾",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&h=400&fit=crop",
      likes: 156,
      comments: 31,
      achievement: "Youth Coach"
    }
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-gray-50 to-white p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        
        {/* Elegant Share Box */}
        <div className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-900/5 border border-gray-100 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-800 via-blue-600 to-indigo-400 
                           rounded-full flex items-center justify-center text-white font-medium">
              JD
            </div>
            <div className="flex-1">
              <textarea
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="Share your latest achievement or moment..."
                className="w-full p-4 rounded-2xl bg-gray-50 border-0 outline-none resize-none
                         font-light text-gray-700 placeholder-gray-400 focus:bg-white
                         focus:shadow-md transition-all duration-300"
                rows="3"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex gap-6">
              <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 
                               font-light transition-colors duration-200">
                <IoImage className="text-xl" />
                <span className="text-sm">Photo</span>
              </button>
              <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 
                               font-light transition-colors duration-200">
                <IoVideocam className="text-xl" />
                <span className="text-sm">Video</span>
              </button>
              <button className="flex items-center gap-2 text-gray-500 hover:text-orange-600 
                               font-light transition-colors duration-200">
                <IoTrophy className="text-xl" />
                <span className="text-sm">Achievement</span>
              </button>
            </div>
            
            <button className={`flex items-center gap-3 px-8 py-3 rounded-2xl font-light
                               transition-all duration-300 hover:scale-105 active:scale-95
                               ${postText.trim() 
                                 ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25' 
                                 : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                               }`}
                      disabled={!postText.trim()}>
              <span>Share</span>
              <IoSend className="text-lg" />
            </button>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl shadow-lg shadow-gray-900/5 
                                            border border-gray-100 overflow-hidden hover:shadow-xl 
                                            hover:shadow-gray-900/10 transition-all duration-300">
              
              {/* Post Header */}
              <div className="p-8 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 
                                   rounded-full flex items-center justify-center text-gray-700 
                                   font-medium text-lg">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900 text-lg">{post.author}</h3>
                        {post.verified && (
                          <MdVerified className="text-blue-500 text-lg" />
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span>{post.timeAgo} ago</span>
                        {post.achievement && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <IoTrophy className="text-orange-500" />
                              {post.achievement}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <button className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-200">
                    <MdMoreHoriz className="text-gray-500 text-xl" />
                  </button>
                </div>

                {/* Post Content */}
                <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                  {post.content}
                </p>
              </div>

              {/* Post Image */}
              <div className="px-8 mb-6">
                <img
                  src={post.image}
                  alt="Post content"
                  className="w-full rounded-2xl shadow-md"
                />
              </div>

              {/* Post Actions */}
              <div className="px-8 pb-8">
                <div className="flex items-center justify-between py-4 border-t border-gray-100">
                  <div className="flex items-center gap-8">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-2 font-light transition-all duration-200
                                 ${likedPosts.has(post.id) 
                                   ? 'text-red-500' 
                                   : 'text-gray-500 hover:text-red-500'
                                 }`}
                    >
                      <FaHeart className={`text-lg transition-transform duration-200 
                                         ${likedPosts.has(post.id) ? 'scale-110' : ''}`} />
                      <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                    </button>

                    <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 
                                     font-light transition-colors duration-200">
                      <FaComment className="text-lg" />
                      <span>{post.comments}</span>
                    </button>

                    <button className="flex items-center gap-2 text-gray-500 hover:text-green-500 
                                     font-light transition-colors duration-200">
                      <FaShare className="text-lg" />
                      <span>Share</span>
                    </button>
                  </div>

                  <button className="px-6 py-2 rounded-xl border border-gray-200 text-gray-600 
                                   hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50
                                   font-light transition-all duration-200">
                    Connect
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 rounded-2xl border border-gray-200 text-gray-600 
                           hover:border-gray-300 hover:shadow-md font-light
                           transition-all duration-300 hover:scale-105">
            Load More Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feed;