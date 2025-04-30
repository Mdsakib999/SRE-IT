
import { FaLightbulb } from "react-icons/fa"; // Importing icons for the lightbulbs
import { BsQuestionCircle } from "react-icons/bs"; // Importing icons for the question marks
import { Link } from "react-router-dom";

const AboutContact = () => {
  return (
    <div className="md:mb-20 md:mt-32 w-[90%] md:w-[80%] mx-auto rounded-md shadow-orange-100 shadow-xl relative bg-orange-50 py-16 px-5 flex items-center justify-center overflow-hidden ">
      {/* Dotted SVGs on both sides */}
      <div
        className="absolute inset-y-0 left-0 w-20 md:w-full h-full bg-cover bg-left opacity-40"
        style={{
          backgroundImage:
            'url("https://i.ibb.co.com/cbpMXLv/dot-IMG-removebg-preview.png")',
        }}
      ></div>
      <div
        className="absolute inset-y-0 right-0 w-20  opacity-60 h-full bg-cover bg-right"
        style={{
          backgroundImage:
            'url("https://i.ibb.co.com/cbpMXLv/dot-IMG-removebg-preview.png")',
        }}
      ></div>

      {/* Background icons */}
      <FaLightbulb className="absolute top-5 left-2 md:top-5 md:left-[15%] text-yellow-300 opacity-70 text-4xl md:text-6xl" />
      <FaLightbulb className="absolute md:top-5 right-10 md:right-[20%] rotate-45 text-yellow-300 opacity-50 text-4xl md:text-6xl" />
      <BsQuestionCircle className="absolute bottom-16 left-20 md:bottom-5 md:left-[25%] text-green-300 opacity-80 rotate-12 text-4xl md:text-6xl" />
      <BsQuestionCircle className="absolute bottom-2 right-[30%] md:bottom-10  md:right-[10%] -rotate-45 text-green-300 opacity-50 text-4xl md:text-8xl" />

      {/* Text and button */}
      <div className="text-center relative z-10">
        <p className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">
          Have Any Idea? <span className="text-orange-600">Let’s Turn it Into Reality.</span>
        </p>
        <Link
          to="/contact"
          className="mt-10 bg-gradient-to-r from-orange-500 to-yellow-300 text-white font-bold py-3 px-6 rounded-ss-xl rounded-ee-xl hover:from-orange-600 hover:to-yellow-400 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50 transition duration-300 ease-in-out inline-block"
        >
          Contact Now
        </Link>
      </div>

    </div>
  );
};

export default AboutContact;
