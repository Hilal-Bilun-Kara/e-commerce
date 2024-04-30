import {
  faChevronLeft,
  faChevronRight,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../data/data.jsx";
import React, { useEffect, useState } from "react";
import { Carousel, CarouselControl, CarouselItem } from "reactstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

export function ShopPage() {
  const {
    name,
    availability,
    slides,
    detailImage,
    price,
    rate,
    reviews,
    descriptionShort,
  } = data.productPage;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [product, setProduct] = useState({});

  let transformedDescription = descriptionShort;
  if (transformedDescription) {
    transformedDescription = transformedDescription
      .replace(/%100\sPamuk/g, "100% Pamuk")
      .replace(/Regular\/Normal\sKalıp/g, "Regular Kalıp")
      .replace(/V\sYaka/g, "V Yaka")
      .replace(/Uzun\sKollu/g, "Uzun Kollu")
      .replace(/Örme\sT-Shirt/g, "Örme T-Shirt")
      .replace(/\bTWOAW21TS0099\b/g, "");
  }

  const next = () => {
    if (animating) return;
    setActiveIndex((nextIndex) =>
      nextIndex === slides.length - 1 ? 0 : nextIndex + 1
    );
  };

  const previous = () => {
    if (animating) return;
    setActiveIndex((nextIndex) =>
      nextIndex === 0 ? slides.length - 1 : nextIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-[75%] mx-auto flex flex-col gap-10 mb-[30%] md:block">
      <nav className="flex md:items-center md:justify-center sm:justify-start gap-2">
        <div className="text-slate-800 text-sm font-bold">Home</div>
        <FontAwesomeIcon
          icon={faChevronRight}
          size="sm"
          className="text-[#BDBDBD] mt-1"
        />
        <div className="text-slate-400 text-sm font-bold">Shop</div>
      </nav>
      <div className="flex md:grid sm:flex-row gap-12 mt-4">
        <div className="w-full sm:w-full relative">
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden max-h-[400px] ">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`Slide ${index}`}
                  className={`object-cover object-top absolute w-[500px] h-[450px] transform transition-all duration-300 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <div className="absolute top-[30%] mr-[15%] sm:text-2xl rounded-full p-2  text-white cursor-pointer md:left-0">
              <button
                className=" top-0 left-16 w-8 h-8  text-white text-6xl flex justify-center items-center"
                onClick={previous}
              >
                {"<"}
              </button>
            </div>

            <div className="absolute top-[30%] ml-[90%]  sm:text-2xl rounded-full p-2  text-white cursor-pointer md:right-0">
              <button
                className=" top-0 w-8 h-8 text-white text-6xl flex justify-center items-center"
                onClick={next}
              >
                {">"}
              </button>
            </div>
          </div>
          <div className="flex mt-[100%] md:mt-[130%] gap-3">
            {slides &&
              slides.length > 0 &&
              slides.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={`w-24 h-28 object-contain hover:scale-105 hover:ease-out hover:duration-300 ease-out duration-300 ${
                    index !== activeIndex && "opacity-50"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col items-start gap-3 ">
          <h4 className="text-slate-800 text-xl font-normal leading-[30px]">
            {" "}
            {name}
          </h4>
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-300"
                size="lg"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-300"
                size="lg"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-300"
                size="lg"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-300"
                size="lg"
              />
              <FontAwesomeIcon
                icon={faStarHalfStroke}
                className="text-yellow-300"
                size="lg"
              />
            </div>
            <span className="text-neutral-500 text-sm font-bold">
              {reviews} Reviews
            </span>
          </div>
          <div className="flex flex-col items-start ">
            <h5 className="text-slate-800 text-2xl font-bold mb-4">{price}</h5>
            <h6 className="text-neutral-500 text-sm font-bold mb-4">
              Availability :{" "}
              <span className="text-sky-500 text-sm font-bold">
                {availability}
              </span>
            </h6>
          </div>
          <p className="text-[#858585] w-[80%] sm:w-[170%] text-sm font-normal leading-tight tracking-tight mb-4">
            {transformedDescription}
          </p>
          <div className="w-full border-t border-[#ECECEC] mb-4"></div>
          <div className="flex gap-2">
            <div className="w-[30px] h-[30px] bg-sky-500 rounded-full shadow-sm hover:bg-sky-200 cursor-pointer" />
            <div className="w-[30px] h-[30px] bg-green-500 rounded-full shadow-sm hover:bg-green-200 cursor-pointer" />
            <div className="w-[30px] h-[30px] bg-orange-400 rounded-full shadow-sm hover:bg-orange-200 cursor-pointer" />
            <div className="w-[30px] h-[30px] bg-slate-800 rounded-full shadow-sm hover:bg-slate-200 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
