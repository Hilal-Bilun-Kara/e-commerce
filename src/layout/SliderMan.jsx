import React, { useState } from "react";
import Left from "../assets/Left.png";
import Right from "../assets/Right.png";
import Slide1 from "../assets/home/heroMan/shop-hero-2-product-slide-2.jpg";
import heroman from "../assets/home/heroMan/heroman.png";

const items = [
  {
    src: Slide1,
    image: heroman,
    caption: "Vita Classic Product",
    buttonText: "ADD TO CARD",
    description:
      "We know how large objects will act, We know how are objects will act, We know",
    key: 1,
    price: "$16.48",
    season: "SUMMER 2020",
  },
  {
    src: Slide1,
    image: heroman,
    caption: "Vita Classic Product",
    buttonText: "ADD TO CARD",
    description:
      "We know how large objects will act, We know how are objects will act, We know",
    key: 2,
    price: "$16.48",
    season: "SUMMER 2020",
  },
];

function Slide({ src, caption, buttonText, description, season }) {
  return (
    <div className="relative w-full mt-[90%]">
      <img src={src} className="w-full" alt="Slider Image" />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
        <p className="text-l font-bold mr-[72%] mt-[5%] mb-[10px]">{season}</p>{" "}
        <h1 className="text-6xl font-bold mr-[40%] ">{caption}</h1>
        <p className="text-m mr-[38%] mt-[10px] whitespace-pre-line">
          {description}
        </p>
        <div className="flex mt-[5%] mr-[60%] items-center gap-5">
          <p className="font-bold text-white text-xl">$16.48</p>{" "}
          <button className="bg-[#2DC071] font-bold text-white px-8 py-4 rounded">
            {buttonText}
          </button>
        </div>
      </div>
      <img
        src={heroman}
        className="w-[400px] h-[600px] absolute top-0 right-24 mt-[20px] mr-[20px]"
        alt="Second Image"
      />
    </div>
  );
}

function SliderMan() {
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
    <div className="relative w-full h-[1230px] flex flex-col items-center justify-center">
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
        className="absolute top-80 left-[70px] transform -translate-y-1/2 text-white p-2 rounded-full mt-[90%]"
        onClick={previous}
      >
        <img src={Left} alt="Left Arrow" />
      </button>
      <button
        className="absolute top-80 right-[70px] transform -translate-y-1/2  text-white p-2 rounded-full mt-[90%]"
        onClick={next}
      >
        <img src={Right} alt="Right Arrow" />
      </button>
      <div className="flex absolute mt-[180%] left-0 right-0 justify-center">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => btn(index)}
              className={`g-opacity-25 border border-gray-300 border-opacity-50 w-20 h-2 ${
                index === activeIndex ? "bg-white" : ""
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
export default SliderMan;
