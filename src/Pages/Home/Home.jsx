// import Augment from "../../Components/HomeComponents/Augment";
import { useEffect } from "react";
import CustomCursor from "../../Components/CustomCursor";
import Augment from "../../Components/HomeComponents/Augment";
import Banner from "../../Components/HomeComponents/Banner";
import Blog from "../../Components/HomeComponents/Blog";
import CountIngDiv from "../../Components/HomeComponents/CountIngDiv";
import HomeAbout from "../../Components/HomeComponents/HomeAbout";
import HomeContact from "../../Components/HomeComponents/HomeContact";
import HomeFAQ from "../../Components/HomeComponents/HomeFAQ";
import OurTeam from "../../Components/HomeComponents/OurTeam";
import ServiceSection from "../../Components/HomeComponents/ServiceSection";
import Testimonials from "../../Components/HomeComponents/Testimonials";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import "./Home.css";

const Home = () => {
    useDocumentTitle('Home | SRE IT Solution - Web & Software Development Experts in Bangladesh')
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])
    return (
        <div className="overflow-hidden">
            {/* <CustomCursor></CustomCursor> */}
            <Banner />
            <HomeAbout></HomeAbout>

            {/* Dynamic countup number */}
            <CountIngDiv></CountIngDiv>

            <ServiceSection></ServiceSection>

            <Augment />

            <HomeFAQ></HomeFAQ>



            {/* Out team member*/}
            {/* <OurTeam></OurTeam> */}

            <Blog />
            <Testimonials />
            {/* Contact */}
            <HomeContact></HomeContact>

        </div>

    );
};

export default Home;