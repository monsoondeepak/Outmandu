"use client";
import { useState } from "react";
import { FiSearch, FiSliders } from "react-icons/fi";
import { FaStar, FaMoneyBillWave } from "react-icons/fa";

const currencies = [
  {
    id: 1,
    name: "US Dollar",
    code: "USD",
    country: "United States",
    buy: 1480,
    sell: 1505,
    rating: 4.9,
    image: "https://flagsapi.com/US/flat/64.png",
  },
  {
    id: 2,
    name: "Euro",
    code: "EUR",
    country: "European Union",
    buy: 1620,
    sell: 1650,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1585689074349-04ae60e74cc7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 3,
    name: "British Pound",
    code: "GBP",
    country: "United Kingdom",
    buy: 1840,
    sell: 1880,
    rating: 4.7,
    image: "https://flagsapi.com/GB/flat/64.png",
  },
  {
    id: 4,
    name: "Canadian Dollar",
    code: "CAD",
    country: "Canada",
    buy: 1150,
    sell: 1180,
    rating: 4.6,
    image: "https://flagsapi.com/CA/flat/64.png",
  },
  {
    id: 5,
    name: "UAE Dirham",
    code: "AED",
    country: "United Arab Emirates",
    buy: 385,
    sell: 400,
    rating: 4.8,
    image: "https://flagsapi.com/AE/flat/64.png",
  },
  {
    id: 6,
    name: "Indian Rupee",
    code: "INR",
    country: "India",
    buy: 5.6,
    sell: 6.1,
    rating: 4.5,
    image: "https://flagsapi.com/IN/flat/64.png",
  },
  {
    id: 7,
    name: "Chinese Yuan",
    code: "CNY",
    country: "China",
    buy: 200,
    sell: 225,
    rating: 4.6,
    image: "https://flagsapi.com/CN/flat/64.png",
  },
  {
    id: 8,
    name: "Japanese Yen",
    code: "JPY",
    country: "Japan",
    buy: 9.5,
    sell: 10.2,
    rating: 4.7,
    image: "https://flagsapi.com/JP/flat/64.png",
  },
];

export default function MoneyExchangePage() {
  const [search, setSearch] = useState("");

  const filteredCurrencies = currencies.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase()) ||
      c.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <p className="text-3xl font-medium">Money Exchange Rates</p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl shadow-sm border-b border-white/40">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">
              💱 Exchange To Any Currency Easily
            </h1>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Search */}
              <div className="relative w-full sm:w-72">
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search currency or country..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-full border border-gray-200 py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Filter Button */}
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                <FiSliders /> Filters
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-10">
          {/* Title */}
          <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Found {filteredCurrencies.length} currency rates
              </h2>
              <p className="text-sm text-gray-500">
                Check buy & sell rates for international currencies.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Popular", "Asia", "Europe", "America"].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-white shadow-sm hover:bg-blue-100 border border-gray-200 transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Currency Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCurrencies.map((item) => (
              <div
                key={item.id}
                className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition group"
              >
                {/* Image / Flag */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-44 object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/80 px-2 py-1 rounded-full text-xs font-semibold text-gray-700 shadow">
                    ⭐ {item.rating}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-700 transition">
                    {item.name} ({item.code})
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">{item.country}</p>

                  <p className="text-xs text-gray-600 mt-1 flex gap-2">
                    <span>🔵 Buy: <b>{item.buy}</b></span>
                  </p>
                  <p className="text-xs text-gray-600 mt-1 flex gap-2">
                    <span>🟠 Sell: <b>{item.sell}</b></span>
                  </p>

                  {/* Price + CTA */}
                  <div className="mt-3 flex justify-between items-center">
                    <p className="text-lg font-bold text-blue-700">
                      {item.code}
                    </p>

                    <button className="text-sm bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1.5 rounded-full hover:from-blue-700 hover:to-blue-600 transition">
                      Exchange
                    </button>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition flex justify-center items-end pb-5">
                  <button className="bg-white text-blue-600 font-medium px-4 py-2 rounded-full shadow hover:bg-blue-50 transition">
                    Convert Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredCurrencies.length === 0 && (
            <div className="text-center py-20 text-gray-500 text-lg">
              😢 No matching currency found
            </div>
          )}
        </main>
      </div>
    </>
  );
}
