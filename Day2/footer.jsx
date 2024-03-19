import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" pt-8 md:pt-0 h-screen">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-2xl pb-4">ZENYOGA</h1>
          <p className=" mb-2">
            CONNECT US
          </p>
          <div className=" flex gap-5">
            <FaFacebook
              size={35}
              className=" hover:text-blue-700 cursor-pointer"
            />
            <FaInstagram
              size={35}
              className=" hover:text-pink-600 cursor-pointer"
            />
            <FaLinkedin
              size={35}
              className=" hover:text-blue-600 cursor-pointer"
            />
            <FaYoutube
              size={35}
              className=" hover:text-red-500 cursor-pointer"
            />
          </div>
        </div>
        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">
            Quick Links
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <a
              href="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              About Us
            </a>
            <a
              href="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Classes
            </a>
            <a
              href="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Prices
            </a>
            <a
              href="/terms"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Terms and Conditions
            </a>
          </div>
        </div>

        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">
            Contact Us
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <a href="/" className=" text-xl">+91 8998797989</a>
            <a href="/" className=" text-xl">zenyoga@gmail.com</a>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center py-4 ">
          @copyright developed by
          <span className=" text-primary font-semibold mx-2">
            D2
          </span>
          | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer