import { HiMiniCheckBadge } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import animation from "./../../../public/NtA1Pn0jDI.json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <>
      {/* h-[calc(100vh-100px)] */}
      <div
        className="lg:min-h-[100vh] 2xl:min-h-[80vh] scale-x-[-1] pt-32 md:pt-20  relative overflow-hidden  xl:pr-5 xl:pb-20 mb-32 b bg-black text-white"
        style={{
          background: `url("") no-repeat center center / cover opacity-5`,
        }}
      >
        {/* Gradient div */}
        <div className="background-gradient-blue w-80 h-80 absolute top-0 right-[-40%] md:right-[-10%] rounded-full "></div>

        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center  h-full section-container scale-x-[-1] md:mt-4 ">
          <div className=" flex items-center ">
            <div className="text-center md:text-left  md:mt-10">
              <p className="font-semibold md:text-xl text-2xl lg:text-2xl mb-6 font-mono">Are You Looking For Qualified IT Service Provider<span className="text-red-600">?</span></p>
              <p className="text-xl md:text-2xl xl:text-3xl font-bold ">
                <span className="text-xl md:text-3xl xl:text-4xl font-manrope  leading-snug text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-600 to-amber-400 uppercase ">
                  SRE IT Solution
                </span>{" "}
                Your Trusted Partner in Digital Innovation!
              </p>
              <p className=" mt-4">
                At SRE IT SOLUTION, you can discover state-of-the-art
                technological solutions that will propel your company to new
                heights. Our goal is to help businesses succeed in the digital
                world by solving their challenges and providing them with
                innovative IT services.
              </p>
              <div className="mt-8 flex  flex-col md:flex-row  justify-start md:justify-normal items-center space-x-6">
                <button
                  type="submit"
                  className="group mt-2 border-orange-400 hover:border-2 relative h-10 md:h-12 w-32 md:w-44 overflow-hidden rounded-ss-xl rounded-ee-xl font-bold md:text-lg  "
                >
                  <div className="absolute inset-0 group-hover:w-3 bg-gradient-to-r from-orange-500 to-yellow-300 transition-all duration-[350ms] ease-out w-full"></div>
                  <span className="relative  text-white">
                    Start Now
                  </span>
                </button>

                <p className="flex items-center text-base md:text-xl gap-2 font-bold cursor-pointer mt-5 md:mt-0">
                  Learn More{" "}
                  <FaArrowRightLong className="text-orange-400"></FaArrowRightLong>
                </p>
              </div >
              <div className="mt-8 flex justify-center md:justify-normal gap-3">
                <span className="flex text-sm font-semibold items-center  gap-x-2">
                  {" "}
                  <HiMiniCheckBadge className="size-6  text-green-500" />{" "}
                  Customizable Workflow
                </span>
                <span className="flex text-sm font-semibold items-center gap-x-2">
                  {" "}
                  <HiMiniCheckBadge className="size-6  text-green-500" /> Time
                  Tracking
                </span>
              </div>
            </div >
          </div >
          <div className="relative ">
            {/* here include image */}
            <Lottie animationData={animation} className=" h-fit" />
            <span className="absolute right-[10%] top-[15%] animate-bounce"><FaCode className="text-4xl text-orange-500"></FaCode></span>
          </div>
        </div>
      </div >



      {/* <div className="b ">
        <svg
          width="100%"
          height="10%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%">
              <stop offset="5%" stopColor="#ffffff"></stop>
              <stop offset="95%" stopColor="#f2d174"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 L 0,0 C 112.07655502392345,51.473684210526315 224.1531100478469,102.94736842105263 302,133 C 379.8468899521531,163.05263157894737 423.46411483253587,171.68421052631578 526,147 C 628.5358851674641,122.3157894736842 789.9904306220094,64.3157894736842 887,68 C 984.0095693779906,71.6842105263158 1016.5741626794259,137.05263157894737 1098,136 C 1179.4258373205741,134.94736842105263 1309.712918660287,67.47368421052632 1440,0 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="0.53"
          >
            <animate
              attributeName="d"
              values="
        M 0,400 L 0,0 C 112.07655502392345,51.473684210526315 224.1531100478469,102.94736842105263 302,133 C 379.8468899521531,163.05263157894737 423.46411483253587,171.68421052631578 526,147 C 628.5358851674641,122.3157894736842 789.9904306220094,64.3157894736842 887,68 C 984.0095693779906,71.6842105263158 1016.5741626794259,137.05263157894737 1098,136 C 1179.4258373205741,134.94736842105263 1309.712918660287,67.47368421052632 1440,0 L 1440,400 L 0,400 Z;
        M 0,400 L 0,0 C 104.54545454545453,46.04784688995215 209.09090909090907,92.0956937799043 320,100 C 430.90909090909093,107.9043062200957 548.1818181818182,77.66507177033495 623,87 C 697.8181818181818,96.33492822966505 730.1818181818181,145.24401913875596 825,145 C 919.8181818181819,144.75598086124404 1077.0909090909092,95.35885167464116 1190,63 C 1302.9090909090908,30.641148325358845 1371.4545454545455,15.320574162679423 1440,0 L 1440,400 L 0,400 Z;
        M 0,400 L 0,0 C 110.84210526315786,40.68899521531101 221.68421052631572,81.37799043062202 302,110 C 382.3157894736843,138.62200956937798 432.1052631578949,155.17703349282294 533,147 C 633.8947368421051,138.82296650717706 785.8947368421052,105.91387559808612 896,108 C 1006.1052631578948,110.08612440191388 1074.3157894736842,147.16746411483254 1158,135 C 1241.6842105263158,122.83253588516746 1340.842105263158,61.41626794258373 1440,0 L 1440,400 L 0,400 Z;
        M 0,400 L 0,0 C 85.85645933014354,32.334928229665074 171.71291866028707,64.66985645933015 264,79 C 356.2870813397129,93.33014354066985 455.0047846889953,89.6555023923445 564,101 C 672.9952153110047,112.3444976076555 792.267942583732,138.70813397129186 896,140 C 999.732057416268,141.29186602870814 1087.9234449760766,117.51196172248805 1176,90 C 1264.0765550239234,62.488038277511954 1352.0382775119617,31.244019138755977 1440,0 L 1440,400 L 0,400 Z;
        M 0,400 L 0,0 C 112.07655502392345,51.473684210526315 224.1531100478469,102.94736842105263 302,133 C 379.8468899521531,163.05263157894737 423.46411483253587,171.68421052631578 526,147 C 628.5358851674641,122.3157894736842 789.9904306220094,64.3157894736842 887,68 C 984.0095693779906,71.6842105263158 1016.5741626794259,137.05263157894737 1098,136 C 1179.4258373205741,134.94736842105263 1309.712918660287,67.47368421052632 1440,0 L 1440,400 L 0,400 Z"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

      </div> */}

    </>
  );
};

export default Banner;
