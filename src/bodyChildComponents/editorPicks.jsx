import Men from "../assets/men.png";
import Women from "../assets/women.png";
import Accessories from "../assets/accessories.png";
import Kids from "../assets/kids.png";

export function EditorPicks() {
  return (
    <div className="mt-[55%]">
      <h1 className="text-center text-3xl text-[#252B42] font-bold mb-[10px]">
        EDITOR’S PICK
      </h1>
      <p className="text-[#737373] text-[20px] text-center">
        Problems trying to resolve the conflict between
      </p>
      <div className="flex mt-[5%]">
        <div className="relative">
          <img src={Men} className="mr-8 ml-32" />
        </div>
        <img src={Women} className="mr-8" />
        <div>
          <div>
            <img src={Accessories} className="mb-4" />
          </div>
          <div>
            <img src={Kids} />
          </div>
        </div>
      </div>
    </div>
  );
}
