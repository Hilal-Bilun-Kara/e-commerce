import Facebook from "../assets/Vector-facebook-blue.png";
import Instagram from "../assets/Vector-instagram-blue.png";
import Twitter from "../assets/Vector-twitter-blue.png";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#FAFAFA] flex justify-between">
        <div className="flex">
          <p className="text-[#252B42] text-[20px] font-bold mt-[30px] mb-[30px] mx-28 flex items-center">
            Bandage
          </p>
          <div className="flex text-[#252B42] items-center ml-[150%] ">
            <a href="https://www.facebook.com/" className="mr-4">
              <img src={Facebook} alt="Instagram" className="mr-4 ml-4" />
            </a>
            <a href="https://www.instagram.com/" className="mr-4">
              <img src={Instagram} alt="Instagram" className="mr-4 ml-4" />
            </a>
            <a href="https://twitter.com/" className="mr-4">
              <img src={Twitter} alt="Instagram" className="mr-4 ml-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
