import ProfileHeader from "@/components/profilepage/ProfileHeader";
import ProfileStats from "@/components/profilepage/ProfileStats";
import ProfileAbout from "@/components/profilepage/ProfileAbout";
import ProfileInterests from "@/components/profilepage/ProfileInterests";
import ProfileFriends from "@/components/profilepage/ProfileFriends";
import ProfileAchievements from "@/components/profilepage/ProfileAchievements";
import ProfilePosts from "@/components/profilepage/ProfilePosts";
import ProfileActivityFeed from "@/components/profilepage/ProfileActivityFeed";


export default function ProfilePage() {
  return (
    <div className="p-6 bg-gradient-to-r from-pink-500 to-blue-500 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Full-width Header */}
        <ProfileHeader />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            <ProfileAbout />
            <ProfileInterests />
            <ProfileFriends />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            <ProfileStats />
            <ProfileAchievements />
            <ProfilePosts />
            <ProfileActivityFeed />
          </div>
        </div>
      </div>
    </div>
  );
}
