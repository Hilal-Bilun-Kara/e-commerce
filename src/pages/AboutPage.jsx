import { data } from "../data/data";
import Customer from "../layout/Customer";
import TeamCard from "../components/TeamCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  const {
    img,
    h5,
    h1,
    h4,
    btnText,
    h2,
    p,
    text,
    metricsTitle,
    metrics,
    video,
    clientsHeader,
    clientsText,
    containerH5,
    containerH2,
    containerImg,
    containerText,
    containerBtn,
    teamContainerText,
  } = data.about;
  const { teamCards } = data.global;

  return (
    <div>
      <div className="flex flex-col gap-[100px] sm:gap-[100px] sm:text-center">
        {/* First Section */}
        <div className="flex sm:flex-col md:flex-row items-center justify-start mx-auto">
          <div className="flex flex-col gap-[35px] mx-[10%] w-[500px] sm:items-center justify-start sm:w-[300px]">
            <h5 className="text-[#252B42] font-bold sm:flex sm:hidden">{h5}</h5>
            <h1 className=" text-[#252B42] text-[40px] font-bold">{h1}</h1>
            <h4 className="  text-neutral-500 text-xl font-normal">{h4}</h4>
            <div className=" justify-start flex ">
              <button className="text-white text-sm font-bold px-[40px] py-[15px] rounded-[5px] bg-[#23A6F0] ">
                {btnText}
              </button>
            </div>
          </div>
          <div className="w-[100%] sm:w-[200%] sm:h-[150%] flex justify-center sm:mt-[20%]">
            <div className="relative flex justify-center items-center ">
              <div className="rounded-full absolute bg-[#FFE9EA] sm:w-[50%] sm:h-[75%] left-[10%] sm:left-[25%]  w-[60%] h-[89%]" />
              <div className="rounded-full absolute bg-[#7f4cb5] w-[2%] h-[3%] left-[5%] sm:left-[20%] bottom-[20%]" />
              <div className="rounded-full absolute bg-[#FFE9EA] w-[10%] h-[15%] left-[1%] sm:left-[15%] top-[10%]" />
              <div className="rounded-full absolute bg-[#7f4cb5] w-[2%] h-[3%] right-[20%] top-[20%]" />
              <div className="rounded-full absolute bg-[#FFE9EA] w-[4%] h-[6%] right-[18%] top-[45%]" />
              <div className=" sm:max-w-[300px] z-10 mr-10 sm:mr-0">
                <img src={img} />
              </div>
            </div>
          </div>
        </div>
        <div className=" sm:flex-col w-[900px] sm:w-[300px] items-center justify-center mx-[20%] sm:mx-[25%]">
          <h2 className="text-red-500 text-sm">{h2}</h2>
          <div className="flex sm:flex-col justify-center items-center sm:flex-row gap-16">
            <p className="text-slate-800 w-[500px] sm:w-[200px] text-2xl font-bold">
              {p}
            </p>
            <p className="text-neutral-500 mb-[5%] text-m font-normal">
              {text}
            </p>
          </div>
        </div>
        {/* Üçüncü section başlangıcı */}
        <div className="flex sm:flex-col sm:flex-row mx-auto justify-center gap-[100px] text-center flex-wrap ">
          <div>
            <p className="metrics">{metrics.one}</p>
            <p className="metricsTitle">{metricsTitle.one}</p>
          </div>
          <div>
            <p className="metrics">{metrics.two}</p>
            <p className="metricsTitle">{metricsTitle.two}</p>
          </div>
          <div>
            <p className="metrics">{metrics.three}</p>
            <p className="metricsTitle">{metricsTitle.three}</p>
          </div>
          <div>
            <p className="metrics">{metrics.four}</p>
            <p className="metricsTitle">{metricsTitle.four}</p>
          </div>
        </div>
        {/* Dördüncü section başlangıcı */}
        <div className="w-[70%] relative flex items-center justify-center rounded-lg mx-auto">
          <img
            className="w-full sm:h-[400px] h-[500px] mx-auto rounded-lg shadow-xl"
            src={video}
            alt="Video Thumbnail"
          />
          <div className="w-full h-full absolute bg-gradient-to-b from-transparent to-black via-transparent via-opacity-0 to-opacity-84 rounded-lg shadow-xl" />
          <div className="flex items-center justify-center w-20 h-20 bg-[#23A6F0] rounded-full absolute shadow-xl cursor-pointer">
            <FontAwesomeIcon icon={faPlay} size="xl" className="text-white" />
          </div>
        </div>
        {/* Beşinci section başlangıcı */}
        <div className="flex flex-col items-center justify-center  ">
          <h2 className="text-slate-800 text-[40px] font-bold w-[300px] sm:w-[300px] items-center ">
            {teamContainerText.h2}
          </h2>
          <div className="w-[300px] sm:w-[469px]">
            <p className="text-[#737373] text-sm font-normal text-center">
              {teamContainerText.text}
            </p>
          </div>
        </div>
        <div className="flex sm:flex-col sm:flex-row flex-grow-1 items-center justify-center gap-5 flex-wrap mx-[50px] sm:mx-[100px]">
          {teamCards.slice(0, 3).map((item, index) => (
            <TeamCard key={index} item={item} />
          ))}
        </div>
        {/* Altıncı section başlangıcı */}
        <div className="bg-[#FAFAFA] py-[6%] text-center">
          <div className="flex flex-col gap-3 items-center">
            <h2 className="text-[#252B42] text-[40px] sm:w-[280px] font-bold ">
              {clientsHeader}
            </h2>
            <p className="text-[#737373] text-sm font-normal w-[350px] sm:w-[350px] mb-[5%] ">
              {clientsText}
            </p>
          </div>
          <Customer />
        </div>
      </div>
      {/* Yedinci section başlangıcı */}
      <div className="flex h-[600px]">
        <div className="flex w-[100%] sm:w-[100%] bg-[#2A7CC7]">
          <div className="w-[40%] sm:w-[60%] flex flex-col sm:items-center sm:text-center my-auto gap-7 mx-[10%] sm:mx-[20%]">
            <h5 className="text-white text-[18px] font-bold">{containerH5}</h5>
            <h2 className="text-white text-[40px] font-bold">{containerH2}</h2>
            <p className=" w-[100%] sm:w-[70%] text-white text-sm font-normal">
              {containerText}
            </p>
            <div className="flex ">
              <button className="text-[#FAFAFA] bg-transparent px-[40px] py-[15px] border border-slate-200 rounded-md text-[20px] font-bold">
                {containerBtn}
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] sm:w-[40%] sm:hidden md:hidden">
          <img src={containerImg} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
