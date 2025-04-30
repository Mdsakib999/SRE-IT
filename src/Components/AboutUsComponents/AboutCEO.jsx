import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa'; // Importing the quote icon

const AboutCEO = () => {
  return (
    <div className="flex flex-col items-center md:mt-20 mt-12 mb-12 ">
      {/* Header Text */}
      <p className="text-2xl md:text-4xl lg:text-4xl w-[80%] md:w-[65%] lg:w-[40%] lg:leading-[45px] mx-auto text-center font-semibold text-gray-900 md:leading-[60px]">
      Introducing the Visionary  <span className="text-orange-500">Behind Our Success!</span>
      </p>
      
      {/* Main container */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-10 w-4/5">
        
        {/* Left side: Image with Blob */}
        <div className="relative md:w-1/2">
          {/* Blob Shape - Custom SVG or Tailwind custom class */}
          <div className="absolute  rounded-full w-full h-full ">
            {/* Add the blob image or background here */}
          </div>
          <img
            src="https://i.ibb.co.com/MZn5D0H/magicpattern-blob-1726186601113.png" // Replace this with the actual image path
            alt="CEO"
            className="w-full rounded-lg shadow-l"
          />
        </div>
        
        {/* Right side: Text and Icon */}
        <div className="flex flex-col md:w-[70%] lg:w-1/2 lg:ml-10 md:mt-6 lg:mt-0 ">
          {/* Quote Icon */}
          <FaQuoteLeft className="text-orange-300 opacity-40 text-4xl md:text-5xl lg:text-6xl -mb-6 -ml-5"/>
          
          {/* Text */}
          <p className=" md:text-lg text-gray-700">
          From our humble beginnings as a tech startup, our journey has been nothing short of remarkable. What drives us? A passionate team of experts and a clear, unwavering vision. We're excited to continue delivering transformative tech solutions across diverse industries in the future.
          </p>
          
          {/* CEO Details */}
          <p className="mt-5 font-bold text-xl text-gray-900">Shariar Rahaman</p>
          <p className="text-gray-600">Founder & CEO</p>
          <p className="text-gray-600">SM IT SOLUTION</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCEO;
