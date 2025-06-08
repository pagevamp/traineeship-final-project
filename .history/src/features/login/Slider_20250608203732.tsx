"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const images = ["/Slider1.jpg", "/Slider2.jpg"];

const Slider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000, // 10 seconds
    pauseOnHover: false,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 10,
        }}
      >
        <ul style={{ margin: 0, padding: 0, display: "flex", gap: 10 }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "#CF5406",
          opacity: 0.5,
          cursor: "pointer",
        }}
      />
    ),
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 55,
        left: 49,
        width: 610,
        height: "100vh",
        overflow: "hidden",
        borderRadius: 20,
        zIndex: 1000,
        backgroundColor: "#000", // to see container always
      }}
    >
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx} style={{ height: "100vh" }}>
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              width={610}
              height={900}
              style={{ objectFit: "cover", height: "100vh", width: "610px" }}
              priority
              unoptimized
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
