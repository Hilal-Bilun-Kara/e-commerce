import { useState } from "react";
import Facebook from "../assets/ıcon/Vector-facebook-blue.png";
import Instagram from "../assets/ıcon/Vector-instagram-blue.png";
import Twitter from "../assets/ıcon/Vector-twitter-blue.png";
import { data } from "../data/data.jsx";

export default function Footer() {
  const { footer } = data.home;
  const { sections } = data.home.footer;

  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage(""); // Her input değişikliğinde hata mesajını temizle
  };

  const handleSubscribe = (e) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(email);

    if (!isValidEmail) {
      setErrorMessage("Please enter a valid email address!");
    } else {
      setEmail(e.target.value);
      setErrorMessage("Your subscription request has been received");
    }
  };

  return (
    <div className="mt-[8%]">
      <div className="bg-[#FAFAFA] flex justify-between">
        <div className="flex">
          <p className="text-[#252B42] text-[20px] font-bold mt-[30px] mb-[30px] mx-28 flex items-center">
            {footer.title}
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

      <div className="flex ml-12 mt-16 text-[17px]">
        <div className="flex mt-2 text-[17px]">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`ml-${
                index === sections.length - 1 ? "60" : index === 2 ? "40" : "16"
              }`}
            >
              <strong>{section.title}</strong>
              <ul className="mt-4 footer-list">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="ml-40">
          <strong>{footer.buttonTitle}</strong>
          <div className="flex items-center mt-8">
            <input
              type="email"
              placeholder={footer.buttonContext}
              value={email}
              onChange={handleInputChange}
              className="px-4 py-4 border border-gray-300"
            ></input>
            <button
              onClick={handleSubscribe}
              className="px-4 py-4 border border-[#23A6F0] bg-[#23A6F0] text-white"
            >
              {footer.buttonText}
            </button>
          </div>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
      </div>

      <div className="bg-[#FAFAFA] flex justify-between">
        <div className="flex">
          <p className="text-[#737373] text-[15px] font-bold mt-[20px] mb-[20px] mx-28 flex items-center">
            {footer.content}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
