"use client";
import { useState } from "react";
import { FiSearch, FiSliders, FiMapPin, FiClock } from "react-icons/fi";
import { FaStar, FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

const flights = [
  {
    id: 1,
    airline: "Emirates",
    from: "Lagos (LOS)",
    to: "Dubai (DXB)",
    date: "2025-02-14",
    duration: "7h 15m",
    price: "₦460,000",
    rating: 4.9,
    image:
      "https://media.istockphoto.com/id/530089923/photo/landing-airplane.webp?a=1&b=1&s=612x612&w=0&k=20&c=1QH3-XCD51wElKVDMQ3b8jAs3jiEkxHiyZlE70KnhoQ=",
  },
  {
    id: 2,
    airline: "Qatar Airways",
    from: "Lagos (LOS)",
    to: "Doha (DOH)",
    date: "2025-02-20",
    duration: "8h 40m",
    price: "₦520,000",
    rating: 4.8,
    image:
      "https://media.istockphoto.com/id/868924070/photo/traffic-at-the-airport.webp?a=1&b=1&s=612x612&w=0&k=20&c=8em-DGtTGz-ecAfNugsfDOFZHePfzsshC46CTaGE6DE=",
  },
  {
    id: 3,
    airline: "British Airways",
    from: "Lagos (LOS)",
    to: "London (LHR)",
    date: "2025-03-02",
    duration: "6h 25m",
    price: "₦650,000",
    rating: 4.7,
    image:
      "https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=PYs9JKctmfYj5VNwSQp5QcxHmaPsEGuYEIMT_rFM3ow=",
  },
  {
    id: 4,
    airline: "Ethiopian Airlines",
    from: "Lagos (LOS)",
    to: "Addis Ababa (ADD)",
    date: "2025-03-15",
    duration: "5h 50m",
    price: "₦350,000",
    rating: 4.5,
    image:
      "https://media.istockphoto.com/id/184347141/photo/white-mid-sized-passenger-jet-airplane.webp?a=1&b=1&s=612x612&w=0&k=20&c=lSuqpTBzdw7HL61wBbf4H1cKFVBRl741wntvEv4XzWc=",
  },
  {
    id: 5,
    airline: "Air France",
    from: "Paris (CDG)",
    to: "New York (JFK)",
    date: "2025-04-10",
    duration: "7h 50m",
    price: "$750",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1565444007614-6b38c78224df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycGxhbmUlMkZmbGlnaHRzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 6,
    airline: "Delta Airlines",
    from: "Atlanta (ATL)",
    to: "Los Angeles (LAX)",
    date: "2025-04-18",
    duration: "4h 30m",
    price: "$280",
    rating: 4.6,
    image:
      "https://media.istockphoto.com/id/955952680/photo/passengers-commercial-airplane-flying-above-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=TMbdjJvrmukBgevdJkO_UyhFkXiYASOGArt_1Zrogj4=",
  },
    {
    id: 7,
    airline: "Nepal Airlines",
    from: "Lagos (LOS)",
    to: "Addis Ababa (ADD)",
    date: "2025-03-15",
    duration: "5h 50m",
    price: "₦350,000",
    rating: 4.5,
    image:
      "https://i0.wp.com/worldairlinenews.com/wp-content/uploads/2015/02/nepal-a320-200-d-axar-9n-akw14tko-xfw-airbuslrw.jpg?ssl=1",
  },
    {
    id: 8,
    airline: "Air France",
    from: "Lagos (LOS)",
    to: "Doha (DOH)",
    date: "2025-02-20",
    duration: "8h 40m",
    price: "₦520,000",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1678944548541-28fd669f5f3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHF1dGFyJTIwYWlyd2F5cyUyMHBsYW5lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  },
];

export default function FlightBookingTouristPage() {
  const [search, setSearch] = useState("");

  const filteredFlights = flights.filter(
    (flight) =>
      flight.airline.toLowerCase().includes(search.toLowerCase()) ||
      flight.from.toLowerCase().includes(search.toLowerCase()) ||
      flight.to.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <p className="text-3xl font-medium">Flight Booking</p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        {/* ===== Header ===== */}
        <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl shadow-sm border-b border-white/40">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">
              ✈️ Find the Best Flight Deals
            </h1>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-72">
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search airline, city or route..."
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
                Found {filteredFlights.length} available flights
              </h2>
              <p className="text-sm text-gray-500">
                Smooth travel options for your next destination.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Economy", "Business", "One-way", "Round Trip"].map(
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

          {/* ===== Flights Grid ===== */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredFlights.map((flight) => (
              <div
                key={flight.id}
                className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={flight.image}
                    alt={flight.airline}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/80 px-2 py-1 rounded-full text-xs font-semibold text-gray-700 shadow">
                    ⭐ {flight.rating}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-700 transition">
                    {flight.airline}
                  </h3>

                  <div className="mt-2 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                      <FaPlaneDeparture className="text-blue-600" />{" "}
                      {flight.from}
                    </p>
                    <p className="flex items-center gap-2 mt-1">
                      <FaPlaneArrival className="text-blue-600" />{" "}
                      {flight.to}
                    </p>
                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    ⏳ {flight.duration} • 🗓 {flight.date}
                  </p>

                  {/* Rating stars */}
                  <div className="flex mt-2 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={`star-${flight.id}-${i}`}
                        className={
                          i < Math.round(flight.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="mt-3 flex justify-between items-center">
                    <p className="text-lg font-bold text-blue-700">
                      {flight.price}
                    </p>

                    <button className="text-sm bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1.5 rounded-full hover:from-blue-700 hover:to-blue-600 transition">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition flex justify-center items-end pb-5">
                  <button className="bg-white text-blue-600 font-medium px-4 py-2 rounded-full shadow hover:bg-blue-50 transition">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty Search State */}
          {filteredFlights.length === 0 && (
            <div className="text-center py-20 text-gray-500 text-lg">
              😢 No flights match your search
            </div>
          )}
        </main>
      </div>
    </>
  );
}
