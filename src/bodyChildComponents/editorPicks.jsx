import { data } from "../data/data.jsx";

export function EditorPicks() {
  const { categories } = data.home;
  return (
    <div className="mt-[55%] ">
      <h1 className="text-center text-3xl text-[#252B42] font-bold mb-[10px]">
        {categories.h3}
      </h1>
      <p className="text-[#737373] text-[20px] text-center">{categories.p}</p>
      <div className="flex md:flex-col md:items-center  mt-[5%]">
        <div className="relative">
          <a href="/men">
            <img
              src={categories.man.src}
              className="mr-8 ml-32 md:mb-[10px] md:w-[240px] md:h-[300px] md:ml-8"
              alt="Men"
            />
          </a>
        </div>
        <a href="/women">
          <img
            src={categories.woman.src}
            className="mr-8 md:mb-[10px] md:ml-8"
          />
        </a>
        <div>
          <div>
            <a href="/accessories">
              <img
                src={categories.accessories.src}
                className="mb-4 md:mb-[10px]"
              />
            </a>
          </div>
          <div>
            <a href="/kids">
              <img src={categories.kids.src} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
