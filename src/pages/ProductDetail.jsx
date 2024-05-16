import {
  faCartShopping,
  faChevronRight,
  faEye,
  faHeart,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../data/data";
import React, { useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import Customer from "../layout/Customer.jsx";

//ToDo: Product Card boyutlarını ve footer üstündeki boşluğu
export function ProductDetail() {
  const {
    name,
    availability,
    slides,
    price,
    detailImage,
    reviews,
    descriptionShort,
  } = data.productPage;
  const { productDetailCards } = data.productDetailPageCards;

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
          <div className="flex mt-[100%] md:mt-[130%] sm:mt-[130%]gap-3">
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
            <div className="product-detail-color bg-sky-500  hover:bg-sky-200 " />
            <div className="product-detail-color bg-green-500  hover:bg-green-200 " />
            <div className="product-detail-color bg-orange-400  hover:bg-orange-200 " />
            <div className="product-detail-color bg-slate-800  hover:bg-slate-200 " />
          </div>
          <div className="flex gap-2 mt-[19%] sm:mb-[20%] md:mb-[20%]">
            <button className="text-white text-sm font-bold border-radius-[10px] rounded-sm bg-sky-500 px-[15px] py-[8px] sm:px-[30px] sm:py-[5px] hover:scale-105">
              Select Options
            </button>
            <div className="flex gap-2 ml-4 cursor-pointer">
              <div className="productIcon">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-[#252B42] hover:text-red-600"
                />
              </div>
              <div className="productIcon">
                <button>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="text-[#252B42] active:text-sky-500 hover:text-sky-500"
                  />
                </button>
              </div>
              <div className="productIcon">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-[#252B42] hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* NavLinks */}
        <nav className="flex justify-center gap-8">
          <p className="navBar-product">Description</p>
          <p className="navBar-product">Additional Information</p>
          <p className="navBar-product ">
            Reviews<span className="text-[#23856D] font-bold pl-1">(0)</span>
          </p>
        </nav>
        <hr className="border border-gray-200 mt-[3%]" />
      </div>
      <div className="flex sm:flex-col sm:flex-row justify-between gap-[30px] sm:mt-[5%]">
        <div className="w-[99%] sm:w-[80%] relative bg-gray-100 rounded-md">
          <img
            className="w-[500px] h-[400px] rounded-md shadow-lg sm:absolute top-0 left-0 object-cover"
            src={detailImage}
          />
        </div>
        <div className="sm:w-[80%] md:w-[80%] w-[99%] flex flex-col gap-[30px] sm:mt-[110%]">
          <h5 className=" text-slate-800 text-2xl font-bold tracking-tight">
            the quick fox jumps over
          </h5>
          <h6 className="product-h6">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </h6>
          <h6 className="product-h6">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </h6>
          <h6 className="product-h6">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </h6>
        </div>
        <div className="flex flex-col w-[99%] sm:w-[80%] gap-6">
          <div className="flex flex-col gap-4">
            <h5 className=" text-slate-800 text-2xl font-bold tracking-tight">
              the quick fox jumps over
            </h5>
            <div className="flex flex-col gap-2">
              <div className="quick-div">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="quick-product">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="quick-div">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="quick-product">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="quick-div">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="quick-product">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="quick-div">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="quick-product">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className=" text-slate-800 text-2xl font-bold  tracking-tight">
              the quick fox jumps over
            </h5>
            <div className="flex flex-col gap-2">
              <div className="quick-div">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="quick-product">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="quick-div">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="quick-product">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="quick-div">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="quick-product">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-slate-800 ml-6 text-2xl font-bold tracking-tight mt-[5%] sm:mt-[10%] md:mt-[10%]">
        BESTSELLER PRODUCTS
      </h3>
      <hr className=" border border-gray-200" />
      <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6 ml-16 md:mr-12 mt-[5%] md:mt-[5%]">
        {productDetailCards.map((item, index) => (
          <div key={index} className="flex flex-row max-w-60 md:mx-auto mb-5">
            <ProductCard data={item} key={index} />
          </div>
        ))}
      </div>{" "}
      <div>
        <Customer />
      </div>
    </div>
  );
}
