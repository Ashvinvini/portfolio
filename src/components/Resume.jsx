import React from "react";
import resumeImg from "../assets/resume.jpg";
import resume from "../assets/AshvinVinithResume.pdf";
const Resume = () => {
  const config = {
    link: resume,
  };
  return (
    <section
      className="bg-slate-900 flex flex-col md:flex md:flex-row px-5  py-[65px]"
      id="resume"
    >
      <div className="image-container w-full md:w-1/2 flex justify-center items-center ">
        <img
          src={resumeImg}
          alt="aboutImage"
          className="w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
        />
      </div>
      <div className="about-container w-full md:w-1/2 flex justify-center items-start pt-0 md:pt-24 mt-6 md:mt-0 ">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-6xl font-bold text-white border-b-4 mb-5 border-b-blue-500 w-[220px] hover:text-blue-500 ">
            Resume
          </h1>
          <p className="text-white text-2xl md:text-4xl">
            You can view my resume
          </p>
          <button className="bg-blue-600 text-white px-3 py-1 border-2 mt-4 rounded-md hover:bg-blue-700 hover:scale-125">
            <a href={config.link} download="Resume">
              Download
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
