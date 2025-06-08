"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const images = ["/Slider1.jpg", "/Slider2.jpg"];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="relative"
      style={{
        height: "100vh",
        maxHeight: "100vh",
        width: "610px",
        overflow: "hidden",
      }}
    >
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: index === currentIndex ? 10 : 0 }}
          width={}
        />
      ))}
    </div>
  );
};

export default Slider;
