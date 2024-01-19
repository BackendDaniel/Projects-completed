import React from "react";

const CoursesCard = (props) => {
  // Define a class for the dark mode background color
  const darkModeClass = props.isDarkMode ? "dark-mode" : "";

  return (
    <div
      className={`flex flex-col items-center justify-between ${darkModeClass} border-2 bg-white border-lightText md:border-none md:w-2/5 pr-5 pl-5 pb-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all`}
    >
      <div className="w-3/5">
        <img src={props.img} alt="img" />
      </div>
      <div className="text-black">
        <h3 className="text-center font-semibold italic"> {props.title} </h3>
        {props.children}
      </div>
    </div>
  );
};

export default CoursesCard;
