"use client";
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaUsers, FaShoppingCart, FaTrophy } from "react-icons/fa";
import { MdGroupAdd, MdNotifications, MdSettings } from "react-icons/md";

const navItems = [
    { label: "Home", icon: <FaHome />, count: null, href: "/" },
    { label: "Collaborate", icon: <FaUsers />, count: "12", href: "/collaborate" },
    { label: "Shopping", icon: <FaShoppingCart />, count: null, href: "/shop" },
    { label: "Competitions", icon: <FaTrophy />, count: "3", href: "/competitions" },
    { label: "Team Up", icon: <MdGroupAdd />, count: null, href: "/team-up" },
];

const LeftSidebar = () => {
    const [activeItem, setActiveItem] = useState(0);

    return (
        <div className="w-80 h-screen bg-white border-r border-gray-200 p-8 flex flex-col shadow-sm">

            {/* Logo */}
            <div className="mb-5">
                <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center rotate-3 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 shadow-md shadow-blue-200/40">
                        <span className="text-white font-light text-xl -rotate-3">P</span>
                    </div>
                    <h1 className="text-3xl font-light text-gray-900 tracking-wide">Playure</h1>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2 mb-8">
                {navItems.map((item, i) => (
                    <Link href={item.href} key={i}>
                        <button
                            key={i}
                            onClick={() => setActiveItem(i)}
                            className={`flex items-center gap-5 px-6 py-4 rounded-xl text-left
                       transition-all duration-300 hover:bg-gray-50 group
                       ${activeItem === i ? 'bg-gray-100 border-l-4 border-gray-900' : ''}`}
                        >
                            <div className={`text-xl transition-colors duration-300
                           ${activeItem === i ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'}`}>
                                {item.icon}
                            </div>

                            <span className={`font-light text-base tracking-wide transition-colors duration-300
                             ${activeItem === i ? 'text-gray-900 font-normal' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                {item.label}
                            </span>

                            {item.count && (
                                <div className="ml-auto px-3 py-1 rounded-full text-xs bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 text-white">
                                    {item.count}
                                </div>
                            )}
                        </button>
                    </Link>
                ))}
            </nav>

            {/* Settings */}
            <div className="mb-8">
                <h3 className="text-gray-600 text-xs font-light mb-6 uppercase tracking-widest px-6">
                    Preferences
                </h3>
                <div className="flex gap-4 px-6">
                    <button className="flex-1 p-4 rounded-xl border border-gray-200 hover:border-gray-300 
                           hover:shadow-md transition-all duration-300 bg-gray-50">
                        <MdNotifications className="text-gray-500 hover:text-gray-700 mx-auto text-lg" />
                    </button>
                    <button className="flex-1 p-4 rounded-xl border border-gray-200 hover:border-gray-300 
                           hover:shadow-md transition-all duration-300 bg-gray-50">
                        <MdSettings className="text-gray-500 hover:text-gray-700 mx-auto text-lg" />
                    </button>
                </div>
            </div>

            {/* CTA */}
            <div className="mt-4">
                <button className="min-w-full py-5 px-4 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 text-white font-light text-base 
                         rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                    <div className="flex items-center justify-center gap-2 ">
                        <div className="p-2 w-10 rounded-xl bg-white/40 flex items-center justify-center text-lg">
                            +
                        </div>
                        <span>Create New Experience</span>
                    </div>
                </button>

                {/* User Profile */}
                {/* <div className="mt-8 flex items-center gap-4 p-4 rounded-2xl border border-gray-200 
                       bg-gray-50 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center 
                         text-gray-700 font-light text-lg">
                        JD
                    </div>
                    <div className="flex-1">
                        <p className="text-gray-900 font-light text-base">John Doe</p>
                        <p className="text-gray-500 text-sm font-light">Premium Member</p>
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div> */}
            </div>
        </div>
    );
};

export default LeftSidebar;