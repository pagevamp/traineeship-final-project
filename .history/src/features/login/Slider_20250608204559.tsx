import React, { useEffect, useState } from "react";

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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000); // 10 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-[620px] h-screen rounded-[20px] overflow-hidden relative">
      <img
        src={slides[current].image}
        alt="Slider"
        className="w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-8 text-white">
        <div>
          <h1 className="text-3xl font-bold">{slides[current].heading}</h1>
          <p className="text-lg mt-1">{slides[current].subheading}</p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold">{slides[current].bottomText}</h2>
          <p className="text-sm">{slides[current].description}</p>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-orange-500" : "bg-white opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Sliders;
