import { useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import img from "../../assets/Question.png";
import img1 from "../../assets/Question2.png";


const HomeFAQ = () => {

  const [openFAQ, setOpenFAQ] = useState(0);

  // Function to toggle the open state of an FAQ
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };


  return (
    <section className="py-20 bg-neutral-50 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="mb-16">
          <SectionTitle title={"Your Queries, Our Priority"}
            description={"Quick and Clear Answers to Help You Navigate Our Tech Services."}>

          </SectionTitle>

        </div>

        <div className='md:flex items-center gap-6 overflow-hidden md:overflow-visible'>

          <div className='w-[60%] mx-auto md:mx-0 md:w-[40%] relative'>
            <img className='animate-pulse' src={img} alt="" />
            <img className='absolute animate-ping top-0 left-[-19%]' src={img1} alt="" />
          </div>

          <div className="accordion-group  md:w-[60%]">
            {[
              {
                question: "What can I expect from your web design & development services? ",
                answer:
                  "We create customized, user-friendly websites that are visually appealing and responsive on all devices, tailored specifically to your brand.",
              },
              {
                question: "What is Conversion Rate Optimization (CRO)?",
                answer:
                  "CRO involves enhancing your website’s design and user experience to convert more visitors into customers, maximizing the value of your traffic.",
              },
              {
                question: "How can I contact customer support?",
                answer:
                  "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
              },
              {
                question: "How can you help grow my brand?",
                answer:
                  "We can develop your brand’s identity, voice, and digital presence to increase awareness and loyalty across all digital platforms.",
              },
              {
                question: "How do I find my purchase history?",
                answer:
                  "You can find your purchase history in the orders section of your account.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="accordion py-4 px-6 border-b bg-white border-solid border-gray-200 transition-all duration-500 rounded-xl shadow-md hover:shadow-lg shadow-orange-100 my-5 "
                id={`basic-heading-${index}`}
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left "
                  aria-controls={`basic-collapse-${index}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h5 className='font-bold'>{item.question}</h5>
                  <svg
                    className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${openFAQ === index ? 'rotate-180' : ''
                      }`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  id={`basic-collapse-${index}`}
                  className={`accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ease-in-out ${openFAQ === index ? 'max-h-40' : 'max-h-0'
                    }`}
                  aria-labelledby={`basic-heading-${index}`}
                  style={{ maxHeight: openFAQ === index ? '150px' : '0' }}
                >
                  <p className="text-base text-gray-900 leading-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

  );
};

export default HomeFAQ;