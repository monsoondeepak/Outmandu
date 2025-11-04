"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { SignedIn, SignedOut, useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router } = useAppContext();
  const { openSignIn } = useClerk();

  return (
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
        <SignedOut>
          <button
            onClick={() => openSignIn({})}
            className="flex items-center gap-2 hover:text-gray-900 transition"
          >
            <Image src={assets.user_icon} alt="user icon" />
            {/* Only show "Account" on md and larger */}
            <span className="hidden md:inline">Account</span>
          </button>
        </SignedOut>
        <SignedIn>
  <UserButton afterSignOutUrl="/">
    <UserButton.MenuItems>
      <UserButton.Link
        href="/cart"
        label="My Cart"
        labelIcon="🏖️"
      />
      <UserButton.Link
        href="/orders"
        label="My Orders"
        labelIcon="✈️"
      />
    </UserButton.MenuItems>
  </UserButton>
</SignedIn>

      </ul>

      {/* Mobile User Icon */}
      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller
          </button>
        )}

        {/* Only show user icon without "Account" */}
        <SignedOut>
          <button
            onClick={() => openSignIn({})}
            className="hover:text-gray-900 transition"
          >
            <Image src={assets.user_icon} alt="user icon" className="w-6 h-6" />
          </button>
        </SignedOut>

         <SignedIn>
  <UserButton afterSignOutUrl="/">
    <UserButton.MenuItems>
       <UserButton.Link
        href="/"
        label="Home"
        labelIcon="🏠"
      />
         <UserButton.Link
        href="/destination"
        label="My Destination"
        labelIcon="🗺️"
      />
      <UserButton.Link
        href="/hotel"
        label="My Hotel"
        labelIcon="🏨"
      />
      <UserButton.Link
        href="/cart"
        label="My Cart"
        labelIcon="🏖️"
      />
      <UserButton.Link
        href="/orders"
        label="My Orders"
        labelIcon="✈️"
      />
    </UserButton.MenuItems>
  </UserButton>
</SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
