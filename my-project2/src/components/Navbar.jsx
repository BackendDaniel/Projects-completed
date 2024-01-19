// Navbar.jsx

import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import AlgoIcon from "../assets/algo3.svg";
import DarkModeButton from '../Layout/DarkModeButton.jsx'

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  const darkModeClass = isDarkMode ? 'dark-mode' : '';
  const darkModeBackgroundClass = isDarkMode ? 'bg-black' : 'bg-white'; // Explicitly set white background for light mode
  const darkModeTextClass = isDarkMode ? '' : 'text-black';
  return (
    <div>
       <div className={`flex flex-row justify-between items-center p-4 px-3 md:px-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex-no-wrap fixed top-0 w-full pb-2 pt-2 ${darkModeClass} ${darkModeBackgroundClass}`}>
           
        <div className="flex flex-row items-center justify-between ">
          <ScrollLink
            to="home"
            className="font-semibold text-2xl p-1 cursor-pointer flex items-center ml-4"
          >
             <img src={AlgoIcon} alt="Gmail" className="mr-3  h-6 sm:h-9" />
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              Algorideem
            </span>
          </ScrollLink>
        </div>
        <div className="flex items-center ml-auto pr-2">
          <div className="flex items-center ml-auto">
            <DarkModeButton
              toggleDarkMode={toggleDarkMode}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
        <nav className={`hidden md:flex gap-3 p-1 text-lg font-semibold cursor-pointer ${darkModeTextClass}`}>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            duration={300}
            className="hover:text-yellow-500 transition-all cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={300}
            className="hover:text-yellow-500 transition-all cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="courses"
            spy={true}
            smooth={true}
            duration={300}
            className="hover:text-yellow-500 transition-all cursor-pointer"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="reviews"
            spy={true}
            smooth={true}
            duration={300}
            className="hover:text-yellow-500 transition-all cursor-pointer"
          >
            Reviews
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={300}
            className="hover:text-yellow-500 transition-all cursor-pointer"
          >
            Contact
          </ScrollLink>
        </nav>
        <div className="md:hidden flex p-4 pr-1 mt-0" onClick={handleChange}>
          <div className="p-2 mr-2 cursor-pointer">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      {menu && (
        <div className="fixed w-full z-50 cursor-pointer">
           <div className={`flex flex-col ${darkModeBackgroundClass} items-center justify-center mt-[-10px] p-4`}>
            <div className="flex flex-col gap-4 text-center">
              <ScrollLink
                to="home"
                className=" text-2xl hover:text-yellow-400 animate-pulse"
                onClick={handleChange}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={300}
                className=" text-2xl hover:text-yellow-400 animate-pulse"
                onClick={handleChange}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="courses"
                spy={true}
                smooth={true}
                duration={300}
                className=" text-2xl hover:text-yellow-400 animate-pulse"
                onClick={handleChange}
              >
                Services
              </ScrollLink>
              <ScrollLink
                to="reviews"
                spy={true}
                smooth={true}
                duration={300}
                className=" text-2xl hover:text-yellow-400 animate-pulse"
                onClick={handleChange}
              >
                Reviews
              </ScrollLink>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                duration={300}
                className=" text-2xl hover:text-yellow-400 animate-pulse"
                onClick={handleChange}
              >
                Contact
              </ScrollLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
