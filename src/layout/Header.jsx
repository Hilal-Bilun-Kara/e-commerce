import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUser,
  faSearch,
  faShoppingCart,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import Instagram from "../assets/ıcon/Vector-instagram.png";
import Twitter from "../assets/ıcon/Vector-twitter.png";
import Youtube from "../assets/ıcon/Vector-youtube.png";
import Facebook from "../assets/ıcon/Vector-facebook.png";
import { data } from "../data/data.jsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const { phone, mail, message, socialsURL } = data.header;
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NavbarTop */}
      <div className="w-full bg-[#252B42] md:hidden">
        <div className="flex flex-row flex-wrap md:flex-col max-w-[1440px] mx-auto justify-between items-center  min-h-[40px] px-[1.5em]">
          <div className="flex items-center gap-[1.5rem] ">
            <div className="inline-flex text-white items-center gap-[0.25rem]">
              <a href="tel:+12255550118" className="mx-4">
                <FontAwesomeIcon icon={faPhone} /> {phone}
              </a>
            </div>
            <div className="inline-flex text-white items-center gap-[0.25rem]">
              <a
                href="mailto:michela.zivera@example.com"
                className="mx-4 flex items-center"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                {mail}
              </a>
            </div>
          </div>
          <div>
            <h6 className="text-white font-bold text-sm">{message}</h6>
          </div>
          <div className="flex gap-[0.7rem] items-baseline">
            <span className="text-white text-sm font-bold ">Follow Us :</span>
            <a href={socialsURL.instagram}>
              <img src={Instagram} alt="Instagram" className="mr-2 ml-2" />
            </a>

            <a href={socialsURL.youtube}>
              <img src={Youtube} alt="Instagram" className="mr-2 ml-2" />
            </a>

            <a href={socialsURL.facebook}>
              <img src={Facebook} alt="Instagram" className="mr-2 ml-2" />
            </a>

            <a href={socialsURL.twitter} className="text-white">
              <img src={Twitter} alt="Instagram" className="mr-2 ml-2" />
            </a>
          </div>
        </div>
      </div>
      {/* NavbarBottom */}
      <div className="flex justify-between items-center px-[1em] max-w-[1440px] mx-auto md:flex-col flex-wrap min-h-[40px] ">
        <nav className="inline-flex items-center gap-[2rem] w-full justify-between md:flex-wrap">
          <div className="flex gap-[2rem]">
            <div className="flex py-4  md:inline-flex">
              <Link to={"/"}>
                <h3 className="text-2xl font-bold">Bandage</h3>
              </Link>
            </div>

            <div className="flex gap-[1rem] font-bold text-[#737373] text-sm ml-20 mr-[500px] md:ml-0 md:flex-col md:w-full md:items-center md:text-xl md:order-last md:mb-12 items-center md:hidden">
              <Link to={"/"}>Home</Link>
              <span>Shop</span>
              <Link to={"/about"}>About</Link>
              <Link to={"/contact"}>Contact</Link>
              {/* <Link to={"/product"}>Pages</Link> */}
            </div>
          </div>
          {/* Mobil ekran da burger menuye tıklandığın da, headerın açılıp/kapanması.*/}
          {isOpen && (
            <div className="flex gap-[1rem] font-bold text-[#737373] text-sm ml-20 md:ml-0 md:flex-col md:w-full md:items-center md:text-xl md:order-last md:mb-12 items-center">
              <Link to={"/"}>Home</Link>
              <span>Shop</span>
              <Link to={"/about"}>About</Link>
              <Link to={"/contact"}>Contact</Link>
              {/* Diğer menü öğeleri burada yer alacak */}
              <div className="flex gap-2 items-center text-[#23A6F0]">
                <div className="flex justify-center items-center gap-2">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-[#00A1C1] hover:text-grey mr-2"
                  />
                  <Link to={"/login"}>
                    <span className="cursor-pointer">Login</span>
                  </Link>
                </div>

                <span>/</span>

                <Link to={"/signup"}>Register</Link>
              </div>
            </div>
          )}
          <div className="inline-flex  items-center text-[#23A6F0] gap-8">
            <div className="flex items-center ml-28 text-[#00A1C1] md:hidden">
              <FontAwesomeIcon
                icon={faUser}
                className="text-[#00A1C1] hover:text-grey mr-2"
              />
              <a href="/login/" className="hover:text-gray-300">
                Login
              </a>{" "}
              /{" "}
              <a href="/register/" className="hover:text-gray-300 mr-2">
                Register
              </a>
              <FontAwesomeIcon
                icon={faSearch}
                className="header-shopping-icon
"
              />
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="header-shopping-icon
"
              />
              <FontAwesomeIcon
                icon={faHeart}
                className="header-shopping-icon
"
              />
            </div>
            <div className="flex gap-4 flex-wrap md:w-full md:text-sBlack items-center">
              <i className="size-5 fa-solid fa-magnifying-glass md:text-[#252B42]"></i>
              <i className="fa-solid fa-cart-shopping md:text-[#252B42]"></i>
              <i className="size-5 md:hidden fa-regular fa-heart"></i>
              <button
                className="flex-col h-10 w-12 rounded justify-center items-center group hidden md:inline-flex"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                      : "opacity-50 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                      : "opacity-50 group-hover:opacity-100"
                  }`}
                />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Header;
