"use client";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { FaDumbbell, FaTrophy, FaUsers, FaHeartbeat } from "react-icons/fa";
import { UserDataContext } from "../context/UserContext";
import { useRouter } from "next/navigation";

const HomePage = () => {
    const { userData } = useContext(UserDataContext)
    const router = useRouter()
    console.log(userData);


    useEffect(() => {
        if (userData == null) return
        if (!userData) {
            router.push("/login")
        }
    }, [userData])

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-white to-[#e8f5e9] p-6">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
            >
                <h1 className="text-5xl font-extrabold text-center leading-tight">
                    <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
                        Welcome to Playure,&nbsp;
                    </span>
                    <span className="inline-block bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500 text-transparent bg-clip-text animate-gradient-slide">
                        {userData?.firstname} {userData?.lastname}
                    </span>
                </h1>

                <p className="mt-4 text-lg text-gray-700">
                    Track. Train. Triumph. All in one place.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-6 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
                >
                    Explore Features
                </motion.button>
            </motion.section>

            {/* Stats */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-12 max-w-4xl mx-auto"
            >
                {[
                    { icon: <FaUsers />, label: "Athletes", value: "10K+" },
                    { icon: <FaTrophy />, label: "Competitions", value: "500+" },
                    { icon: <FaDumbbell />, label: "Coaches", value: "1K+" },
                    { icon: <FaHeartbeat />, label: "Training Sessions", value: "20K+" },
                ].map(({ icon, label, value }) => (
                    <div
                        key={label}
                        className="bg-white/60 backdrop-blur rounded-xl p-6 border border-gray-200 shadow-lg"
                    >
                        <div className="text-3xl text-indigo-600 mb-2">{icon}</div>
                        <h3 className="text-xl font-bold text-gray-800">{value}</h3>
                        <p className="text-sm text-gray-600">{label}</p>
                    </div>
                ))}
            </motion.section>

            {/* Features */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto py-16"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
                    What You Get
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Personal Dashboard",
                            desc: "Monitor your performance, workouts, and progress in real-time.",
                        },
                        {
                            title: "Verified Coaches",
                            desc: "Work with top-tier mentors from every sport.",
                        },
                        {
                            title: "Live Competitions",
                            desc: "Join and track tournaments directly from your dashboard.",
                        },
                        {
                            title: "Smart Analytics",
                            desc: "Get insights into your game with AI-based suggestions.",
                        },
                        {
                            title: "Progress Timeline",
                            desc: "Visual history of your training & achievements.",
                        },
                        {
                            title: "Secure & Fast",
                            desc: "Your data is safe, encrypted, and super-fast.",
                        },
                    ].map(({ title, desc }) => (
                        <motion.div
                            key={title}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/70 p-6 rounded-xl shadow-md border border-gray-200 backdrop-blur transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
                            <p className="text-gray-700 text-sm">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </main>
    );
};

export default HomePage;
