import { useParams } from "react-router-dom";
import { jobData } from "../../utils/jobdata";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock2 } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { useEffect } from "react";

const JobDetails = () => {
  const { title } = useParams();
  // console.log(title);
  const job = jobData.find((item) => item.jobTitle === title);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="mt-16 md:mt-20 ">
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        {/* Left Section: Job Details */}
        <div className="lg:col-span-2 bg-white  rounded-lg p-6 ">
          <div className="mb-4 md:flex gap-x-4">
            <p className="md:text-3xl text-2xl font-bold mb-3 md:mb-0">
              {job.jobTitle}
            </p>
            <span className="bg-orange-50 text-xs md:text-sm rounded-2xl mb-2 border border-red-400 text-red-600 px-2 py-1 font-semibold bb">
              {job.jobType}
            </span>
          </div>

          {/* Job Meta Data */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
            <p className="flex gap-3 items-center text-gray-600">
              <IoLocationOutline className="text-lg" /> {job.location}
            </p>
            <p className="flex gap-3 items-center text-gray-600">
              <LuClock2 className="text-lg" /> {job.officeTime}
            </p>
            <p className="flex gap-3 items-center text-gray-600">
              <SlCalender className="text-lg" />
              {job.deadline}
            </p>
          </div>

          {/* Job Description */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Job Description</h2>
            <p className="text-gray-700">{job.jobDescription}</p>
          </div>


          {/* Nice to have */}
          {job.aboutUs &&  (
            <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">About Us</h2>
            <p className="text-gray-700">{job.aboutUs}</p>
          </div>
          )}

          {/* Educational Requirements */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">
              Educational Requirements
            </h2>
            <p className="text-gray-700">{job.education}</p>
          </div>

          {/* Responsibilities */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">📌Responsibilities</h2>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>

          {/* Qualifications */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">📌Requirements</h2>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              {job.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </div>

          {/* Nice to have */}
          {job.niceToHaveSkills && job.niceToHaveSkills.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">📌Nice To Have Skills</h2>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                {job.niceToHaveSkills.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            </div>
          )}

          
          {/* Other Benefits */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">✨Other Benefits</h2>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>
                Yearly two festival bonuses (According to company's policy).
              </li>
              <li>Fully-subsidized lunch.</li>
              <li>Unlimited tea and coffee.</li>
              <li>Training and learning materials to improve skills.</li>
              <li>Knowledge Sharing Session</li>
              <li>Annual retreat.</li>
              <li>Fun, Relaxed Working Environment.</li>
            </ul>
          </div>
        </div>

        {/* Right Section: Job Summary */}
        <div>
          <div className="bg-white shadow-xl hover:shadow-orange-50 rounded-lg p-6 ">
            <h2 className="text-2xl font-bold mb-4">Job Summary</h2>
            <div className="space-y-4 overflow-auto">
              <p className="flex justify-between text-gray-600">
                <span className="font-semibold">Job Title:</span>
                <span>{job.jobTitle}</span>
              </p>
              <p className="flex justify-between text-gray-600">
                <span className="font-semibold">Experience:</span>
                <span>{job.experience}</span>
              </p>
              <p className="flex justify-between text-gray-600">
                <span className="font-semibold"> Salary:</span>
                <span>{job.salary} </span>
              </p>
              <p className="flex justify-between text-gray-600">
                <span className="font-semibold">Location:</span>
                <span>{job.location}</span>
              </p>
              <p className="flex justify-between text-gray-600">
                <span className="font-semibold">Office Time:</span>
                <span>{job.officeTime}</span>
              </p>
              <p className="flex justify-between text-gray-600">
                <span className="font-semibold">Number of Vacancy:</span>
                <span>{job.vacancy}</span>
              </p>
              <p className="flex justify-between text-gray-600">
                <span className="font-semibold">Job Type:</span>
                <span>{job.jobCategory}</span>
              </p>
              <p className="flex justify-between text-gray-600">
                <span className="font-semibold">Work Days:</span>
                <span>{job.workDays}</span>
              </p>
              <p className="flex justify-between text-gray-600">
                <span className="font-semibold">Deadline:</span>
                {job.deadline}
              </p>
              <p className="flex justify-between text-gray-600">
                <span className="font-semibold">Apply:</span>
                <p className="inline-block">recruit.smitsolution@gmail.com</p>
              </p>
            </div>

            {/* Apply Button */}
            {/* <div className="mt-8">
                        <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-md hover:bg-orange-600 transition duration-300">
                            Apply Now
                        </button>
                    </div> */}
          </div>
        </div>
      </div>
      <div className="bg-black text-white w-[90%] md:w-[75%] lg:w-[50%] mx-auto h-auto p-8 md:p-12 lg:p-16 flex flex-col text-base md:text-lg lg:text-xl font-semibold my-8 rounded-lg justify-center items-center shadow-lg leading-7 md:leading-8 lg:leading-10 ">
        <p className="w-full text-center">
          Apply now by sending your CV to
          <span className="text-orange-500 font-bold">
            {" "}
            recruit.smitsolution@gmail.com
          </span>{" "}
          and don’t forget to include the job title in the email subject line.
        </p>
      </div>
    </div>
  );
};

export default JobDetails;
