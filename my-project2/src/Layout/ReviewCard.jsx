// ReviewCard.jsx

import React from 'react';

const ReviewCard = (props) => {
  const lightModeClass = 'bg-white text-black';
  const darkModeClass = 'bg-black text-white'; // Change the dark mode styles here
  const paragraphContainerClass = 'text-lightText'; // Add the class here

  return (
    <div className={`w-full md:w-1/4 border-2 border-lightText md:border-none p-5 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all ${props.isDarkMode ? darkModeClass : lightModeClass}`}>
      <div className={paragraphContainerClass}>
        {props.children}
      </div>
      <div className='flex flex-row justify-center mt-4'>
        <img className='rounded-full w-1/4' src={props.img} alt="img" />
      </div>
    </div>
  );
};

export default ReviewCard;
