/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "../Shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { testimonials } from "../../utils/tastimonials";

const Testimonials = () => {
    return (
        <div className="section-container ">
            <SectionTitle
                title={"Voices of Trust"}
                description={"Client Testimonials That Tell The Whole Story"}
            />
            <div>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={50}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true

                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
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
                            spaceBetween: 40,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {testimonials.map(({ id, name, position, image, testimonial }) => (
                        <SwiperSlide key={id}>
                            <div className="border h-[360px]  p-6 my-10 mx-3 rounded-xl shadow-xl flex flex-col justify-between transform transition-transform hover:-translate-y-3 duration-500  hover:shadow-orange-100 ">
                                <div className="mb-6 ">
                                    <FaQuoteLeft className="text-[#f6682782] mb-4 animate-shake" size={36} />
                                    <p className="text-gray-700 font-light italic leading-relaxed text-lg">
                                        "{testimonial}"
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <img src={image} className="w-16 h-16 rounded-full object-cover mr-4 shadow-lg border-2 border-orange-100" alt={name} />
                                    <div>
                                        <p className="text-lg font-bold text-gray-800">{name}</p>
                                        <p className="text-sm text-orange-600">{position}</p>
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

export default Testimonials;