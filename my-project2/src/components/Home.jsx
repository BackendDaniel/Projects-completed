import React from "react";
import { Link } from "react-scroll";
import Home2AboutButton from "../Layout/Home2AboutButton.jsx";
import img from "../assets/hero.svg";

const Home = () => {
  return (
    <div className="min-h-screen md:px-32 px-5 my-10 flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-12 pt-12 justify-around top-2">
      <div className="md:w-2/4 text-center">
        <h2 className="text-5xl font-semibold leading-tight text-center">
        
        </h2>
        <span className="text-3xl font-semibold text-red-500 text-center">
          Algorideem Tech
        </span>

        <p className="text-lightText mt-5 text-center">
          <strong className="text-red-500"></strong>
          A gateway to a world of limitless possibilities in
          information technology domain. At Algorideem Tech, we develop robust
          applications that can scale on demand. We have vast expertise
          developing business and fintech solutions, and we can help you
          automate your business or banking processes in a timely manner to
          enable you launch into any competetive market without delay. We also
          offer IT training classes, advisory and consultation services. With
          our cutting edge services, you can explore a vast library of courses,
          from Web Development, UI & UX, Graphic Design with extensive
          practicals, strictly scrutinized to help you achieve your goals.
        </p>

        <Link to="about" spy={true} smooth={true} duration={500}>
          <Home2AboutButton title="About Us" />
        </Link>
      </div>
      <div className="w-full md:w-2/4 pl-6">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
