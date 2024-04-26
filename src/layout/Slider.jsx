import React, { useState } from "react";
import Left from "../assets/Left.png";
import Right from "../assets/Right.png";
import Slide1 from "../assets/hero-slide-1.jpg";

const items = [
  {
    src: Slide1,
    caption: "NEW COLLECTİON",
    buttonText: "SHOP NOW",
    description:
      "We know how large objects will act" +
      "," +
      "but things on a small scale.",
    key: 1,
  },
  {
    src: Slide1,
    caption: "Slide 2 Caption",
    buttonText: "SHOP NOW",
    description: "Description for slide 2.",
    key: 2,
  },
  {
    src: Slide1,
    caption: "Slide 3 Caption",
    description: "Description for slide 3.",
    key: 3,
  },
];

function Slide({ src, caption, buttonText, description }) {
  return (
    <div className="relative w-full">
      <img src={src} className="w-full" alt="Slider Image" />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold mr-[32%] mt-[10%]">{caption}</h1>
        <div className="text-5xl text-white font-bold mr-[32%] mt-[10%]">
          <h4>{description}</h4>
        </div>
        <button className="bg-[#2DC071] font-bold text-white px-8 py-4 rounded mt-[10%] mr-[50%]">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    const nextIndex = (activeIndex + 1) % items.length;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = (activeIndex - 1 + items.length) % items.length;
    setActiveIndex(nextIndex);
  };

  return (
    <div className="relative">
      {items.map((item, index) => (
        <div
          key={index}
          className={`carousel-item ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 ease-in-out absolute top-0 left-0 w-full`}
        >
          <Slide
            src={item.src}
            caption={item.caption}
            buttonText={item.buttonText}
          />
        </div>
      ))}
      <button
        className="absolute top-80 left-[70px] transform -translate-y-1/2 text-white p-2 rounded-full"
        onClick={previous}
      >
        <img src={Left} alt="Left Arrow" />
      </button>
      <button
        className="absolute top-80 right-[70px] transform -translate-y-1/2  text-white p-2 rounded-full"
        onClick={next}
      >
        <img src={Right} alt="Right Arrow" />
      </button>
    </div>
  );
}

export default Slider;
