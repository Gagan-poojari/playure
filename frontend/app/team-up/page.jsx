// app/findfriends/page.jsx
import FriendsHeader from "@/components/find-friends/FriendsHeader";
import SuggestedList from "@/components/find-friends/SuggestedList";

export default function FindFriendsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-10">
      <FriendsHeader />
      <SuggestedList />
    </div>
  );
}
