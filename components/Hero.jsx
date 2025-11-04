"use client";
import Image from "next/image";
import { Calendar, Map, MapPin, Triangle } from "lucide-react";

export default function Hero() {
  const features = [
    {
      icon: <Map className="w-6 h-6 text-white" />,
      title: "Real Maps with tourist guide",
      description:
        "We provide a solution for you to use our application when climbing. Yes, online maps you can use anytime with years of experience tourist guides.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Set An Adventure Schedule",
      description:
        "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion.",
    },
    {
      icon: <Triangle className="w-6 h-6 text-white" />,
      title: "Technology Using Augment Reality",
      description:
        "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Works offline with the latest tech.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Many New Locations Every Month",
      description:
        "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 bg-[url('/contour-lines.svg')] bg-cover opacity-10" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row">
        {/* Left: Mockup image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/phone.png"
            alt="App Mockup"
            width={400}
            height={800}
            className="rounded-3xl shadow-xl"
          />
        </div>

        {/* Right: Feature list */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((f, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="bg-green-500 p-3 rounded-full mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
