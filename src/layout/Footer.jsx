import { useState } from "react";
import Facebook from "../assets/Vector-facebook-blue.png";
import Instagram from "../assets/Vector-instagram-blue.png";
import Twitter from "../assets/Vector-twitter-blue.png";

export default function Footer() {
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
    <div className="mt-[100%]">
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

      <div className="flex ml-28 mt-16 text-[17px]">
        <div className="mr-8">
          <strong>Company Info</strong>
          <ul className="mt-4 footer-list">
            <li>About</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="ml-8">
          <strong>Legal</strong>
          <ul className="mt-4 footer-list">
            <li>About</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="ml-24">
          <strong>Features</strong>
          <ul className="mt-4 footer-list">
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>
        <div className="ml-20">
          <strong>Resources</strong>
          <ul className="mt-4 footer-list">
            <li>IOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
        </div>
        <div className="ml-44">
          <strong>Get In Touch</strong>
          <div className="flex items-center mt-8">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleInputChange}
              className="px-4 py-4 border border-gray-300"
            ></input>
            <button
              onClick={handleSubscribe}
              className="px-4 py-4 border border-[#23A6F0] bg-[#23A6F0] text-white"
            >
              Subscribe
            </button>
          </div>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
      </div>
      <div className="bg-[#FAFAFA] flex justify-between">
        <div className="flex">
          <p className="text-[#737373] text-[15px] font-bold mt-[20px] mb-[20px] mx-28 flex items-center">
            Made With Love By Hilal Bilun Kara All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
