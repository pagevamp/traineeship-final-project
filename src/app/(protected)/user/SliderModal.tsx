"use client";
import { useState } from "react";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";

const SliderModal = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleContinue = () => {
    if (activeSlide < 1) {
      setActiveSlide((prev) => prev + 1);
    }
    // else, you can handle final submission or closing modal here
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="overflow-hidden">
        {activeSlide === 0 && <SlideOne onContinue={handleContinue} />}
        {activeSlide === 1 && <SlideTwo onContinue={handleContinue} />}
      </div>

      {/* Dots navigation below continue button */}
      <div className="flex justify-center gap-2 mt-[13px] mb-[20px]">
        {[0, 1].map((idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              activeSlide === idx ? "bg-[#E06518]" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderModal;
