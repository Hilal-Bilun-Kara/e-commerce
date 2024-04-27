import { data } from "../data/data.jsx";

export default function Container() {
  const { containerFluid } = data.home;

  return (
    <div className=" w-full flex  pt-1 gap-3">
      <div className="flex justify-end items-end">
        <img
          src={containerFluid.src}
          className="w-[600px] mx-[5%] mr-28 h-[600px]  "
        />
      </div>
      <div className=" flex justify-center items-center ">
        <div className="w-[400px] flex flex-col gap-4 pr-10  collection-text">
          <h5 className="text-[#BDBDBD] text-base font-bold  ">
            {containerFluid.h5}
          </h5>
          <h2 className="text-[#252B42] text-5xl font-bold">
            {containerFluid.h2}
          </h2>
          <h4 className="text-[#737373] text-xl font-normal">
            {containerFluid.h4}
          </h4>
          <div className="flex gap-3">
            <button className="button primary-button mx-[10px] ">
              {containerFluid.buttonTextOne}
            </button>
            <button className="button mx-[10px] ">
              {containerFluid.buttonTextTwo}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
