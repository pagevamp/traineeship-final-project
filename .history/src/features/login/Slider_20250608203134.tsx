"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const images = ["/Slider1.jpg", "/Slider2.jpg"];

const CustomSlider = () => {
  const settings = {
    dots: true, // show dots
    arrows: false, // hide arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10px",
        }}
      >
        <ul style={{ margin: 0, padding: 0, display: "flex", gap: "10px" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#CF5406", // custom dot color
          opacity: 0.5,
          cursor: "pointer",
        }}
      />
    ),
  };

  return (
    <div className="w-[610px] max-h-screen overflow-hhidden rounded-[20px]">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              width={610}
              height={900}
              style={{ objectFit: "cover", height: "100vh", width: "610px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
