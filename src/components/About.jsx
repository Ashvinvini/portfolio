import React from "react";
import aboutImg from "../assets/about.png";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export const About = () => {
  return (
    <section
      className="bg-slate-900 flex flex-col md:flex md:flex-row px-5 py-[100px]"
      id="about"
    >
      <div className="image-container w-full md:w-1/2 flex justify-center items-center order-1 md:order-none">
        <img src={aboutImg} alt="aboutImage" />
      </div>
      <div className="about-container w-full md:w-1/2 flex items-start pt-0 md:pt-24 ">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white border-b-4 mb-5 border-b-blue-500 w-[170px] hover:text-blue-500 ">
            About Me
          </h1>
          <p className="text-white py-4">
            Hi, I'm Ashvin Vinith, a dedicated Front End Developer with a
            passion for building user-friendly websites and applications. I have
            a solid understanding of HTML, CSS, and JavaScript, amd frameworks
            like React JS and Tailwindcss and I'm eager to apply my skills in a
            professional setting.
          </p>
          <p className="text-white py-4">
            I enjoy learning new technologies and improving my coding skills,
            especially with modern frameworks like React. I thrive in team
            environments and am excited to contribute to projects that make a
            real impact.
          </p>
          <p className="text-white py-4">
            I'm looking forward to starting my career and growing as a
            developer.
          </p>
          <div className="icons flex flex-wrap gap-1 md:gap-4 text-white py-4 ">
            <span className="hover:scale-125">
              <FaHtml5 size={80} color="orange" />
            </span>
            <span className="hover:scale-125">
              <FaCss3Alt size={80} color="blue" />
            </span>
            <span className="hover:scale-125">
              <IoLogoJavascript size={80} color="yellow" />
            </span>
            <span className="hover:scale-125">
              <FaReact size={80} color="#66e9f2" />
            </span>
            <span className="hover:scale-125">
              <RiTailwindCssFill size={80} color="#66e9f2" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
