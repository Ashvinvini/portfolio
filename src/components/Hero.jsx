import React from "react";
import heroImg from "../assets/hero.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Hero = () => {
  const config = {
    subtitle: "Front-End Developer",
  };
  return (
    <>
      <section className="flex  flex-col py-5  text-center md:text-left md:flex md:flex-row justify-center h-full px-5 md:py-36 bg-gradient-to-r from-blue-800 from-10% via-blue-400 via-50% to-blue-800 to-90%">
        <div className="mt-6 w-full md:w-1/2 flex flex-col">
          <h1 className="text-white  text-6xl mt-10 font-Sriracha ">
            Hi,
            <br />
            Im <span className="text-black">Ashvin</span> Vinith
            <p className="text-2xl">{config.subtitle}</p>
          </h1>
          <div className="flex gap-4 pt-8 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/feed/"
              target="blank"
              className="hover:text-white"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://github.com/Ashvinvini?tab=repositories"
              target="blank"
              className="hover:text-white"
            >
              <FaGithub size={40} />
            </a>
          </div>
        </div>
        <img src={heroImg} className="w-full md:w-1/3" alt="heroImage" />
      </section>
    </>
  );
};
