import { data } from "../data/data.jsx";

export function BestSeller() {
  const { bestSellersText } = data.home;
  return (
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
  );
}
