import ProductCard from "../components/ProductCard.jsx";

import { data } from "../data/data";

export function BestSeller() {
  const { bestSellersText } = data.home;
  const { productCards } = data.productPageCards;

  return (
    <div>
      <div className="mt-[7%]">
        <p className="text-xl text-center mb-[5px] text-[#737373]">
          {bestSellersText.h2}
        </p>
        <h1 className="text-center text-3xl text-[#252B42] font-bold mb-[10px]">
          {bestSellersText.h3}
        </h1>
        <p className="text-m text-center mt-[5px] text-[#737373]">
          {bestSellersText.p}{" "}
        </p>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-6 ml-16 md:mr-12 mt-[5%] md:mt-[5%]">
        {productCards.map((item, index) => (
          <div key={index} className="flex flex-row max-w-60 md:mx-auto mb-5">
            <ProductCard data={item} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
