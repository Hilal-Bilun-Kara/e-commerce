import { data } from "../data/data";

export default function Container() {
  const { containerFluid } = data.home;

  return (
    <div className=" w-full flex md:grid sm:flex-row pt-1 gap-3 md:ml-16 md:mb-24">
      <div className="flex justify-end items-end md:ml-4">
        <img
          src={containerFluid.src}
          className="w-[600px] mr-24 ml-24 h-[600px] md:w-[400px] md:h-[400px]"
        />
      </div>
      <div className=" flex items-center mt-[15%] ">
        <div className="w-[400px] flex flex-col gap-4 pr-10  collection-text">
          <h5 className="text-[#BDBDBD] text-base font-bold  ">
            {containerFluid.h5}
          </h5>
          <h2 className="text-[#252B42] text-5xl font-bold ">
            {containerFluid.h2}
          </h2>
          <h4 className="text-[#737373] text-xl font-normal">
            {containerFluid.h4}
          </h4>
          <div className="flex gap-3">
            <button className="border px-8 py-4 rounded bg-[#2DC071] text-white font-bold mx-[10px] ">
              {containerFluid.buttonTextOne}
            </button>
            <button className=" border border-radius px-8 py-4 rounded border-[#2DC071] mx-[10px] font-bold text-[#2DC071]">
              {containerFluid.buttonTextTwo}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
