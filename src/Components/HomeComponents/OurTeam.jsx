import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaRegDotCircle, FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./OurTeam.css"
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const OurTeam = () => {
  const [membersData, setMembersData] = useState([]);

  useEffect(() => {
    fetch("TeamMemberData.json")
      .then((res) => res.json())
      .then((data) => setMembersData(data));
  }, []);


  return (
    <div className="bg-gradient-to-b from-[#fff] via-[#f3cf9427] to-[#fff] my-16 home-special">
      <div className="  mx-auto  section-container">
        

        <h2 className=" text-gray-800  md:text-5xl text-3xl font-semibold md:mb-8 mb-6 text-center">
        Our Expert Team
        </h2>
        <div className="flex justify-center items-center mb-6">
          <FaRegDotCircle className="text-2xl text-orange-600"></FaRegDotCircle>
          <span className="w-24 h-1 bg-orange-500 inline-block"></span>
        </div>
        <p className="text-gray-500  max-w-xl text-center md:w-[50%] w-[90%] mx-auto mb-20">
        Our expert team, united by vision and expertise, is committed to shaping innovative solutions and driving meaningful change.
        </p>

        <Swiper
          slidesPerView={2}
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {membersData?.map((members, index) => (
            <SwiperSlide key={index}>
              <div className="my-20 hover:-translate-y-2 duration-500 ">
                <div className="bg-white shadow-xl hover:shadow-orange-200 hover:shadow-lg relative flex items-end justify-center min-h-[185px] rounded-t-[30px] rounded-b-[5px] border">
                  <Link
                    to="/"
                    className="absolute inset-0 z-0"
                  >
                    {/* Invisible layer to make the entire card clickable for internal navigation */}
                  </Link>
                  <div className="relative z-10">
                    <div className="absolute -top-[100px] z-10 left-1/2 -translate-x-1/2 bg-white border-2  rounded-full flex justify-center items-center h-32 w-32 overflow-hidden">
                      <img
                        src={members.Image}
                        alt={members.name}
                        className="w-full rounded-full"
                      />
                    </div>
                    <p className="text-xl font-medium text-center mt-10">
                      {members.name}
                    </p>
                    <p className="text-lg font-normal mb-1 text-center">
                      {members.designation}
                    </p>
                    <hr className="w-full border-b-2" />
                    <div className="my-3 text-xl flex justify-evenly">
                      <a
                        href={members.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className="hover:text-blue-600 transition-colors duration-300"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href={members.twiterLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter Profile"
                        className="hover:text-blue-600 transition-colors duration-300"
                      >
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  );
};

export default OurTeam;
