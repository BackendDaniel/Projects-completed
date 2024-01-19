import React from "react";
import { Link } from 'react-scroll';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaGooglePlus, FaGithub  } from "react-icons/fa"; 
import AlgoIcon from "../assets/algo3.svg";
import classnames from "classnames";


const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  const footerClass = `footer ${isDarkMode ? 'bg-gray-800' : 'bg-blue-900'} p-8`;
  const textColorClass = `text-white ${isDarkMode ? 'dark-text' : 'light-text'}`;

  return (
    <div className={`footer ${isDarkMode ? 'bg-blue-900' : 'bg-black'} p-8`}>
      <div className="container mx-auto flex justify-between">
        <div className="about max-w-1/3">
          <div className="logo">
          <img src={AlgoIcon} alt="ALGORIDEEMLOGO" className="h-10 pr-4" ></img>
          </div>
          <div className="detail">
          <Link to="home"className="font-semibold text-lg flex-row cursor-pointer hover:text-orange-500 text-white">Info@algorideem.com</Link>
            <h3 className="text-white text-lg mt-7">Office Address</h3>
            <p className="text-white mt-2 font-calibri text-sm">
              10A Jehovah Jireh Plaza, 128, <br />
              Ago Palace Way, Okota, Lagos
            </p>
            <ul className="icon flex">
            <li className="ml-0 mt-20 hover:text-orange-500 text-white text-xl">
              {/* Link to your Facebook account */}
              <a href="https://www.facebook.com/your-facebook-account" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li className="ml-4 mt-20 hover:text-orange-500 text-white text-xl">
              {/* Link to your Instagram account */}
              <a href="https://www.instagram.com/algorideemtech/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li className="ml-4 mt-20 hover:text-orange-500 text-white text-xl">
              {/* Link to your Twitter account */}
              <a href="https://twitter.com/Algorideem95483" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li className="ml-4 mt-20 hover:text-orange-500 text-white text-xl">
              {/* Link to your LinkedIn account */}
              <a href="https://www.linkedin.com/in/your-linkedin-account" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li className="ml-4 mt-20 hover:text-orange-500 text-white text-xl">
              {/* Link to your LinkedIn account */}
              <a href="https://www.googleplus.com/in/your-googleplus-account" target="_blank" rel="noopener noreferrer">
                <FaGooglePlus />
              </a>
            </li>
            <li className="ml-4 mt-20 hover:text-orange-500 text-white text-xl">
              {/* Link to your LinkedIn account */}
              <a href="https://www.github.com/in/your-github-account" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
          </ul>
          </div>
        </div>
        <div className={`services mr-20 mt-9 ${isDarkMode ? 'bg-gray-800' : 'bg-black'}`}>
          <h3 className="text-white pl-40 text-2xl">Our Services</h3>
          <ul className="mt-4 ml-4 pl-40 font-calibri text-sm">
            <li className="text-white hover:text-orange-500 transition duration-500 cursor-pointer">IT Consulting</li>
            <li className="text-white hover:text-orange-500 transition duration-500 cursor-pointer">UI/UX Training</li>
            <li className="text-white hover:text-orange-500 transition duration-500 cursor-pointer">Software Testing</li>
            <li className="text-white hover:text-orange-500 transition duration-500 cursor-pointer">Graphic Design Training</li>
            
          </ul>
          <p className="flex-wrap text-sm mr-0 pl-20 font-normal mt-20 text-white">
          <span className="text-sm font-calibri italic">Copyright</span> © Algorideem Technologies. All Rights Reserved {currentYear}.
          </p>
        </div>
        <div className={`page mr-20 mt-8 ${isDarkMode ? 'bg-gray-800' : 'bg-black'}`}>
          <h3 className="text-white text-2xl">Pages</h3>
          <ul className="mt-2 ml-4 font-calibri text-sm">
            <li><Link to='/' className='link text-white hover:text-orange-500 transition duration-500 cursor-pointer'>Home</Link></li>
            <li><Link to='/about' className='link text-white hover:text-orange-500 transition duration-500 cursor-pointer'>About</Link></li>
            <li><Link to='courses' className='link text-white hover:text-orange-500 transition duration-500 cursor-pointer'>Services</Link></li>
            <li><Link to='reviews' className='link text-white hover:text-orange-500 transition duration-500 cursor-pointer'>Reviews</Link></li>
            <li><Link to='contact' className='link text-white hover:text-orange-500 transition duration-500 cursor-pointer'>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
