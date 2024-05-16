import {
  faBorderAll,
  faChevronDown,
  faChevronRight,
  faListCheck,
  faMagnifyingGlass,
  faTimes,
  faGrip,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../data/data";
import { useRef, useState } from "react";
import Categories from "../components/Categories.jsx";
import Customer from "../layout/Customer.jsx";
import ProductCard from "../components/ProductCard.jsx";

export function ShopPage() {
  const { categories } = data.shop;
  const { productCards } = data.productPageCards;

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="bg-[#FAFAFA] pb-10">
        <div className=" flex sm:flex-col sm:flex-row justify-between items-center mx-auto px-[11%] py-4 ">
          <h2 className="text-[#252B42] text-[24px] font-bold ">Shop</h2>
          <div className="flex  gap-[15px] sm:mt-[3%]">
            <p className="text-[#252B42] text-[14px] font-bold">Home</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              size="sm"
              className="text-[#BDBDBD] mt-1"
            />
            <p className="text-[#BDBDBD] text-[14px] font-bold">Shop</p>
          </div>
        </div>
        <div className=" bg-[#FAFAFA]">
          <Categories />
        </div>
      </div>
      <div>
        <>
          <div className="flex justify-between py-3 max-w-[1100px] mx-auto mb-8 flex-wrap md:flex-col md:items-center md:gap-8 md:mb-16">
            <span className="flex font-bold text-[#737373] text-sm items-center">
              Showing all 12 results
            </span>
            <div className="flex justify-center items-center gap-4">
              <span className="text-[#737373] font-bold text-sm">Views:</span>
              <FontAwesomeIcon
                icon={faGrip}
                className="text-l border border-[#737373] rounded px-2 py-2 border-radius-2 bg-white"
              />
              <FontAwesomeIcon
                icon={faList}
                className="text-[#737373] border border-[#737373] px-2 py-2 rounded border-radius-2 bg-white"
              />
            </div>
            <div className="flex flex-row max-w-[1440px] gap-4 md:flex-wrap  md:justify-around">
              <select className="flex py-3 bg-[#F9F9F9] px-4  border-[#737373] border rounded text-[#737373] text-sm">
                <option value={""} disabled selected>
                  Popularity
                </option>
                <option value="price:asc">Price:Asc</option>
                <option value="price:desc">Price:Desc</option>
              </select>

              <button className="flex items-center border border-[#23A6F0] bg-[#23A6F0] border-radius-3 px-7 rounded text-m text-white font-bold">
                Filter
              </button>
            </div>
          </div>
        </>
        {/*ProductCard*/}
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 sm:gap-3 ml-24 md:mr-16 mt-[5%] md:mt-[5%]">
          {productCards.map((item, index) => (
            <div
              key={index}
              className="flex sm:flex-row max-w-60 md:mx-auto mb-7"
            >
              <ProductCard data={item} key={index} />
            </div>
          ))}
        </div>
        {/*PaginationSection */}
        <div className="flex justify-center py-4">
          <span className="border-mutedgray border rounded-l-lg p-4 text-mutedgray bg-[#F3F3F3] font-medium">
            First
          </span>
          <span className="border-[#F3F3F3] border p-3 text-[#23A6F0] font-medium">
            1
          </span>
          <span className="border-[#F3F3F3] border p-3 bg-[#23A6F0] text-white font-medium">
            2
          </span>
          <span className="border-[#F3F3F3] border p-3 text-[#23A6F0] font-medium">
            3
          </span>
          <span className="border border-[#F3F3F3] rounded-r-lg p-4 font-medium text-[#23A6F0]">
            Next
          </span>
        </div>
      </div>

      <div>
        <Customer />
      </div>
    </div>
  );
}
