/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import useDocumentTitle from "../Hooks/useDocumentTitle";
import { useEffect } from "react";

const Contact = () => {
  useDocumentTitle("Contact | SRE It Solution");
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="overflow-x-hidden relative mt-12 md:mt-20">
      <div className="text-center mt-16 mb-10">
        <p className="text-3xl lg:text-5xl font-bold animate-fade-up tracking-wide">
          Contact Us
        </p>
        <p className="text-lg text-gray-500 pt-4  lg:w-[50%] w-[95%] m-auto ">
          From Seed to Success, We're Here to Help. To make the future brighter
          and more connected, let's work together to bring out the best in your
          company.
        </p>
      </div>

      <div className="lg:w-[35%]  mx-auto">
        <img
          src="https://i.ibb.co/k9ybqq6/flat-man-illustration-customer-support-23-2148889244.jpg"
          alt=""
        />
      </div>

      {/* Gradient div */}
      <div className="background-gradient w-72 h-72 absolute top-[10px] right-[-50px] rounded-full "></div>

      <div className="background-gradient-blue w-80 h-80 absolute top-[30%] left-[-10%] rounded-full"></div>

      {/* experiment */}

      <div className=" w-[90%] mx-auto ">
        <div className="lg:w-[90%]  lg:mx-auto lg:mt-16">
          <div className="lg:flex justify-between text-center">
            <div>
              <MdEmail className="lg:text-7xl text-6xl inline-block bg-orange-100 rounded-full p-3 text-orange-500 mt-10 lg:mt-0" />
              <p className="font-bold text-xl lg:mt-7 mt-4 mb-4">
                Email Address
              </p>
              <p className="text-lg hover:underline">info@smitsolution.com.bd</p>
              <p className="text-lg hover:underline">smitsolutionbd01@gmail.com</p>
            </div>

            <div>
              <BiSolidPhoneCall className="lg:text-7xl text-6xl inline-block bg-orange-100 rounded-full p-3 text-orange-500 mt-10 lg:mt-0" />
              <p className="font-bold text-xl lg:mt-7 mt-4 mb-4">
                Phone Number
              </p>
              <p className="text-lg">+88 01711646758</p>
              <p className="text-lg">+88 01312113575</p>
            </div>

            <div>
              <FaLocationDot className="lg:text-7xl text-6xl inline-block bg-orange-100 rounded-full p-3 text-orange-500 mt-10 lg:mt-0" />
              <p className="font-bold text-xl lg:mt-7 mt-4 mb-4">
                Our Office Address
              </p>
              <p className="text-lg">
                Nasirabad Properties Road 1, House B5 <br /> Chittagong,
                Bangladesh.
              </p>
              <p className="text-lg mt-2 "> Al Muteena St, Dubai <br /> UAE.

              {/* House - NE(B) 2/1, Road- 71, Gulshan-02, <br /> Dhaka, Bangladesh. */}

              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Address part */}
      <div className=" lg:w-[90%] md:w-[95%] mx-auto flex flex-col md:flex-row items-center gap-7 lg:gap-8 justify-between my-16">
        <div className="md:w-1/2  px-3 md:px-0">
          <div className="text-2xl font-bold mb-6 text-center md:text-left ">
            -- Get In Touch --
          </div>
          <form action="#" className="w-full ">
            <div className="flex flex-wrap -mx-2 mb-6">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full h-12 border border-gray-300 rounded px-4 focus:outline-none focus:border-orange-400 transition duration-300"
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full h-12 border border-gray-300 rounded px-4 focus:outline-none focus:border-orange-400 transition duration-300"
                />
              </div>
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full h-12 border border-gray-300 rounded px-4 focus:outline-none  focus:border-orange-400 transition duration-300"
              />
            </div>
            <div className="mb-6">
              <textarea
                cols="30"
                rows="10"
                placeholder="Write your Message..."
                required
                className="w-full h-32 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-400  transition duration-300"
              ></textarea>
            </div>
            <div className="flex items-center">
              {/* <button
                type="submit"
                className="group mt-2  border-2 border-orange-400 hover:border-none relative h-12 w-44 overflow-hidden rounded-ss-xl rounded-ee-xl font-bold text-lg shadow-lg shadow-orange-100 hover:shadow-lg"
              >
                <div className="absolute inset-0 w-3 bg-gradient-to-r from-orange-500 to-yellow-300 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Send Message
                </span>
              </button> */}

              {/* Expriment btn */}
              <button
                type="submit"
                className="group mt-2 border-orange-400 hover:border-2 relative h-12 w-44 overflow-hidden rounded-ss-xl rounded-ee-xl font-bold text-lg shadow-lg shadow-orange-100 hover:shadow-lg"
              >
                <div className="absolute inset-0 group-hover:w-3 bg-gradient-to-r from-orange-500 to-yellow-300 transition-all duration-[350ms] ease-out w-full"></div>
                <span className="relative group-hover:text-black text-white">
                  Send Message
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-[50%] md:w-[60%] w-[92%] lg:h-[300px] md:h-[230px]  mt-5 md:mt-0">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1551.3621125915265!2d91.81420930715574!3d22.361869233611696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd9005629cff9%3A0x134782e81960acf0!2sSM%20IT%20SOLUTION!5e0!3m2!1sen!2sbd!4v1732142892387!5m2!1sen!2sbd"
            // allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
