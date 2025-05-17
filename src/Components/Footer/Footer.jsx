import React from "react";
import { FiMail } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../assets/SREIT_LOGO.png';


const Footer = () => {
  return (
    <footer className="overflow-hidden relative z-10 bg-black text-white pb-10 pt-20 lg:pt-[80px] ">
      {/* Gradient circle */}
      <div className="background-gradient-footer w-56 h-56 md:w-80 md:h-80 absolute top-[50%] right-[-25%]  md:top-[50%] md:left-[-8%] rounded-full "></div>

      <div className="container  lg:w-[90%] mx-auto ">
        <div className="mx-4 flex justify-between flex-wrap border-b border-zinc-600 ">
          {/* logo div */}
          <div className=" w-full px-4 sm:w-2/3 lg:w-3/12 ">
            <div className="mb-10 w-full  flex flex-col items-center">
              <a href="/#" className="mb-6 inline-block max-w-[140px] ">
              <img src={logo} alt="logo" className="max-w-full " />
                {/* <img
                  src="https://i.ibb.co/tP79HPK/SMIt-Solution-Logo-removebg-preview.png"
                  alt="logo"
                  className="max-w-full "
                /> */}
                {/* <img
      src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
      alt="logo"
      className="max-w-full hidden "
    /> */}
              </a>
              <p className="mb-7 text-base text-body-color text-center">
              Your partner in digital success! Web development, e-commerce, and custom IT solutions to boost your business.
              </p>
            </div>
          </div>

          <div className="w-full md:w-5/12 px-4 flex md:justify-evenly justify-between mb-8 ">
            <div>
              <p className="mb-6 text-lg font-semibold text-white">Company</p>
              <Link to="/about" className="mt-3 block">
                About SRE IT{" "}
              </Link>
              <Link to="/services" className="mt-3 block">
                Services
              </Link>
              <p className="mt-3 ">Our Team</p>
              <p className="mt-3">
                <Link to="/career">Career</Link>{" "}
              </p>
            </div>

            <div>
              <p className="mb-6  text-lg font-semibold text-white ">
                Quick Links
              </p>
              <p className="mt-3"> <Link to="/blog">Our Blog</Link></p>
              <p className="mt-3"> <Link to="/terms-and-conditions">Terms & Condition</Link></p>
              <p className="mt-3"><Link to="/privacy-policy">Privacy Policy</Link></p>
              <p className="mt-3"> <Link to="/contact">Contact Us</Link></p>
            </div>
          </div>

          {/* Icon div */}
          <div className=" w-full px-4 sm:w-1/2 lg:w-3/12 ">
            <div className="mb-4 w-full ">
              <p className="mb-6 text-lg font-semibold text-white ">Address</p>
              <div className=" ">
                <p className="flex items-center gap-x-2">
                  <FiMail className="text-xl"></FiMail>{" "}
                  sreitsolution@gmail.com
                </p>
                <p className="flex items-center gap-x-2 mt-2">
                  <BiPhoneCall className="text-xl"></BiPhoneCall> +88
                  01700006758
                </p>
                
                <p className="flex  gap-x-2 mt-2">
                  <SlLocationPin className="text-2xl"></SlLocationPin> Nasirabad
                  Properties Road 1, Chittagong, Bangladesh.
                </p>
                <p className="flex  gap-x-2 mt-2">
                  {/* <SlLocationPin className="text-lg"></SlLocationPin> Al Muteena St, Dubai, UAE. */}
                  {/* <span>House - NE(B) 2/1, Road- 71, Gulshan-02, Dhaka, Bangladesh.</span>  */}

                </p>
              </div>

              <div className="flex mt-5 gap-x-4">
                <Link
                  to="https://www.facebook.com/smitsolution.uae"
                  target="_blank"
                >
                  <FaFacebookF className="border rounded-full p-1 text-3xl hover:text-blue-500 hover:border-blue-500"></FaFacebookF>
                </Link>
                <Link
                  to="https://www.linkedin.com/company/smitsolution/"
                  target="_blank"
                >
                  <FaLinkedin className="border rounded-full p-1 text-3xl hover:text-blue-500 hover:border-blue-500"></FaLinkedin>
                </Link>
                <Link
                  to="https://x.com/smitsolutionuae"
                  target="_blank"
                >
                  <FaXTwitter className="border rounded-full p-1 text-3xl hover:text-gray-400 hover:border-blue-500"></FaXTwitter>
                </Link>
                <Link
                  to="https://www.instagram.com/smitsolution.uae/"
                  target="_blank"
                >
                  <FaInstagram className="border rounded-full p-1 text-3xl hover:text-pink-600 hover:border-orange-600"></FaInstagram>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute right-10 top-10 z-[-1] ">
          <svg
            width={75}
            height={75}
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
              fill="url(#paint0_linear_1179_4)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_4"
                x1="-1.63917e-06"
                y1="37.5"
                x2={75}
                y2="37.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13C296" stopOpacity="0.31" />
                <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
      <p className="text-center text-sm md:text-base lg:mt-5 mt-3 md:font-semibold">
        Copyright © SRE IT Solution 2024. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
