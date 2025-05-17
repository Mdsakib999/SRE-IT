/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  FaLocationDot,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaSquareFacebook,
  FaSquareInstagram,
  FaInstagram,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

const HomeContact = () => {
  return (
    <div className="relative overflow-hidden py-16">
      {/* Decorative Blurred Background */}
      <div className="hidden md:block absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-orange-300 to-amber-400 opacity-30 filter blur-3xl transform translate-x-1/2 -translate-y-2/8 rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-300 to-indigo-400 opacity-30 filter blur-3xl transform -translate-x-1/2 translate-y-1/2 rounded-full" />

      <div className="container mx-auto px-6 lg:px-24 relative z-10 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
            Have Any Project?{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-600 to-amber-400">
              Let’s Talk
            </span>
          </h2>
          <p className="mt-4 text-gray-600 lg:w-2/3 mx-auto">
            Have an idea or project? Let your dreams become reality. From
            concept to launch, we're here to help every step of the way.
          </p>
        </div>
        <div className="flex flex-col mx-auto max-w-5xl md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden border">
          {/* Left: Contact Form */}
          <div className="md:w-1/2 p-8 space-y-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-none focus:ring-1 focus:ring-orange-300 transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-none focus:ring-1 focus:ring-orange-300 transition"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-none focus:ring-1 focus:ring-orange-300 transition"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-none focus:ring-1 focus:ring-orange-300 transition"
              />
              <button
  type="submit"
  className="relative inline-block px-6 py-3 font-semibold rounded-lg overflow-hidden group border-2 border-orange-400 transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-300 hover:border-white hover:text-white"
>
  <span className="relative">Send Message</span>
</button>
            </form>
          </div>

          {/* Right: Contact Info & Social Links */}
          <div className="md:w-1/2 p-8 bg-black relative">
            <h3 className="text-2xl font-semibold text-orange-400 mb-6">
              Contact Information
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-4 p-4 hover:bg-gray-800 hover:text-white  rounded-lg transition">
                <FaLocationDot className="mt-1 text-2xl text-orange-400 hover:text-orange-500" />
                <div className="text-sm leading-relaxed">
                  <p className="font-medium ">SRE IT Solution</p>
                  <p>Nasirabad Properties Road 1 </p>
                  <p>Chittagong, Bangladesh.</p>
                </div>
              </li>
              <li className="flex items-center gap-4 p-4 hover:bg-gray-800 hover:text-white rounded-lg transition">
                <MdEmail className="text-2xl text-orange-400" />
                <p>contact@sreit.com</p>
              </li>
              <li className="flex items-center gap-4 p-4 hover:bg-gray-800 hover:text-white rounded-lg transition">
                <BiSolidPhoneCall className="text-2xl text-orange-400" />
                <p>+880 1700 000 456</p>
              </li>
            </ul>
            {/* Social Icons Bottom Right */}
            <div className="absolute bottom-6 right-6 flex items-center gap-6 ">

              <a
                href="#"
                aria-label="Twitter"
                className="text-blue-500 transform hover:scale-110 transition  bg-whit"
              >
                <FaSquareFacebook size={24} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="text-blue-500 transform hover:scale-110 transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-blue-500  transform hover:scale-110 transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-pink-700 transform hover:scale-110 transition"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
