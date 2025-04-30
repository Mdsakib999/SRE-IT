import { Link, useParams } from "react-router-dom";
import { services } from "../../utils/service";
import { useEffect } from "react";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { FaChevronRight } from "react-icons/fa";
const ServiceDetails = () => {
  const { title } = useParams(); // Assuming you are using React Router for navigation
  useDocumentTitle(`Service | SM IT Solution | ${title}`);
  const plainTitle = title.split("-").join(" ");
  const service = services.find(
    (service) => service.title.toLowerCase() == plainTitle.toLowerCase()
  );
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  if (!service) {
    return <p>Service not found.</p>;
  }
  const handelClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className=" min-h-screen p-4 md:p-8 md:mt-20  py-32">
      <div className="mx-auto p-8">
        {/* Service Overview */}

        <div className="flex items-center justify-center mb-8">
          <service.logo className="text-orange-400 text-5xl mr-4" />
          <p className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-800 ">
            {service.title}
          </p>
        </div>
        <p className="text-lg md:text-xl lg:text-xl text-gray-600 mb-6 leading-relaxed tracking-wide text-center lg:w-[50%] mx-auto">
          {service.description}
        </p>
        <p className="text-base text-gray-700 leading-relaxed mb-8 lg:w-[80%] text-center lg:text-xl mx-auto">
          {service.details}
        </p>
        {/* Gradient */}
        <div className="relative">
          {/* Orange Gradient */}
          <div className="background-gradient w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] absolute top-[30%] right-[20%] md:top-[20%] md:right-[15%] lg:top-[25%] lg:right-[20%] rounded-full -z-10 inset-7"></div>

          {/* Blue Gradient 1 */}
          <div className="background-gradient-blue w-[40vw] h-[40vw] max-w-[380px] max-h-[380px] absolute top-[40%] left-[30%] md:top-[30%] md:left-[25%] lg:top-[35%] lg:left-[30%] rounded-full -z-10"></div>

          {/* Blue Gradient 2 */}
          <div className="background-gradient-blue w-[40vw] h-[40vw] max-w-[380px] max-h-[380px] absolute top-[45%] left-[10%] md:top-[35%] md:left-[5%] lg:top-[40%] lg:left-[10%] rounded-full -z-10"></div>
        </div>
        {/* Key Features Section */}
        <div className=" mt-8 lg:mt-16 mb-12 flex justify-between content-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => {
                const [title, description] = feature.split(": ");
                return (
                  <div
                    key={index}
                    className="bg-white/60 backdrop-blur-md shadow-sm p-4 rounded-lg border  hover:border-gray-400 transition-shadow duration-300"
                  >
                    <h3 className="text-lg font-semibold mb-5 mt-5 text-orange-600  flex items-center justify-start  -ml-2">
                      <FaChevronRight className="w-8 " />
                      {title}
                    </h3>
                    <p className="text-gray-700 pb-2 ps-2">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Related Services Section */}
        <div className="mb-12 ">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 lg:mb-6">
            Related Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-11 lg:gap-28">
            {service.relatedServices.map((relatedService, index) => (
              <div
                key={index}
                className="flex items-center p-10 bg-white shadow-lg  border rounded-lg hover:bg-gray-100 transition-all duration-300 "
              >
                <relatedService.logo className="text-orange-400 text-3xl mr-4" />
                <Link
                  onClick={handelClick}
                  to={relatedService.link}
                  className="text-gray-800 text-lg font-semibold hover:underline"
                >
                  {relatedService.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}

        <div className="relative text-center mt-12 py-10 ">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 ">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us today to learn more about how our services can help your
            business grow and succeed.
          </p>
          <Link to={"/contact"}>
            <button
              type="submit"
              className="group mt-2 border-orange-400 hover:border-2 relative h-10 md:h-12 w-32 md:w-44 overflow-hidden rounded-ss-xl rounded-ee-xl font-bold md:text-lg shadow-lg shadow-orange-100 hover:shadow-lg"
            >
              <div className="absolute inset-0 group-hover:w-3 bg-gradient-to-r from-orange-500 to-yellow-300 transition-all duration-[350ms] ease-out w-full"></div>
              <span className="relative group-hover:text-black text-white">
                Contact Us
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
