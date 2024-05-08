import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { data } from "../data/data";
import TeamCard from "../components/TeamCard";

export default function TeamPage() {
  const { womanCategory, socialFooter } = data.team;
  const { teamCards } = data.global;

  return (
    <div className="flex flex-col sm:py-20 py-5 ">
      {/* İlk section */}
      <div className="flex flex-col gap-4 items-center ">
        <h5 className="text-base font-bold text-[#737373] ">WHAT WE DO</h5>
        <h2 className="text-[#252B42] font-bold md:text-6xl  text-[40px] sm:leading-[80px] text-center">
          Innovation tailored for you
        </h2>
        <div className="flex justify-center items-center gap-2 mb-[90px]">
          <Link to="/" className="text-[#252B42] text-md font-bold">
            Home
          </Link>
          <FontAwesomeIcon
            icon={faChevronRight}
            size="lg"
            className="p-1 text-[#BDBDBD] "
          />
          <h6 className="text-md text-[#737373] font-bold ">Team</h6>
        </div>
      </div>
      {/* İkinci section */}
      <div className="flex flex-wrap justify-center mb-[14px]">
        <div>
          <img
            src={womanCategory.womanImageOne}
            className="w-[700px] h-[530px] object-cover mt-2 mr-3"
          />
        </div>
        <div className="flex gap-2 mt-2">
          <div className="">
            <img
              src={womanCategory.womanImageTwo}
              className="team-second-section "
            />
            <img
              src={womanCategory.womanImageFour}
              className="team-second-section"
            />
          </div>
          <div>
            <img
              src={womanCategory.womanImageThree}
              className="team-second-section"
            />
            <img
              src={womanCategory.womanImageFive}
              className="team-second-section"
            />
          </div>
        </div>
      </div>
      {/* Üçüncü section */}
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-slate-800 text-[40px] font-bold py-[60px] w-[300px] sm:w-[200px] text-center">
          Meet Our Team
        </h2>
      </div>
      <div className="flex sm:flex-col sm:flex-row items-center justify-center gap-5 flex-wrap mx-[50px] sm:mx-[70px]">
        {teamCards.slice(0, 12).map((item, index) => (
          <TeamCard key={index} item={item} />
        ))}
      </div>{" "}
      {/* Dördüncü section */}
      <div className="flex flex-col items-center justify-center gap-10 py-[10%]  ">
        <h2 className="text-4xl font-bold w-[500px] sm:w-[250px] text-center">
          {socialFooter.h2}
        </h2>
        <h6 className="text-base font-normal text-[#737373] text-center w-[250px] sm:w-[400px]">
          {socialFooter.h6}
        </h6>
        <button className="bg-[#23A6F0] text-white py-3.5 px-12 font-bold text-base rounded-md ">
          {socialFooter.btnText}
        </button>
        <div className="flex gap-10 text-[#395185]">
          <a href="https://twitter.com/" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              size="2xl"
              className="text-[#55ACEE]"
            />
          </a>{" "}
          <a href="https://facebook.com/" target="_blank">
            <FontAwesomeIcon icon={faSquareFacebook} size="2xl" />
          </a>
          <a href="https://instagram.com/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2xl"
              className="text-black"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/hilal-bilun-kara/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2xl"
              className="text-[#0A66C2]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
