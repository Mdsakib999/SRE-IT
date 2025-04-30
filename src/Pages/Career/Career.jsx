import { useEffect, useRef } from "react";
import CareerBanner from "../../Components/CareerComponents/CareerBanner";
import CareerWithCountless from "../../Components/CareerComponents/CareerWithCountless";
import JobSection from "../../Components/CareerComponents/JobSection";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

const Career = () => {
  useDocumentTitle(`Career | SM IT Solution `);
  const jobSectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // Function to scroll to the job section
  const scrollToJobSection = () => {
    jobSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" pt-28">
      <CareerBanner scrollToJob={scrollToJobSection} />
      <CareerWithCountless />

      <div ref={jobSectionRef}>
        <JobSection />
      </div>
    </div>
  );
};

export default Career;
