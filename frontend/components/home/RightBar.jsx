"use client";
import { useState } from "react";
import { FaHashtag, FaTrophy, FaFire, FaUsers } from "react-icons/fa";
import { IoPersonAdd, IoTrendingUp, IoFlash } from "react-icons/io5";
import { MdVerified, MdKeyboardArrowRight } from "react-icons/md";
import { TbActivity } from "react-icons/tb";

const Rightbar = () => {
  const [followedTrends, setFollowedTrends] = useState(new Set());
  const [connectedUsers, setConnectedUsers] = useState(new Set());

  const toggleTrend = (trend) => {
    const newFollowed = new Set(followedTrends);
    if (newFollowed.has(trend)) {
      newFollowed.delete(trend);
    } else {
      newFollowed.add(trend);
    }
    setFollowedTrends(newFollowed);
  };

  const toggleConnect = (userId) => {
    const newConnected = new Set(connectedUsers);
    if (newConnected.has(userId)) {
      newConnected.delete(userId);
    } else {
      newConnected.add(userId);
    }
    setConnectedUsers(newConnected);
  };

  const trends = [
    { hashtag: "Badminton", posts: "2.3k", icon: <FaTrophy />, trend: "up" },
    { hashtag: "10KTraining", posts: "1.8k", icon: <FaFire />, trend: "hot" },
    { hashtag: "EpicSaves", posts: "945", icon: <IoFlash />, trend: "up" },
    { hashtag: "TeamWork", posts: "756", icon: <FaUsers />, trend: "new" },
    { hashtag: "Victory", posts: "623", icon: <FaTrophy />, trend: "up" }
  ];

  const suggestions = [
    { 
      id: 1,
      name: "Alex Burrows", 
      initials: "AB", 
      sport: "Tennis Pro",
      verified: true,
      mutualConnections: 12,
      achievement: "National Champion"
    },
    { 
      id: 2,
      name: "Diana Rodriguez", 
      initials: "DR", 
      sport: "Swimming Coach",
      verified: false,
      mutualConnections: 8,
      achievement: "Olympic Trainer"
    },
    { 
      id: 3,
      name: "Marcus Thompson", 
      initials: "MT", 
      sport: "Basketball",
      verified: true,
      mutualConnections: 15,
      achievement: "College MVP"
    },
    { 
      id: 4,
      name: "Sofia Chen", 
      initials: "SC", 
      sport: "Martial Arts",
      verified: false,
      mutualConnections: 6,
      achievement: "Black Belt"
    }
  ];

  return (
    <div className="w-80 bg-gradient-to-b from-gray-50 to-white p-8 flex flex-col gap-8 border-l border-gray-200">
      
      {/* Trending Section */}
      <div className="bg-white rounded-3xl shadow-lg shadow-gray-900/5 border border-gray-100 overflow-x-hidden overflow-y-auto">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl 
                           flex items-center justify-center">
              <IoTrendingUp className="text-white text-lg" />
            </div>
            <h2 className="text-xl font-light text-gray-900 tracking-wide">Trending Now</h2>
          </div>
          <p className="text-gray-500 text-sm font-light">Popular in sports community</p>
        </div>
        
        <div className="p-2 pt-4 space-y-4">
          {trends.map((trend, i) => (
            <div key={i} className="group hover:bg-gray-50 p-4 rounded-2xl transition-all duration-300">
              <div className="flex flex-col items-start gap-2 justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm
                                  ${trend.trend === 'hot' ? 'bg-red-100 text-red-500' :
                                    trend.trend === 'new' ? 'bg-green-100 text-green-500' :
                                    'bg-blue-100 text-blue-500'}`}>
                    {trend.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <FaHashtag className="text-gray-400 text-sm" />
                      <span className="font-medium text-gray-900">{trend.hashtag}</span>
                      {trend.trend === 'hot' && (
                        <div className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full font-medium">
                          Hot
                        </div>
                      )}
                      {trend.trend === 'new' && (
                        <div className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium">
                          New
                        </div>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm font-light">{trend.posts} posts today</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => toggleTrend(trend.hashtag)}
                  className={`px-4 py-2 rounded-xl font-light text-sm transition-all duration-200
                             ${followedTrends.has(trend.hashtag) 
                               ? 'bg-blue-600 text-white' 
                               : 'text-blue-600 hover:bg-blue-50 border border-blue-200'}`}
                >
                  {followedTrends.has(trend.hashtag) ? 'Following' : 'Follow'}
                </button>
              </div>
            </div>
          ))}
          
          <button className="w-full mt-4 py-3 text-gray-500 hover:text-gray-700 font-light 
                           transition-colors duration-200 flex items-center justify-center gap-2">
            <span>View All Trends</span>
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>

      {/* People Suggestions */}
      <div className="bg-white rounded-3xl shadow-lg shadow-gray-900/5 border border-gray-100 overflow-x-hidden overflow-y-auto">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-800 via-blue-600 to-indigo-400 rounded-2xl 
                           flex items-center justify-center">
              <FaUsers className="text-white text-lg" />
            </div>
            <h2 className="text-xl font-light text-gray-900 tracking-wide">Connect</h2>
          </div>
          <p className="text-gray-500 text-sm font-light">Athletes you might know</p>
        </div>
        
        <div className="p-2 pt-4 space-y-6">
          {suggestions.map((user) => (
            <div key={user.id} className="group hover:bg-gray-50 p-4 rounded-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full 
                                 flex items-center justify-center text-gray-700 font-medium text-lg">
                    {user.initials}
                  </div>
                  {user.verified && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full 
                                   flex items-center justify-center">
                      <MdVerified className="text-white text-xs" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-gray-900 truncate">{user.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm font-light mb-1">{user.sport}</p>
                  <p className="text-gray-500 text-xs font-light">{user.mutualConnections} mutual connections</p>
                  <div className="mt-2">
                    <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full font-medium">
                      {user.achievement}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex gap-3">
                <button 
                  onClick={() => toggleConnect(user.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl 
                             font-light text-sm transition-all duration-200 cursor-pointer
                             ${connectedUsers.has(user.id)
                               ? 'bg-green-100 text-green-700 border border-green-200'
                               : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:transform hover:scale-105'
                             }`}
                >
                  <IoPersonAdd className="text-lg" />
                  <span>{connectedUsers.has(user.id) ? 'Connected' : 'Connect'}</span>
                </button>
                
                <button className="px-4 py-3 rounded-xl border border-gray-200 text-gray-500 
                                 hover:border-gray-300 hover:text-gray-700 transition-all duration-200">
                  View
                </button>
              </div>
            </div>
          ))}
          
          <button className="w-full mt-4 py-3 text-gray-500 hover:text-gray-700 font-light 
                           transition-colors duration-200 flex items-center justify-center gap-2">
            <span>Discover More People</span>
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-3xl shadow-lg shadow-gray-900/5 border border-gray-100 p-8">
      <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-800 to-green-400 rounded-2xl 
                           flex items-center justify-center">
              <TbActivity className="text-white text-lg" />
            </div>
            <h2 className="text-xl font-light text-gray-900 tracking-wide">Your Activity</h2>
          </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-light">Posts this week</span>
            <span className="font-medium text-gray-900">12</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-light">New connections</span>
            <span className="font-medium text-gray-900">5</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-light">Achievements</span>
            <span className="font-medium text-gray-900">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;