import { Link } from "react-router-dom";
// import bgImage from '../../assets/pexels-pixabay-327533.jpg';
import { services } from "../../utils/service";
import { useEffect } from "react";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

const Service = () => {
  useDocumentTitle(`Service | SM IT Solution `);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="">
      <div className="relative w-full md:h-[55vh] pt-32 text-center overflow-hidden ">
        {/* Gradient div */}
        <div className="background-gradient-blue w-56 h-56 md:w-96 md:h-80 absolute top-[-5%] right-[25%] md:top-[-1%] md:right-[-5%] rounded-full"></div>

        {/* Background Image */}
        <p className="text-2xl md:text-2xl lg:text-4xl font-semibold">
          Our Services
        </p>
        <p className="text-xl md:text-2xl lg:text-4xl px-8 md:px-0 font-semibold md:font-bold mt-4 md:mt-6">
          <span className="text-orange-400">Your growth is our strategy, </span>
          <span>your success is our goal.</span>
        </p>
        <p className="text-sm md:text-base mx-auto my-6 md:my-8 px-3 md:px-5 lg:w-[50%]">
          Empowering your business with a team of seasoned professionals,
          committed to delivering excellence through innovative thinking.
        </p>

        {/* Centered Text */}
        <div className="relative flex justify-center flex-col items-center h-full">
          <h1 className="text-white text-2xl md:text-5xl font-bold text-center">
            Our Services
          </h1>
          <p className="text-slate-300 mt-4 md:w-[50%] hover:text-white text-center px-3 md:px-0"></p>
        </div>
      </div>
      <div className="flex gap-x-8 gap-y-20  px-6 pb-32 relative">
        {/* Gradient div */}
        <div className="background-gradient-blue w-56 h-56 md:w-96 md:h-80 absolute bottom-[-2%] right-[25%] md:bottom-[-15%] md:right-[40%] rounded-full"></div>

        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 shadow-lg rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-orange-100 transition-shadow duration-300 ease-in-out min-h-[400px] flex flex-col"
          >
            <div className="relative p-8 flex-grow flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full mb-6 flex justify-center items-center transition-transform duration-300 group-hover:scale-110">
                <service.logo className="text-4xl text-orange-400 transition-colors duration-300 group-hover:text-orange-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-orange-600">
                {service.title}
              </h2>
              <p className="text-sm text-gray-500 font-medium mb-4 uppercase">
                {service.category}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
            <Link
              to={`/service/${service.title
                .split(" ")
                .join("-")
                .toLocaleLowerCase()}`}
              className="bg-orange-400 text-white text-center py-3 font-semibold rounded-lg mx-6 mb-6 transition-all duration-300 ease-in-out hover:bg-orange-500 transform hover:-translate-y-2"
            >
              See Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
