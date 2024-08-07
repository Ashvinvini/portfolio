import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <header className="flex justify-between items-center bg-gradient-to-r from-slate-900 to-blue-900 p-4 fixed w-full top-0 z-10 ">
        <h2 className="text-3xl font-bold text-white">Personal Portfolio</h2>
        <nav className="hidden md:block">
          <ul className="flex gap-4 text-white font-bold ">
            <li>
              <a href="/" className="relative">
                <span className="hover:before:absolute hover:before:w-full hover:before:h-0.5 hover:before:bg-slate-800 hover:before:bottom-0 hover:before:left-0 hover:text-slate-900">
                  Home
                </span>
              </a>
            </li>
            <li>
              <a href="#about" className="relative">
                <span className="hover:before:absolute hover:before:w-full hover:before:h-0.5 hover:before:bg-slate-800 hover:before:bottom-0 hover:before:left-0 hover:text-slate-900">
                  About
                </span>
              </a>
            </li>
            <li>
              <a href="#project" className="relative">
                <span className="hover:before:absolute hover:before:w-full hover:before:h-0.5 hover:before:bg-slate-800 hover:before:bottom-0 hover:before:left-0 hover:text-slate-900">
                  Projects
                </span>
              </a>
            </li>
            <li>
              <a href="#resume" className="relative">
                <span className="hover:before:absolute hover:before:w-full hover:before:h-0.5 hover:before:bg-slate-800 hover:before:bottom-0 hover:before:left-0 hover:text-slate-900">
                  Resume
                </span>
              </a>
            </li>
            <li>
              <a href="#contact" className="relative">
                <span className="hover:before:absolute hover:before:w-full hover:before:h-0.5 hover:before:bg-slate-800 hover:before:bottom-0 hover:before:left-0 hover:text-slate-900">
                  Contact
                </span>
              </a>
            </li>
          </ul>
        </nav>
        {toggleMenu && (
          <nav className="block md:hidden mobile-nav">
            <ul
              className="flex flex-col gap-4 text-white font-bold "
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <li>
                <a href="/" className="relative">
                  <span className="hover:before:absolute hover:before:w-full hover:before:h-0.5 hover:before:bg-slate-400 hover:before:bottom-0 hover:before:left-0 hover:text-slate-500">
                    Home
                  </span>
                </a>
              </li>
              <li>
                <a href="#about" className="relative">
                  <span className="hover:before:absolute hover:before:w-full hover:before:h-0.5 hover:before:bg-slate-400 hover:before:bottom-0 hover:before:left-0 hover:text-slate-500">
                    About
                  </span>
                </a>
              </li>
              <li>
                <a href="#project" className="relative">
                  <span className="hover:before:absolute hover:before:w-full hover:before:h-0.5 hover:before:bg-slate-400 hover:before:bottom-0 hover:before:left-0 hover:text-slate-500">
                    Projects
                  </span>
                </a>
              </li>
              <li>
                <a href="#resume" className="relative">
                  <span className="hover:before:absolute hover:before:w-full hover:before:h-0.5 hover:before:bg-slate-400 hover:before:bottom-0 hover:before:left-0 hover:text-slate-500">
                    Resume
                  </span>
                </a>
              </li>
              <li>
                <a href="#contact" className="relative">
                  <span className="hover:before:absolute hover:before:w-full hover:before:h-0.5 hover:before:bg-slate-400 hover:before:bottom-0 hover:before:left-0 hover:text-slate-500">
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        )}
        <button
          className=" block md:hidden"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <Bars3Icon className="text-white h-10" />
        </button>
      </header>
    </>
  );
};
