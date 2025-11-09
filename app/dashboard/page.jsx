"use client";

import { useState, useRef, useEffect } from "react";
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { signOut } from "next-auth/react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import MobileApp from "@/components/MobileApp";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function DashboardUI() {
      const { isSeller, router } = useAppContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Mock user data (replace with real database data later)
  const user = { name: "John Doe" };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
    
    
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-900
                    bg-white/20 backdrop-blur-md sticky top-0 z-50">
      {/* Logo */}
      <h2
        onClick={() => router.push("/")}
        className="font-bold text-2xl cursor-pointer"
      >
        <span className="text-orange-600">Out</span>mandu.
      </h2>

      {/* Desktop Links */}
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-500 transition">Home</Link>
        <Link href="/destination" className="hover:text-gray-500 transition">Destination</Link>
        <Link href="/hotel" className="hover:text-gray-500 transition">Hotel</Link>
        <Link href="/car" className="hover:text-gray-500 transition">Car</Link>
        <Link href="/internet" className="hover:text-gray-500 transition">Internet</Link>
        <Link href="/exchange" className="hover:text-gray-500 transition">Exchange</Link>

        {isSeller && (
          <button
          onClick={() => router.push("/seller")}
          className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      

      {/* Desktop Search & Account */}
      <ul className="hidden md:flex items-center gap-4">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
       
      <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-8 h-8 bg-indigo-600 text-white font-bold flex items-center justify-center rounded-full text-xl focus:outline-none hover:bg-indigo-700 transition"
            >
            {user.name[0].toUpperCase()}
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
              <button
                onClick={() => alert("Manage Account clicked")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                Manage Account
              </button>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>

      </ul>

      
     
    </nav>
     <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <HomeProducts />
        <FeaturedProduct />
        <Banner />
        <Hero />
        <MobileApp />
        <NewsLetter />
      </div>
      <Footer />
                </>
  );
}
