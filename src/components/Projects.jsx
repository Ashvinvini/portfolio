import React from "react";
import QRCode from "../assets/QRCode.jpg";
import bmi from "../assets/bmi.png";
import weather from "../assets/weather.png";

const Projects = () => {
  const config = {
    projects: [
      {
        image: QRCode,
        title: "QR Code Generator",
        link: "https://qrcodeproject1.netlify.app",
      },
      {
        image: bmi,
        title: "BMI Calculator",
        link: "https://projectbmicals.netlify.app",
      },
      {
        image: weather,
        title: "Weather App",
        link: "https://weatherappproject2.netlify.app",
      },
    ],
  };

  return (
    <>
      <section
        className="bg-gradient-to-r from-blue-800 from-10% via-blue-400 via-50% to-blue-800 to-90% min-h-screen flex flex-col p-4 md:p-20"
        id="project"
      >
        <div className="data">
          <h1 className="text-4xl font-bold text-white border-b-4 mb-5 border-b-blue-500 w-[140px] hover:text-blue-500">
            Projects
          </h1>
          <p className="text-white text-lg">
            I have successfully completed several web development projects,
            demonstrating my skills in front-end development. Check them out.
          </p>
        </div>
        <div className="image flex flex-col md:flex md:flex-row items-center md:justify-between mt-4 md:mt-20  gap-2">
          {config.projects.map((project, index) => (
            <div className="relative " key={index + 1}>
              <img
                className=" w-[250px] h-[200px] md:h-[300px] md:w-[350px] p-2"
                src={project.image}
                alt="QRCode"
              />
              <div className="absolute top-0 left-0 bg-blue-400 h-full w-full opacity-0 duration-500 hover:opacity-100 ">
                <p className="py-5 text-center font-bold">{project.title}</p>
                <button className="absolute bottom-4 left-20 md:left-32 rounded-md bg-slate-500 border-2 px-2 py-1 text-white  ">
                  <a href={project.link} target="blank">
                    View Result
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
