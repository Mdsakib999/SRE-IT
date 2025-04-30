import { Link, useParams } from "react-router-dom";
import { services } from "../../utils/service";
import { useEffect } from "react";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { FaChevronRight } from "react-icons/fa";
import PricingCards from "../../Components/PricingCard";

const ServiceDetails = () => {
  const { title } = useParams();
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

        <PricingCards />

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
