import { FaAward, FaRegHandshake, FaBullhorn, FaGlobe, FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const sectionVariants1 = {
    hidden: { opacity: 0, x: 50 },  // Slide in from the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: .9 } }
};
const sectionVariants = {
    hidden: { opacity: 0, x: -50 },  // Slide in from the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: .9 } }
};



const Award = () => {
    const awardArray = [
        {
            id: '1',
            subtitle: 'All Over World',
            title: '95% Client Retention Rate',
            icon: FaAward
        },
        {
            id: '2',
            subtitle: 'Sponsored 5+ Events ',
            title: 'Community Engagement',
            icon: FaBullhorn
        },
        {
            id: '3',
            subtitle: 'Globally Trusted',
            title: 'Customer Satisfaction',
            
            icon: FaRegHandshake
        },
        {
            id: '4',
            subtitle: 'Multi-Brands United',
            title: 'Trusted by Leading Brands',
            icon: FaGlobe
        },
    ];
    const achievement = [
        {
            id: '1',
            title: '50+ Happy Clients',
            description: "Our dedication to client satisfaction has resulted in over 50,000 happy clients worldwide, trusting our services for their business success."
        },
        {
            id: '2',
            title: '15+ Projects Delivered',
            description: "With a proven track record, we have successfully delivered over 100 projects across various industries, ensuring top-notch quality and innovation."
        },
        {
            id: '3',
            title: '3+ Years in Business',
            description: "Established over a decade ago, we have consistently evolved and adapted to the ever-changing tech landscape, solidifying our position as an industry leader."
        }
    ];


    return (
        <div className="mt-8 section-container  p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-2  shadow-md bg-white"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: false }}
                >
                    {awardArray.map((item) => (
                        <div
                            key={item.id}
                            className={`flex flex-col justify-center items-center p-4 border ${item.id === '1' ? 'border-b-2 ' : ''} ${item.id === '2' ? 'border-b-2 border-r-2 ' : ''} ${item.id === '3' ? 'border-t-2 md:border-t-0' : ''} ${item.id === '4' ? 'border-t-2 md:border-t-0 border-r-0' : ''}`}
                        >
                            <item.icon className="text-5xl md:text-5xl lg:text-7xl text-orange-400 mb-4" />
                            <h3 className="text-xl font-semibold text-center">{item.title}</h3>
                            <p className="text-sm text-center text-gray-500 mt-2">{item.subtitle}</p>
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants1}
                    viewport={{ once: false }}
                >
                    <p className='md:text-3xl text-2xl  font-bold'>Achievements & Recognition</p>
                    <div className='mt-4'>
                        {
                            achievement.map(item => (
                                <div key={item.id} className="flex items-start justify-center gap-6 mb-6">
                                    {/* Icon Section */}
                                    <div className="flex-shrink-1 ">
                                        <span className="bg-orange-500 opacity-70 w-8 h-8 md:w-12 md:h-12 flex justify-center items-center rounded-full">
                                            <FaCheck className="text-white text-2xl" />
                                        </span>
                                    </div>

                                    {/* Text Content */}
                                    <div>
                                        <p className="text-lg font-bold text-gray-800">{item.title}</p>
                                        <p className="text-gray-600 mt-1">{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Award;