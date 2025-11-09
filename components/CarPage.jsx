"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiMapPin, FiSearch, FiSliders } from "react-icons/fi";

const cars = [
  {
    id: 1,
    name: "Toyota Corolla 2022",
    location: "Victoria Island, Lagos",
    price: "₦45,000 / day",
    rating: 4.8,
    type: "Sedan",
    seats: 5,
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900",
  },
  {
    id: 2,
    name: "Mercedes-Benz GLE 350",
    location: "Lekki Phase 1, Lagos",
    price: "₦150,000 / day",
    rating: 4.9,
    type: "SUV",
    seats: 7,
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1615887110697-0819ec23465f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
  },
  {
    id: 3,
    name: "Honda Civic 2021",
    location: "Ikeja, Lagos",
    price: "₦38,000 / day",
    rating: 4.5,
    type: "Sedan",
    seats: 5,
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
  },
  {
    id: 4,
    name: "Range Rover Sport 2020",
    location: "Ikoyi, Lagos",
    price: "₦180,000 / day",
    rating: 5.0,
    type: "Luxury SUV",
    seats: 7,
    transmission: "Automatic",
    image: "https://media.istockphoto.com/id/1314155790/photo/cars-in-the-parking-lot.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wf5lVZFiNuwzRJnmJFqjxwn69FP5D6tQaKouCh-u_rM=",
  },
  {
    id: 5,
    name: "Tesla Model 3",
    location: "New York City, USA",
    price: "$120 / day",
    rating: 4.7,
    type: "Electric",
    seats: 5,
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1709159751671-583f98f2258a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8NjEwMTYyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 6,
    name: "BMW M4 Competition",
    location: "Mumbai, India",
    price: "$200 / day",
    rating: 4.9,
    type: "Sports",
    seats: 4,
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1756664825119-acbba9a7bc45?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8NjEwMTYyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 6,
    name: "BMW M4 Competition",
    location: "Mumbai, India",
    price: "$200 / day",
    rating: 4.9,
    type: "Sports",
    seats: 4,
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1756664825476-0b78d1f1b5d0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8NjEwMTYyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 6,
    name: "BMW M4 Competition",
    location: "Mumbai, India",
    price: "$200 / day",
    rating: 4.9,
    type: "Sports",
    seats: 4,
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1678120609593-1e86e6a631b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w2MTAxNjJ8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
];

export default function CarExplorePage() {
  const [search, setSearch] = useState("");

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <p className="text-3xl font-medium">Featured Cars</p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        {/* ===== Header Section ===== */}
        <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/70 shadow-sm border-b border-white/40">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">
              🚗 Find the Perfect Ride
            </h1>

            {/* Search & Filter Bar */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-72">
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search cars or model..."
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
                Found {filteredCars.length} cars available in{" "}
                <span className="text-blue-700 font-bold">Lagos</span>
              </h2>
              <p className="text-sm text-gray-500">
                Premium cars ready for your next adventure.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["SUV", "Electric", "Luxury", "Sports"].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-white shadow-sm hover:bg-blue-100 border border-gray-200 transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* ===== Cars Grid ===== */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCars.map((car, index) => (
              <div
                key={`${car.id}-${index}`}
                className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition group"
              >
                {/* Car Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-2 py-1 rounded-full text-xs font-semibold text-gray-700 shadow">
                    ⭐ {car.rating.toFixed(1)}
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-700 transition">
                    {car.name}
                  </h3>

                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <FiMapPin className="mr-1 text-blue-600" />
                    {car.location}
                  </div>

                  {/* Rating Stars */}
                  <div className="flex mt-2 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={`star-${car.id}-${i}`}
                        className={
                          i < Math.round(car.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>

                  {/* Car Specs */}
                  <p className="text-xs text-gray-500 mt-1">
                    🚘 {car.type} • {car.seats} Seats • {car.transmission}
                  </p>

                  {/* Price + CTA */}
                  <div className="mt-3 flex justify-between items-center">
                    <p className="text-lg font-bold text-blue-700">
                      {car.price}
                    </p>
                    <button className="text-sm bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1.5 rounded-full hover:from-blue-700 hover:to-blue-600 transition">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition rounded-2xl flex justify-center items-end pb-5">
                  <button className="bg-white text-blue-600 font-medium px-4 py-2 rounded-full shadow hover:bg-blue-50 transition">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredCars.length === 0 && (
            <div className="text-center py-20 text-gray-500 text-lg">
              😢 No cars found matching your search
            </div>
          )}
        </main>
      </div>
    </>
  );
}
