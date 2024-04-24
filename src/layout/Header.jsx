import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUser,
  faSearch,
  faShoppingCart,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

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

        <div className="flex text-white">
          <p>Follow Us:</p>
          <a href="https://www.instagram.com/">
            <p>@</p>
          </a>

          <a href="https://www.youtube.com/">
            <p>@</p>
          </a>

          <a href="https://www.facebook.com/">
            <p>@</p>
          </a>
          <a href="https://twitter.com/" className="text-white">
            <p>@</p>
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
            <a href="#" className="hover:text-gray-300 mr-8">
              Login/Register
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
