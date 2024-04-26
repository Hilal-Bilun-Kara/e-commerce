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
    season: "Summer 2020",
  },
  {
    src: Slide1,
    caption: "SUMMER SEASON",
    buttonText: "SHOP NOW",
    description:
      "We know how large objects will act" +
      "," +
      "but things on a small scale.",
    season: "Summer 2020",
    key: 2,
  },
];

function Slide({ src, caption, buttonText, description, season }) {
  return (
    <div className="relative w-full">
      <img src={src} className="w-full" alt="Slider Image" />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
        <p className="text-l font-bold mr-[70%] mt-[5%] mb-[10px]">{season}</p>{" "}
        <h1 className="text-6xl font-bold mr-[40%] ">{caption}</h1>
        <p className="text-m mr-[45%] mt-[10px] whitespace-pre-line">
          {description}
        </p>
        <button className="bg-[#2DC071] font-bold text-white px-8 py-4 rounded mt-[5%] mr-[66%]">
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

  const btn = (index) => {
    setActiveIndex(index);
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
            season={item.season}
            description={item.description}
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
      <div className="flex absolute top-[100vh] left-[44%] gap-3">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => btn(index)}
              className={`bg-white w-20 h-2 ${
                index === activeIndex ? "bg-blue-500" : ""
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
