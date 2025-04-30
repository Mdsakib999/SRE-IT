import React, { useEffect } from "react";

const Privacy = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])
  return (
    <div className=" mt-32 px-6 md:px-12 mb-20 md:mb-32  lg:w-[87%] lg:px-0 mx-auto">
      <p className=" my-6 md:my-10 text-2xl md:text-3xl font-semibold">Our Privacy Policy</p>

      <p>As of May 01, 2024, these Privacy Policy apply.</p>

      <div className="my-10 ">
        <p className="text-lg font-semibold">Overview</p>
        <p>
          At SM IT Solution, we take your privacy seriously and are dedicated to
          protecting it while following all the necessary regulations.
        </p>
      </div>

      <div className="my-10 ">
        <p className="text-lg font-semibold">Visitor information</p>
        <p>
          We collect non-personal information from all visitors to our website,
          including details such as the browser they are using, their preferred
          language, and the time of their visit. This anonymous data is
          essential for analyzing trends and generating reports. Additionally,
          we utilize Google Analytics to monitor user interactions with our
          site, and this data is managed following Google's privacy policy.
        </p>
      </div>

      <div className="my-10 ">
        <p className="text-lg font-semibold">User information</p>
        <p>
        When personal information is necessary for engagement on our website (such as newsletter subscriptions, comments, or job applications), we request only the pertinent data. Personally identifiable information, including IP addresses, is gathered from logged-in users, commenter, and job applicants, and is shared exclusively with our administrators.
        </p>
      </div>

      <div className="my-10 ">
        <p className="text-lg font-semibold">Analytics & statistics</p>
        <p>
        We utilize Google Analytics alongside our internal analytics to produce statistics regarding user behavior. This data aids us in comprehending website traffic and usage trends. Although Google Analytics gathers information through cookies and various tracking technologies, it does not furnish us with personally identifiable information.
        </p>
      </div>

      <div className="my-10 ">
        <p className="text-lg font-semibold">Disclosure of personally identifiable information</p>
        <p>
        We keep your information private and don’t share it with outside parties. Only our management and recruitment teams can access this information, and they need it to provide services. These team members are required to follow strict confidentiality rules. We might share information if there are legal requests or to protect our website and the public.
        </p>
      </div>

      <div className="my-10 ">
        <p className="text-lg font-semibold">Cookies</p>
        <p>
        We use cookies to monitor and recognize users along with their preferences. You can change your browser settings to block cookies, but keep in mind that this might impact how the site works.
        </p>
      </div>


    </div>
  );
};

export default Privacy;
