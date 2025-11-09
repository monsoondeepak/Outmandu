"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiMapPin, FiSearch, FiSliders } from "react-icons/fi";

const hotels = [
  {
    id: 1,
    name: "Elysium Luxury Suites",
    location: "Victoria Island, Lagos",
    price: "₦185,000 / night",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000",
  },
  {
    id: 2,
    name: "Azure Oceanfront Hotel",
    location: "Lekki Phase 1, Lagos",
    price: "₦130,000 / night",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000",
  },
  {
    id: 3,
    name: "Corinthian Grand Resort",
    location: "Ikoyi, Lagos",
    price: "₦220,000 / night",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000",
  },
  {
    id: 4,
    name: "Vista Royale Hotel",
    location: "Ikeja, Lagos",
    price: "₦95,000 / night",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 5,
    name: "Palazzo Marina",
    location: "Lekki, Lagos",
    price: "₦170,000 / night",
    rating: 4.7,
    image: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 6,
    name: "Aurora Sky Hotel",
    location: "Ikate, Lagos",
    price: "₦155,000 / night",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
   {
    id: 7,
    name: "Taj Mahal Palace",
    location: "Mumbai, India",
    price: "$115 / night",
    rating: 4.6,
    image: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.webp?a=1&b=1&s=612x612&w=0&k=20&c=tcXN-KeAjvBupZOdfn9XroaWYuOfigRqw7nT1lZTvGM=",
  },
   {
    id: 8,
    name: "The Ritz Paris",
    location: "New York City, USA",
    price: "$155 / night",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  
];

export default function HotelExplorePage() {
  const [search, setSearch] = useState("");
  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
        <>
         <div className="flex flex-col items-center mt-10">
        <p className="text-3xl font-medium">Featured Hotel</p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>
        
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* ===== Header Section ===== */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/70 shadow-sm border-b border-white/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 tracking-tight">
            ✨ Find Your Perfect Stay
          </h1>

          {/* Search & Filter Bar */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-72">
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search hotels or city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-gray-200 py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              <FiSliders /> Filters
            </button>
          </div>
        </div>
      </header>

      {/* ===== Main Content ===== */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Header Info */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Found {filteredHotels.length} results near{" "}
              <span className="text-blue-700 font-bold">Lagos, Nigeria</span>
            </h2>
            <p className="text-sm text-gray-500">
              Discover premium hotels designed for luxury and comfort.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["Luxury", "Spa & Wellness", "Apartments", "Pet Friendly"].map(
              (tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-white shadow-sm hover:bg-blue-100 border border-gray-200 transition"
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>

        {/* ===== Hotel Cards Grid ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredHotels.map((hotel, index) => (
            <div
              key={`${hotel.id}-${index}`} // ✅ Unique key prevents duplicates
              className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition group"
            >
              {/* Hotel Image */}
              <div className="relative overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-2 py-1 rounded-full text-xs font-semibold text-gray-700 shadow">
                  ⭐ {hotel.rating.toFixed(1)}
                </div>
              </div>

              {/* Hotel Details */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-700 transition">
                  {hotel.name}
                </h3>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <FiMapPin className="mr-1 text-blue-600" />
                  {hotel.location}
                </div>

                {/* Rating Stars */}
                <div className="flex mt-2 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={`star-${hotel.id}-${i}`}
                      className={`${
                        i < Math.round(hotel.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="mt-3 flex justify-between items-center">
                  <p className="text-lg font-bold text-blue-700">
                    {hotel.price}
                  </p>
                  <button className="text-sm bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1.5 rounded-full hover:from-blue-700 hover:to-blue-600 transition">
                    View Details
                  </button>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition rounded-2xl flex justify-center items-end pb-5">
                <button className="bg-white text-blue-600 font-medium px-4 py-2 rounded-full shadow hover:bg-blue-50 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredHotels.length === 0 && (
          <div className="text-center py-20 text-gray-500 text-lg">
            😢 No hotels found matching your search
          </div>
        )}
      </main>
    </div>
          </>
  );
}
