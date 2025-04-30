import { Link } from 'react-router-dom';
import img1 from './../../assets/our story/1968.jpeg';
import img2 from './../../assets/our story/1968.jpeg';
import img3 from './../../assets/our story/business-people-standing-row-with-thumbs-up.jpg';

const CareerBanner = ({ scrollToJob }) => {
    return (
        <div className="w-full text-center relative py-20 md:py-32 overflow-hidden ">
            {/* Background Shaking Images */}
            <img
                src={img1}
                alt="Image 1"
                className="absolute top-4 left-[10%] w-16 h-16 md:w-20 md:h-20 object-cover rounded-md animate-shake "
            />
            <img
                src={img3}
                alt="Image 2"
                className=" absolute top-[10%] md:right-[15%] right-[10%] w-16 h-16 md:w-20 md:h-20 object-cover rounded-md animate-shake2 "
            />
            <img
                src={img3}
                alt="Image 3"
                className="absolute bottom-[15%] left-[8%] w-16 h-16 md:w-20 md:h-20 object-cover rounded-md animate-shake2 "
            />
            <img
                src={img1}
                alt="Image 4"
                className="absolute bottom-[5%] right-[8%] w-16 h-16 md:w-20 md:h-20 object-cover rounded-md animate-shake "
            />
            <img
                src={img2}
                alt="Image 5"
                className=" absolute top-0 md:top-[1%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-16 h-16 md:w-20 md:h-20 object-cover rounded-md animate-shake "
            />

            {/* Text Content */}
            <p className="text-xl md:text-2xl lg:text-4xl">Join Our Journey,</p>
            <p className="text-xl md:text-2xl lg:text-4xl font-bold mt-4 md:mt-6">
                <span className="text-orange-400">Where Your Excellence </span>
                <span>Leads the Way!</span>
            </p>
            <p className="text-sm md:text-base lg:w-[60%] mx-auto my-6 md:my-8 px-3 md:px-0">
            Ready to leave your mark? This is your chance to join our expanding team and make an impact. Explore opportunities at 6amTech and find the perfect role that matches your unique talents.
            </p>

            <button
                  onClick={scrollToJob}
                  className="group mt-2 border-orange-400 hover:border-2 relative h-10 md:h-12 w-36 md:w-44 overflow-hidden rounded-ss-xl rounded-ee-xl font-bold md:text-lg shadow-lg shadow-orange-100 hover:shadow-lg "
                >
                  <div className="absolute inset-0 group-hover:w-3 bg-gradient-to-r from-orange-500 to-yellow-300 transition-all duration-[350ms] ease-out w-full"></div>
                  <span className="relative group-hover:text-black text-white">
                    View Open Jobs
                  </span>
            </button>

            
        </div>
    );
};

export default CareerBanner;
