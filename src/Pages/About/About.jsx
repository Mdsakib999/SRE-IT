import useDocumentTitle from "../../Hooks/useDocumentTitle";
import AboutContact from "../../Components/AboutUsComponents/AboutContact";
import OurStory from "../../Components/AboutUsComponents/OurStory";
import Award from "../../Components/AboutUsComponents/Award";
import MissionAndVision from "../../Components/AboutUsComponents/MissionAndVisson";
import AboutCEO from "../../Components/AboutUsComponents/AboutCEO";
import { useEffect } from "react";

const About = () => {
    useDocumentTitle(`About | SRE IT Solution`);
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])
    return (
        <div className="md:py-12 py-16  pt-24 overflow-hidden">

            <OurStory />
            <Award />
            <MissionAndVision />
            {/* <AboutCEO></AboutCEO> */}
            <AboutContact></AboutContact>
        </div>
    );
};

export default About;