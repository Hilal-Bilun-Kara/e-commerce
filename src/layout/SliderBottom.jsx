import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../data/data.jsx";
import heroMan from "../assets/home/heroMan/heroman.png";

function SliderBottom() {
  const { slides } = data.home.heroMan;

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      goToNextSlide();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);
  return (
    <div className="relative top-100 mt-[5%]">
      <div className="overflow-hidden max-h-[716px] h-screen ">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={`Slide ${index}`}
            className={`object-cover object-top absolute w-full h-full transform transition-all duration-300 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute top-10 right-24">
        <img
          src={heroMan}
          alt="Your Image"
          className="w-80 h-108 md:w-60 md:h-80 md:hidden"
        />
      </div>
      <div className="absolute top-40 left-36  md:top-20 md:left-0 flex max-w-[1044px] max-h-[680px] w-full h-full slides-center ">
        <div className="flex flex-col gap-8 md:items-center md:mx-auto">
          <h5 className="font-semibold text-white ml-2">
            {slides[currentIndex].h5}
          </h5>
          <h1 className="flex font-bold text-6xl text-white md:max-w-80 md:text-[40px] md:flex-col md:text-center">
            {slides[currentIndex].h1}
          </h1>
          <p className="flex flex-col text-white font-medium max-w-80 md:flex-col md:items-center">
            <span> {slides[currentIndex].h4}</span>
            {slides[currentIndex].h6}
          </p>
          <div className="flex justify-start ">
            <Link
              to="/shop"
              className="text-white border border-[#2DC071] font-bold text-xl bg-[#2DC071] p-4 rounded-md"
            >
              {slides[currentIndex].buttonText}
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  text-white cursor-pointer md:left-0">
        <button
          className=" top-0 left-0 w-8 h-8  text-white text-6xl flex justify-center items-center"
          onClick={goToPrevSlide}
        >
          {"<"}
        </button>
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  text-white cursor-pointer md:right-0">
        <button
          className=" top-0 right-0 w-8 h-8 text-white text-6xl flex justify-center items-center"
          onClick={goToNextSlide}
        >
          {">"}
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-20 h-2 mx-0.5  bg-white ${
              index === currentIndex ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default SliderBottom;
