import SectionTitle from "../Shared/SectionTitle";
import { motion } from 'framer-motion';
const Augment = () => {

  const timelineData = [
    {
      id: '1',
      title: 'Checklist',

      description: 'We make sure we have covered customer’s requirements & have everything that is needed for the project.',
      icon: '📝', // You can use any icon or add an actual image
      color: 'bg-blue-600',
    },
    {
      id: '2',
      title: 'Sitemap',
      description: 'We organize and manage the content of the website in a hierarchy so that it would be easy for users to navigate.',
      icon: '🗺️',
      color: 'bg-teal-500',
    },
    {
      id: '3',
      title: 'Prototype',
      description: 'We create a proof of concept to check how a website will load & work in a browser; after this, we prepare a design for it.',
      icon: '💻',
      color: 'bg-orange-500',
    },
    {
      id: '4',
      title: 'Coding',
      description: 'Next, we start coding to develop your fully working and attractive website.',
      icon: '🔧',
      color: 'bg-teal-500',
    },
    {
      id: '5',
      title: 'Launch',
      description: 'Finally, we check the websites for their performance and any issues, and after testing, we launch them on the internet.',
      icon: '🚀',
      color: 'bg-orange-500',
    },
  ];

  const sectionVariants1 = (id) => ({
    hidden: { opacity: 0, x: 60 },  // Slide in from the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: id / 10 } }
  })
  return (
    <div className=" pt-10 pb-6 relative  overflow-hidden">

       {/* Background Blobs */}
      <div className="absolute hidden md:block top-0 left-0 w-[400px] h-[400px] bg-pink-200 rounded-full filter blur-[120px] opacity-50 z-0" />
      <div className="absolute hidden md:block bottom-0 right-0 w-[400px] h-[400px] bg-orange-200 rounded-full filter blur-[120px] opacity-40 z-0" />


      <SectionTitle
        title={"Our Features"}
        description={"What Makes Us The Preferred Choice?"}
      />
      <div

        className="max-w-7xl mx-auto pt-12 md:pb-20 px-4 md:px-3 ">
        <div className="flex flex-col md:flex-row md:justify-between gap-x-6">
          {timelineData.map((step, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants1(step.id)}
              viewport={{ once: false }}
              key={index} className="flex flex-col items-center mb-10 md:mb-0 md:flex-1 py-4 px-2 rounded-tr-[40px] rounded-b-[35px] border shadow-lg shadow-orange-100 hover:-translate-y-2 duration-500 hover:shadow-md f bg-gray-0  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50">
              <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white mb-4`}>
                <span className="text-xl">{step.icon}</span>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold">{step.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Augment;
