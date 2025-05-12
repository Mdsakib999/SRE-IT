import React from "react";
import imgMission from "../../assets/missionAndVision/MISSION.png";
import imgVision from "../../assets/missionAndVision/VISION.png";
import { motion } from "framer-motion";

// Variants for container and children
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};
const textVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const sections = [
  {
    id: 1,
    title: "Our Mission",
    highlight: "Mission",
    description:
      "At SRE IT Solutions, we aim to provide businesses with cutting-edge and reliable digital tools tailored to their specific needs. Our mission is to simplify technology, enabling our clients to succeed in the rapidly evolving digital landscape with our specialized services in web development, e-commerce, digital marketing, and custom apps.",
    image: imgMission,
    imageFirst: false,
  },
  {
    id: 2,
    title: "Our Vision",
    highlight: "Vision",
    description:
      "We want to be at the forefront of digital transformation on a global scale, helping businesses everywhere thrive with top-notch technology and exceptional service. Our goal is to build strong, lasting partnerships by consistently providing effective, customer-focused solutions that boost growth, efficiency, and innovation.",
    image: imgVision,
    imageFirst: true,
  },
];

const MissionAndVision = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-16"
      >
        {sections.map(
          ({ id, title, highlight, description, image, imageFirst }) => (
            <div
              key={id}
              className={`flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md overflow-hidden transform transition-transform hover:scale-[1.02] hover:shadow-lg p-4 border`}
            >
              {imageFirst && (
                <motion.div
                  variants={imageVariants}
                  className="w-full md:w-1/2"
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </motion.div>
              )}

              <motion.div
                variants={textVariants}
                className="w-full md:w-1/2 p-10 flex flex-col justify-center text-center md:text-left"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  {title.replace(highlight, "")}
                  <span className="text-orange-500">{highlight}</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {description}
                </p>
                <button className="self-center md:self-start inline-block px-6 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors">
                  Learn More
                </button>
              </motion.div>

              {!imageFirst && (
                <motion.div
                  variants={imageVariants}
                  className="w-full md:w-1/2"
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </motion.div>
              )}
            </div>
          )
        )}
      </motion.div>
    </div>
  </section>
);

export default MissionAndVision;
