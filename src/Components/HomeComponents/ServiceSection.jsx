import { FaDatabase, FaReact, FaNodeJs, FaLock } from "react-icons/fa";
import { SiExpress, SiRedux, SiMongodb, } from "react-icons/si";
import { FaChartLine, FaBullhorn, FaSearchDollar, FaHandshake } from "react-icons/fa";
import { SiGoogleanalytics, SiMailchimp, SiSocialblade, SiAdobexd } from "react-icons/si"
import img from "../../assets/DevelopmentImg.png";
import img2 from "../../assets/Digital.png";
import img4 from "../../assets/RoundPNG.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { services } from "../../utils/service";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const sectionVariants1 = {
    hidden: { opacity: 0, x: 50 },  // Slide in from the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: .1 } }
};
const sectionVariants = {
    hidden: { opacity: 0, x: -50 },  // Slide in from the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: .5 } }
};
const ServiceSection = () => {
    const marketingFeatures = [
        {
            feature: "Facebook & Instagram Ads Management",
            icon: FaChartLine
        },
        {
            feature: "Effective SEO and SEM Techniques",
            icon: FaSearchDollar
        },
        {
            feature: "Comprehensive Social Media Marketing",
            icon: SiSocialblade
        },
        {
            feature: "Advanced Google Analytics & Ads Integration",
            icon: SiGoogleanalytics
        },
        {
            feature: "Creative Advertising Campaigns",
            icon: FaBullhorn
        },
        {
            feature: "Email Marketing with Mailchimp",
            icon: SiMailchimp
        },
        {
            feature: "Brand Development and Management",
            icon: FaHandshake
        },
        {
            feature: "Online Reputation Management",
            icon: SiAdobexd
        }
    ];
    const mernFeatures = [
        {
            feature: "Full-Stack Development Expertise",
            icon: FaReact
        },
        {
            feature: "Efficient RESTful APIs with Express.js",
            icon: SiExpress
        },
        {
            feature: "Robust Backend with Node.js",
            icon: FaNodeJs
        },
        {
            feature: "Responsive Frontend with React.js",
            icon: FaReact
        },
        {
            feature: "Scalable Databases Integration",
            icon: SiMongodb
        },
        {
            feature: "Real-Time Data Handling with WebSockets",
            icon: FaDatabase
        },
        {
            feature: "Custom Web Development Solutions",
            icon: SiRedux
        },
        {
            feature: "Secure Authentication with Maintenance & Support",
            icon: FaLock
        }
    ];
    const sliceServiceData = services.slice(2, 5)
    return (
        <div className="md:mb-6">
            <div className="  bg-neutral-50 pb-36">
                <div className="grid items-center grid-cols-1 md:grid-cols-2 section-container py-20 gap-x-5 ">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={sectionVariants}
                        viewport={{ once: false }}
                        className="h-fit overflow-hidden md:overflow-visible py-10 md:py-0">
                        {/* here include image  */}
                        <div className="flex justify-center items-center relative ">
                            <img className="z-10" src={img} alt="Development" />
                            <img className="absolute spin-slow " src={img4} alt="spin" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={sectionVariants1}
                        viewport={{ once: false }}
                    >
                        <div className="relative  mb-1 px-2 md:px-0">
                            <h1 className="text-2xl  font-bold mt-7">Our Ser<span className="text-orange-400 " >vic</span>e</h1>
                            <span className="inline-block bg-orange-400 size-8 rounded-full bg-opacity-60 absolute top-[-10px] left-[-10px] md:left-[-23px] animate-pulse "></span>

                        </div>
                        <p className="text-2xl md:text-4xl font-bold px-2 md:px-0">Design & Development</p>
                        <p className="mt-6 text-sm text-gray-500 px-2 md:px-0">Web development is the process of building and maintaining websites, involving coding, design, and ensuring functionality and user experience</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 px-2 md:px-0">
                            {mernFeatures.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center bg-white group shadow-md hover:bg-orange-400 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out space-x-3 p-3 rounded-xl "
                                >
                                    <item.icon className="text-xl text-orange-400 group-hover:text-white transition-all duration-300 ease-in-out" />
                                    <p className="text-black group-hover:text-white transition-all duration-300 ease-in-out">
                                        {item.feature}
                                    </p>
                                </div>
                            ))}
                        </div>


                    </motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center section-container py-10 md:py-20 mb-6 md:mb-0  gap-x-5 ">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={sectionVariants}
                        viewport={{ once: false }}
                    >
                        <div className="relative  mb-3 px-2 md:px-0 ">
                            <h1 className="text-2xl  font-bold mt-7">Our Ser<span className="text-orange-400 " >vic</span>e</h1>
                            <span className="inline-block bg-orange-400 size-8 rounded-full bg-opacity-60 absolute top-[-10px] left-[-10px] md:left-[-23px] animate-pulse "></span>

                        </div>
                        <p className="text-2xl md:text-4xl font-bold px-2 md:px-0">Digital Marketing</p>
                        <p className="mt-6 text-sm text-black px-2 md:px-0">
                            Digital marketing involves leveraging data and technology to promote brands, engage audiences, and drive business growth through various online channels.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5  px-2 md:px-0">
                            {marketingFeatures.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center group bg-white shadow-md hover:bg-orange-400 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out space-x-3 p-3 rounded-xl"
                                >
                                    <item.icon className="text-xl text-orange-400 group-hover:text-white transition-all duration-300 ease-in-out" />
                                    <p className="text-black group-hover:text-white transition-all duration-300 ease-in-out">
                                        {item.feature}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={sectionVariants1}
                        viewport={{ once: false }}
                        className="h-fit">
                        {/* Lottie animation for digital marketing */}
                        <div className="flex justify-center items-center">
                            <img className="z-10 mt-6 md:mt-0" src={img2} alt="Digital Marketing" />
                            <img className="absolute spin-slow w-[60%] md:w-[31%] mt-5 md:mt-0 " src={img4} alt="spin" />
                        </div>
                    </motion.div>
                </div>

            </div>
            <div className="section-container -mt-[120px] ">
                <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-4">
                    {
                        sliceServiceData.map((item, index) => (
                            <div key={index} className=" border bg-white shadow-xl p-8 rounded-lg hover:shadow-lg hover:shadow-orange-300">
                                {/* <TbWorldDollar className="lg:text-6xl text-5xl text-orange-500" /> */}
                                <item.logo className="lg:text-6xl text-5xl text-orange-500" />
                                <p className="my-5  font-bold text-2xl lg:text-3xl">{item.title}</p>
                                <p>
                                    {item.description}
                                </p>

                                <Link to={`/service/${item.title.split(' ').join('-').toLowerCase()}`} className=" mt-4 flex items-center gap-x-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 from-10%  to-yellow-300 to-90%">
                                    Read More{" "}
                                    <FaArrowRightLong className="text-orange-400 mt-[0.20rem]" />
                                </Link>
                            </div>
                        ))
                    }
                </div>

                <Link to={'/services'} className="p-4 flex flex-col items-end justify-end mr-1 mt-8">
                    <div className="cursor-pointer">
                        <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-orange-600 transition duration-300 ease-out border-2 border-orange-500 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">See more</span>
                            <span className="relative invisible">See more</span>
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ServiceSection;