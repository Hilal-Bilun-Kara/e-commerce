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

export default function Header() {
  return (
    <div>
      <div className="flex justify-between mx-0 bg-[#252B42] text-white">
        <div className="flex">
          <a href="tel:+12255550118" className="mx-4">
            <FontAwesomeIcon icon={faPhone} /> (225) 555-0118
          </a>
          <a
            href="mailto:michela.zivera@example.com"
            className="mx-4 flex items-center"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            michela.zivera@example.com
          </a>
        </div>

        <div className="flex ml-2">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>

        <div className="flex text-white items-center">
          <p>Follow Us : </p>
          <a href="https://www.instagram.com/">
            <img src={Instagram} alt="Instagram" className="mr-2 ml-2" />
          </a>

          <a href="https://www.youtube.com/">
            <img src={Youtube} alt="Instagram" className="mr-2 ml-2" />
          </a>

          <a href="https://www.facebook.com/">
            <img src={Facebook} alt="Instagram" className="mr-2 ml-2" />
          </a>

          <a href="https://twitter.com/" className="text-white">
            <img src={Twitter} alt="Instagram" className="mr-2 ml-2" />
          </a>
        </div>
      </div>
      <div className="bg-white flex justify-between">
        <div className="flex">
          <p className="text-[#252B42] text-[20px] font-bold mt-[10px] mb-[10px] mx-4 flex items-center">
            Bandage
          </p>

          <nav className="flex justify-between items-center ml-32 mr-[45%]">
            <div className="flex items-center">
              <ul className="flex space-x-4">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/tum-urunler">Shop</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="flex items-center ml-28 text-[#00A1C1]">
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
        </div>
      </div>
    </div>
  );
}
