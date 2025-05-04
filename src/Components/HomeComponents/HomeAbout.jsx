/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import img2 from '../../assets/about2.jpg';
import img1 from '../../assets/about1.jpg';


const HomeAbout = () => {
  return (
    <div className="w-full mt-[-70px] ">
      <section className=" w-[90%] mx-auto pt-20 pb-4 lg:pt-0 ">
        <div className="container mx-auto">
          <div className="md:flex gap-x-6 items-center  justify-between -mx-4 ">
            {/* flex flex-wrap items-center  justify-between -mx-4 b */}
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4 relative ">
                {/* Circle */}
                <span className=" bg-orange-400 size-24 rounded-full bg-opacity-50 absolute md:top-[45%] left-[-6%] animate-pulse z-[-5]"></span>

                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4 ">
                    <img
                      src='https://www.theforage.com/blog/wp-content/uploads/2023/01/software-engineer-career-path-1024x768.jpg'
                      alt=""
                      className="w-full rounded-2xl rounded-tr-[200px]"
                    />
                  </div>
                  <div className="py-3 sm:py-4 ">
                    <img
                      src="https://www.theforage.com/blog/wp-content/uploads/2023/01/types-of-software-engineers-1024x768.jpg"
                      alt=""
                      className="w-full rounded-2xl rounded-bl-[160px]"
                    />
                  </div>
                </div>
                <div className="w-full  xl:w-1/2  object-cover ">
                  <div className="overflow-hidden relative  my-1  hover:rounded-2xl ">
                    <img
                      src="https://img.freepik.com/premium-photo/top-viewbusiness-team-making-tower-out-hands_252847-38238.jpg?w=740"
                      alt=""
                      className="overflow-hidden w-full rounded-2xl hover:scale-110 transition-all duration-500 hover:rounded-2xl "
                    />
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 ">
              <div className="mt-10 lg:mt-0">
                <div className="relative   mb-4  text-primary font-bold ">
                  <p className="text-2xl  font-bold mt-7 ">
                    ABOUT{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-600 to-amber-500 ">
                      US_
                    </span>
                  </p>
                  <span className="inline-block bg-orange-400 size-8 rounded-full bg-opacity-60 absolute top-[-10px] left-[-23px] animate-pulse "></span>
                </div>
                <h2 className="mb-5 text-xl md:text-2xl lg:text-3xl font-bold text-black  sm:text-[40px]/[48px] animate-fade-right animate-once animate-delay-1000 animate-ease-in">
                  Empowering your digital journey with precision solutions.
                </h2>
                <p className="mb-5 text-base text-body-color ">
                  SRE IT Solution is dedicated to leveraging technology to
                  enhance your business's success by offering dependable and
                  innovative IT solutions. Our expertise spans from designing
                  engaging websites to developing sophisticated e-commerce
                  platforms and tailored digital tools, all aimed at fulfilling
                  your unique requirements. We go beyond merely providing services, we deliver customized solutions.
                </p>
                <p className="mb-8 text-base text-body-color ">
                   Our team takes the time to comprehend your needs
                  and produces outcomes that surpass your expectations. With
                  services such as web development, digital marketing, and app
                  maintenance, we ensure your business remains competitive in
                  the ever-changing digital landscape. Let us advance together.
                  We are here to guide you on your digital journey and uncover
                  new possibilities for your organization.
                </p>

                {/* <button className="my-5 bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500 text-white font-bold py-2 px-6 rounded-ss-xl rounded-ee-xl focus:outline-none focus:shadow-outline" >Get In Touch</button> */}
                <Link to="/about">
                  <button
                    type="submit"
                    className="group mt-2 border-orange-400 hover:border-2 relative h-12 w-44 overflow-hidden rounded-ss-xl rounded-ee-xl font-bold text-lg shadow-lg shadow-orange-100 hover:shadow-lg"
                  >
                    <div className="absolute inset-0 group-hover:w-3 bg-gradient-to-r from-orange-500 to-yellow-300 transition-all duration-[350ms] ease-out w-full"></div>
                    <span className="relative group-hover:text-black text-white">
                      Learn More
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* https://img.freepik.com/free-vector/brainstorming-concept-landing-page_23-2148298375.jpg?w=996&t=st=1714755336~exp=1714755936~hmac=b428c9b6f79aa9fda647a53dc14bb709bba53cb08da110a0468676b8e052ccc7 */}
    </div>
  );
};

export default HomeAbout;
