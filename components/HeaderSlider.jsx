"use client";
import React, { useState, useEffect, useRef } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Experience Pure Travel - Your Perfect Destination Awaits!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Explore now",
      buttonText2: "Find more",
      imgSrc: assets.top1,
    },
    {
      id: 2,
      title: "Next-Level Tour Experience Starts Here - Discover Your Destiny Today!",
      offer: "Hurry up only few lefts!",
      buttonText1: "Visit Now",
      buttonText2: "Explore Deals",
      imgSrc: assets.top2,
    },
    {
      id: 3,
      title: "Generation Meets Elegance - African tribe is Here for you!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Explore Now",
      buttonText2: "Learn More",
      imgSrc: assets.top3,
    },
    {
       id: 4,
      title: "Taj Mahal – Where Love Lives Forever - Waiting for someone of your love.",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Visit Now",
      buttonText2: "Learn More",
      imgSrc: assets.top4,
    },
       {
       id: 5,
      title: "Peace Meets Elegance - Lumbini – Where Enlightenment Began!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Explore Now",
      buttonText2: "Learn More",
      imgSrc: assets.top5,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused, sliderData.length]);

  // Mouse drag / swipe
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDown = false;
    let startX = 0;

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX;
      setIsPaused(true);
      slider.classList.add("cursor-grabbing");
    };

    const handleMouseUp = (e) => {
      if (!isDown) return;
      isDown = false;
      slider.classList.remove("cursor-grabbing");

      const diff = e.pageX - startX;
      const threshold = 50;
      if (diff > threshold) {
        setCurrentSlide((prev) =>
          prev === 0 ? sliderData.length - 1 : prev - 1
        );
      } else if (diff < -threshold) {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
      }
      setIsPaused(false);
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
      setIsPaused(false);
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [sliderData.length]);

  const handleSlideChange = (index) => setCurrentSlide(index);

  return (
    <div
      className="overflow-hidden relative w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={sliderRef}
        className="flex transition-transform duration-700 ease-in-out cursor-grab"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide) => (
          <div
            key={slide.id}
            className="relative flex items-center justify-start min-w-full h-[450px] md:h-[550px] mt-10 rounded-xl overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={slide.imgSrc}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />

            {/* White Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent"></div>

            {/* Optional Light Tint */}
            <div className="absolute inset-0 bg-[#E6E9F2]/40 mix-blend-multiply"></div>

            {/* Content */}
            <div className="relative z-10 md:pl-16 px-6 max-w-xl">
              <p className="text-orange-600 pb-2 font-medium">{slide.offer}</p>
              <h1 className="md:text-[40px] md:leading-[48px] text-2xl font-semibold text-gray-900">
                {slide.title}
              </h1>
              <div className="flex items-center mt-6 gap-4">
                <button className="md:px-10 px-7 md:py-2.5 py-2 bg-orange-600 rounded-full text-white font-medium">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-2 px-6 py-2.5 font-medium text-gray-800">
                  {slide.buttonText2}
                  <Image
                    className="group-hover:translate-x-1 transition"
                    src={assets.arrow_icon}
                    alt="arrow_icon"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition ${
              currentSlide === index ? "bg-orange-600" : "bg-gray-500/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
