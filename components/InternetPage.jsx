"use client";
import { useState } from "react";
import { FaSimCard, FaStar } from "react-icons/fa";
import { FiSearch, FiSliders, FiMapPin } from "react-icons/fi";

const esimPlans = [
  {
    id: 1,
    name: "Europe Unlimited ESIM",
    country: "Europe (40+ Countries)",
    price: "$25",
    data: "Unlimited Data",
    validity: "15 Days",
    provider: "Airalo",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900",
  },
  {
    id: 2,
    name: "USA Travel ESIM",
    country: "United States",
    price: "$15",
    data: "5GB",
    validity: "10 Days",
    provider: "Holafly",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=900",
  },
  {
    id: 3,
    name: "UK Tourist ESIM",
    country: "United Kingdom",
    price: "$12",
    data: "3GB",
    validity: "7 Days",
    provider: "Nomad",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900",
  },
  {
    id: 4,
    name: "Asia Regional ESIM",
    country: "Asia (10 Countries)",
    price: "$18",
    data: "10GB",
    validity: "15 Days",
    provider: "Airalo",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=900",
  },
  {
    id: 5,
    name: "Dubai Tourist ESIM",
    country: "UAE",
    price: "$10",
    data: "3GB",
    validity: "7 Days",
    provider: "Virgin Mobile",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900",
  },
  {
    id: 6,
    name: "Nigeria ESIM Travel Pack",
    country: "Nigeria",
    price: "₦6,000",
    data: "2GB",
    validity: "7 Days",
    provider: "MTN",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900",
  },
  {
    id: 7,
    name: "Asia Regional ESIM",
    country: "Asia (10 Countries)",
    price: "$18",
    data: "10GB",
    validity: "15 Days",
    provider: "Airalo",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=900",
  },
   {
    id: 8,
    name: "USA Travel ESIM",
    country: "United States",
    price: "$15",
    data: "5GB",
    validity: "10 Days",
    provider: "Holafly",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=900",
  },
];

export default function ESimTouristPage() {
  const [search, setSearch] = useState("");

  const filteredPlans = esimPlans.filter((plan) =>
    plan.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <p className="text-3xl font-medium">Tourist eSIM Plans</p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        {/* ===== Sticky Header ===== */}
        <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl shadow-sm border-b border-white/40">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">
              🌍 Stay Connected Everywhere
            </h1>

            {/* Search & Filters */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-72">
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search eSIM or region..."
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
          <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Found {filteredPlans.length} eSIM plans for tourists
              </h2>
              <p className="text-sm text-gray-500">
                Fast activation, no physical SIM, instant connectivity.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["Unlimited", "Regional", "Budget", "Short Stay"].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-white shadow-sm hover:bg-blue-100 border border-gray-200 transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* ===== eSIM Plans Grid ===== */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPlans.map((plan, index) => (
              <div
                key={`${plan.id}-${index}`}
                className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-2 py-1 rounded-full text-xs font-semibold text-gray-700 shadow">
                    ⭐ {plan.rating.toFixed(1)}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-700 transition">
                    {plan.name}
                  </h3>

                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <FiMapPin className="mr-1 text-blue-600" />
                    {plan.country}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">📡 {plan.provider}</p>

                  <p className="text-xs text-gray-500 mt-1">
                    📦 {plan.data} • ⏳ {plan.validity}
                  </p>

                  {/* Rating Stars */}
                  <div className="flex mt-2 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={`star-${plan.id}-${i}`}
                        className={
                          i < Math.round(plan.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="mt-3 flex justify-between items-center">
                    <p className="text-lg font-bold text-blue-700">
                      {plan.price}
                    </p>
                    <button className="text-sm bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1.5 rounded-full hover:from-blue-700 hover:to-blue-600 transition">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition rounded-2xl flex justify-center items-end pb-5">
                  <button className="bg-white text-blue-600 font-medium px-4 py-2 rounded-full shadow hover:bg-blue-50 transition">
                    Buy eSIM
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredPlans.length === 0 && (
            <div className="text-center py-20 text-gray-500 text-lg">
              😢 No eSIM plans found
            </div>
          )}
        </main>
      </div>
    </>
  );
}
