"use client"
import Image from "next/image";
export default function MobileApp() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-24 bg-[#1b1e1b] text-white relative overflow-hidden rounded">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern-lines.svg')] opacity-10 bg-cover bg-center pointer-events-none"></div>

      {/* Left Section */}
      <div className="z-10 text-left max-w-lg space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Get for <br /> free now!
        </h1>
        <p className="text-gray-300 text-lg">Available on iOS and Android</p>

        <div className="flex gap-4 pt-4">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            <Image src="/apple.svg" alt="App Store" width={24} height={24} />
            App Store
          </button>
          <button className="flex items-center gap-2 border border-gray-400 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
            <Image src="/play.svg" alt="Play Store" width={24} height={24} />
            Play Store
          </button>
        </div>
      </div>

      {/* Right Section - Phone Mockups */}
      <div className="z-10 flex items-center justify-center mt-12 md:mt-0">
        <div className="relative w-[280px] md:w-[340px]">
          <Image
      src="/phones.png"
      alt="Phones"
      width={400}    // add width here (set as needed)
      height={800}   // add height here (set as needed)
    />
         
        </div>
      </div>
    </main>
  );
}
