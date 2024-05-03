import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowTurnDown,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../data/data";

export function ContactPage() {
  const { img, h5, h1, h4, phone, fax } = data.contact;
  return (
    <div className="flex flex-col gap-[100px] ml-[15%]">
      {/* İlk section başlangıcı */}
      <div className="flex sm:flex-col sm:flex-row  mx-auto sm:pl-[0px] gap-[10%]">
        <div className="flex flex-col gap-[35px] w-[50%] ">
          <h5 className="text-[#252B42] font-bold w-[300px]  sm:w-[376px] ">
            {h5}
          </h5>
          <h1 className=" text-[#252B42] sm:text-[58px] text-[40px] font-bold w-[256px]  sm:w-[376px]">
            {h1}
          </h1>
          <h4 className="text-neutral-500 text-xl font-normal w-[226px]  sm:w-[376px] ml-2 sm:ml-0">
            {h4}
          </h4>
          <div className="">
            <p className="text-[#252B42] text-2xl font-bold">{phone}</p>
            <p className="text-[#252B42] text-2xl font-bold">{fax}</p>
          </div>
          <div className="flex gap-4 sm:justify-start text-[#252B42]">
            <FontAwesomeIcon icon={faTwitter} size="xl" />
            <FontAwesomeIcon icon={faSquareFacebook} size="xl" />
            <FontAwesomeIcon icon={faInstagram} size="xl" />
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </div>
        </div>
        <div className="w-[70%] sm:w-[100%] mr-[10%] flex justify-end pt-5 sm:pt-0 pl-[100px] sm:mt-[10%]">
          <div className="relative flex justify-center items-center sm:mr-[25%]">
            <div className="rounded-full absolute bg-[#FFE9EA] sm:w-[80%] sm:h-[65%] w-[90%] h-[65%] right-[15%]" />
            <div className="rounded-full absolute bg-[#7f4cb5] sm:w-[3%] sm:h-[2%] sm:left-[10%] sm:bottom-[20%] w-[3%] h-[2%] left-[5%] bottom-[20%]" />
            <div className="rounded-full absolute bg-[#FFE9EA] sm:w-[10%] sm:h-[7%] sm:left-[10%] sm:top-[10%] w-[14%] h-[10%] right-[99%] top-[5%]" />
            <div className="rounded-full absolute bg-[#7f4cb5] sm:w-[3%] sm:h-[2%] sm:right-[8%] sm:top-[20%] w-[3%] h-[2%] right-[24%] top-[20%]" />
            <div className="rounded-full absolute bg-[#FFE9EA] sm:w-[6%] sm:h-[4%] sm:right-[1%] sm:top-[50%] w-[6%] h-[4%] right-[6%] top-[50%]" />
            <img
              className="w-full relative max-w-100 z-1 mr-20 sm:mr-0"
              src={img}
            />
          </div>
        </div>
      </div>
      {/* İkinci section başlangıcı */}
      <div className=" w-[100%] sm:bg-white items-center justify-center flex flex-col  ">
        <div>
          <div className="flex flex-col justify-center items-center text-center gap-2 mb-5 mr-[25%]">
            <h6 className="text-[#252B42] text-sm font-bold">
              VISIT OUR OFFICE
            </h6>
            <div className="w-[100%] sm:w-[70%] flex justify-center items-center ">
              <h2 className="text-[#252B42] text-[40px] font-bold ">
                We help small businesses with big ideas
              </h2>
            </div>
          </div>
        </div>
        <div className="flex mr-[75%] gap-5 ">
          <div className="flex w-[100%] sm:items-center sm:flex-col sm:ml-[35%] md:flex-row gap-[60px] ml-[33%]">
            <div className="flex flex-col gap-[10px] px-[40px] h-[400px] text-center py-3 bg-white">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-[#23A6F0] text-[100px] mb-4"
              />
              <h6 className="text-[#252B42] text-base font-bold">
                georgia.young@example.com
              </h6>
              <h6 className="text-[#252B42] text-base font-bold">
                georgia.young@ple.com
              </h6>
              <h6 className="text-[#252B42] text-lg font-bold">Get Support</h6>
              <button className="border text-[#23A6F0] border-[#23A6F0] rounded-[37px] w-[80%] h-[15%] ml-[7%] hover:bg-blue-100">
                Submit Request
              </button>
            </div>
            <div className="flex flex-col gap-[10px] px-[40px] h-[400px] text-center py-3 bg-[#252B42]">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-[#23A6F0] text-[100px] mb-4 mt-12"
              />
              <h6 className="text-base font-bold text-white">
                georgia.young@example.com
              </h6>
              <h6 className="text-base font-bold text-white">
                georgia.young@ple.com
              </h6>
              <h6 className="text-lg font-bold text-white">Get Support</h6>
              <button className="border text-[#23A6F0] border-[#23A6F0] rounded-[37px] w-[80%] h-[15%] ml-[7%] hover:bg-blue-100">
                Submit Request
              </button>
            </div>
            <div className="flex flex-col gap-[10px] px-[40px] h-[400px] text-center py-3 bg-white">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-[#23A6F0] text-[100px] mb-4 "
              />
              <h6 className="text-[#252B42] text-base font-bold">
                georgia.young@example.com
              </h6>
              <h6 className="text-[#252B42] text-base font-bold">
                georgia.young@ple.com
              </h6>
              <h6 className="text-[#252B42] text-lg font-bold">Get Support</h6>
              <button className="border text-[#23A6F0] border-[#23A6F0] rounded-[37px] w-[80%] h-[15%] ml-[7%] hover:bg-blue-100">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center gap-3 mr-[20%]">
        <FontAwesomeIcon
          icon={faArrowTurnDown}
          className="text-[80px] text-[#23A6F0]"
        />
        <h6 className="text-[#252B42] text-[16px] font-bold leading-6 mt-5">
          WE Can't WAIT TO MEET YOU
        </h6>
        <h2 className="text-[#252B42] font-bold leading-[80px] text-[58px]">
          Let’s Talk
        </h2>
        <button className="bg-[#23A6F0] px-[45px] py-[20px] text-white text-md font-bold rounded mb-[90px]">
          Try it free now
        </button>
      </div>
    </div>
  );
}
