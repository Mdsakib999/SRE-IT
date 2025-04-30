import React, { useEffect } from "react";

const TermsCondition = () => {
  useEffect(() => {
      window.scrollTo({ top: 0 });
  }, [])

  return (
    <div className=" mt-32 mb-20 md:mb-32 px-6 md:px-12 lg:w-[87%] lg:px-0 mx-auto">
      <p className="my-6 md:my-10 text-2xl md:text-3xl font-semibold">
        Terms and Conditions
      </p>

      <p>As of May 01, 2024, these Terms and Conditions apply.</p>

      <div className="my-10 ">
        <p className="text-lg font-semibold mb-2">
          Thank you for visiting SM IT Solution!
        </p>
        <p>
          We kindly request that you review the Terms & Conditions available on
          our <a className="text-orange-500" href="https://www.smitsolution.com.bd/">website</a>, which outline the
          general limitations associated with the use of the SM IT Solutions
          website. <br />
          If you wish to gain access to this website, it is assumed that you are
          fully complying with the terms and conditions. If you do not agree
          with the entirety of the terms and conditions expressed on this page,
          please do not use further SM IT Solution.
        </p>
      </div>

      <div className="ps-5">
        <p className=" pb-2">
          1. Usage of the Website: By visiting our website and its resources you
          agree to comply with existing local and international applicable legal
          regulations, observing and not breaking the privacy of others, and
          principles of safe use of the Internet.
        </p>
        <p className=" py-3">
          2. Cookies: The cookie policy on this website is as follows: cookies
          are used at Web Development Company. You have agreed to the use of
          cookies at SM IT Solution. This policy also explains the purpose of
          cookie usage. Geographical targeting, research and analysis, and
          targeted marketing are some examples.
        </p>
        <p className=" py-3">
          3. License: Except as otherwise stated, all the information materials
          on this website are the property of SM IT Solution and or their
          licensors. You will be able to view and use content that is owned by
          SM IT Solution on a personal basis with the restrictions mentioned
          below:
        </p>

        <div></div>

        <p className=" py-3">
          4. User Content: By publishing on this website, you allow SM IT
          Solution to use and modify the content for SM IT Solution business
          purposes without the need to pay any royalties. You guarantee that the
          content submitted by you does not infringe, violate, or temporarily
          restrain any third party’s rights.
        </p>
        <p className=" py-3">5. User Responsibilities: As a user of these practices, they are held accountable for maintaining the privacy of his or her account details, and personal details, including passwords, and for preventing other persons from using his account. SM IT Solution will not be liable for any loss that may be suffered or damage that is caused because these responsibilities are not adhered to.</p>
        <p className=" py-3">6. Third-Party Links:  Links to RTP Websites or Services may be further provided. Such links are such sites that are not responsible for the content, terms, or the privacy policy of the other sites.</p>
        <p className=" py-3">7. Disclaimer of warranties:  It is important to note that the content or the services provided by the website are made available for use on an as-is and as-can-be-obtained basis. SM IT Solution does not guarantee all or part or express any praise towards the complementary content of the website that is understandable or the accessibility of such use.</p>
        <p className=" py-3">8. Limitation of Liability:  With regards to all services and deliveries, neither SM IT Solution, nor its directors, employees, or partners shall have any liability to you for loss of profit, loss of or property damage, or any other indirect, incidental, or consequential loss or damages incurred from the use of the website. This limitation of liability applies to any claims of any kind, whichever be the cause of action, whether in tort, breach of contract, or otherwise.
        </p>
        <p className=" py-3">9. Termination of Use:  Any user, which in this case, you can be, will know or acknowledge the fact that SM IT Solution has the right to cancel your use of the website and or the relevant services without prior notice where it appears that these Terms of Use are likely to be tormented by the said user or cause detriment to users or business or third parties.</p>
        <p className=" py-3">10. Modifications: In any case, SM IT Solution may find it necessary to change either of these terms and conditions at any time during the usage of the site. Modifications will be in effect from the time Outline changes on the site the terms and conditions. Automated notices regarding this matter will be served to you, and you are highly encouraged to acknowledge this notice to avoid inconveniences.</p>
        <p className=" py-3">11. Applicable Law: This agreement and all the other agreements are made according to the law in Bangladesh. You agree that courts located in Bangladesh shall have jurisdiction to resolve any disputes that may arise.</p>
      </div>
        <p className="py-4"><span className="font-semibold">Get in Touch:</span> If you have any questions about these Terms and conditions, please contact us at <span className="text-orange-600">info@smitsolution.com.bd</span></p>
    </div>
  );
};

export default TermsCondition;
