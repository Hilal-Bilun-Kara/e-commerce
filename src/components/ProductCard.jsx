import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ProductCard({ data }) {
  return (
    <Link to={`/product/${data.id}`} className="flex flex-col">
      <img src={data.img} alt={data.product} />
      <div className="flex flex-col gap-1 items-center">
        <h5 className="font-semibold mt-5">{data.category}</h5>
        <span className="text-secondarygray text-sm font-semibold text-[#737373]">
          {data.product}
        </span>
        <div className="flex gap-2">
          <span className="text-mutedgray font-semibold text-[#BDBDBD]">
            {data.oldPrice}
          </span>
          <span className="text-productgreen items-center font-semibold text-[#23856D]">
            {data.newPrice}
          </span>
        </div>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-4 h-4 bg-blue-500 rounded-full" />
          <div className="w-4 h-4 bg-[#23856D] rounded-full" />
          <div className="w-4 h-4 bg-orange-400 rounded-full" />
          <div className="w-4 h-4 bg-black rounded-full" />{" "}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
