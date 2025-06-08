"use client"


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/Slider1.jpg",
    heading: "Welcome to Arctern",
    subheading: "Your Gateway to Effortless Management.",
    bottomText: "Seamless Collaboration",
    description: "Real-time transport operations. Complete control over FTL, LTL, and PTL."
  },
  {
    image: "/Slider2.jpg",
    heading: "Smarter Logistics, Smarter You",
    subheading: "Empowering businesses with intelligent solutions.",
    bottomText: "Optimized Efficiency",
    description: "From dispatch to delivery — stay in control at every step."
  }
];

const Sliders = () => {
  return (
    <div className="w-[620px] h-screen rounded-[20px] overflow-hidden relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={`Slide ${idx}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-8 text-white">
                <div>
                  <h1 className="text-3xl font-bold">{slide.heading}</h1>
                  <p className="text-lg mt-1">{slide.subheading}</p>
                </div>
                <div className="mb-10">
                  <h2 className="text-2xl font-semibold">{slide.bottomText}</h2>
                  <p className="text-sm">{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination color */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: white;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background-color: #f97316; /* Tailwind orange-500 */
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Sliders;

