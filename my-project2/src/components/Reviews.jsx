// Reviews.jsx

import React from "react";
import Heading from "../Layout/Heading.jsx";
import ReviewCard from "../Layout/ReviewCard.jsx";
import img1 from "../assets/images/testi1.PNG";
import img2 from "../assets/images/testi2.PNG";
import img3 from "../assets/images/testi3.PNG";

const Reviews = ({ isDarkMode }) => {
  const reviewContainerClass = isDarkMode
    ? "bg-black text-white"
    : "bg-bcontainer"; // Change the dark mode styles here
  const reviewParagraphClass = isDarkMode ? "text-white" : "text-bg"; // Change the dark mode styles here

  return (
    <div
      className={`min-h-[80vh] flex flex-col items-center justify-center mb-10 md:px-32 px-5 my-10 pt-2 mt-10 ${reviewContainerClass}`}
    >
      <div className="pt-8 mt-10">
        <Heading title1="Our " title2="Reviews" />
      </div>

      <div className="flex flex-wrap justify-center text-center gap-6 mt-6 pl-3 cursor-pointer">
        <ReviewCard img={img2}>
          <p className={reviewParagraphClass}>
          <i><strong>"Blessing Jeremiah"</strong></i><br></br>
            The services provided by Algorideem Tech are fantastic, top-notch. Their team
            crafted a website for my business that exceeded my expectations. The
            attention to detail and creativity showcased in their work truly
            sets them apart.
          </p>
        </ReviewCard>
        <ReviewCard img={img2}>
          <p className={reviewParagraphClass}>
          <i><strong>"Felicia James"</strong></i><br></br>
            The educational section is a goldmine for anyone looking to delve
            into software development or enhance their skills in tech. The
            tutorials are well-structured, easy to follow, and cover a wide
            array of topics, from the basics to advanced techniques.
          </p>
        </ReviewCard>
        <ReviewCard img={img2}>
          <p className={reviewParagraphClass}>
          <i><strong>"Daniel Izu"</strong></i><br></br>
            What I appreciate most was there ability to provide unique fintech
            softwares solutions that enabled me have swift transactions for my
            business and extremely effective. There procedures and approach are professionally structured with good team.<br></br>
          
          </p>
        </ReviewCard>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-6 pl-3 cursor-pointer text-center">
        <ReviewCard img={img2}>
          <p className={reviewParagraphClass}>
          <i><strong>"Joy Iruka"</strong></i><br></br>
            In conclusion, Algorideem Tech is a one-stop destination for
            businesses and individual willing to advance business or career part
            exploring the web. Whether you're seeking services or knowledge,
            this company delivers excellence across the board. Kudos to the team
            for building such a valuable and resourceful organisation!
          </p>
        </ReviewCard>
        <ReviewCard img={img2}>
          <p className={reviewParagraphClass}>
          <i><strong>"Samuel David"</strong></i><br></br>
            Based on my experience I recently had the pleasure of exploring
            Algorideem Tech website, and I must say it's a comprehensive hub for
            all things web development. Whether you're a novice looking to learn
            or a business startup seeking to advanced your business reach on the
            web Algorideem Tech has something for everyone.
          </p>
        </ReviewCard>
        <ReviewCard img={img2}>
          <p className={reviewParagraphClass}>
          <i><strong>"Esther Somadina"</strong></i><br></br>
            Algorideem Tech stands out as a beacon of excellence. The courses
            are nothing short of exceptional. The
            instructors break down intricate topics into digestible modules,
            making it easy for learners of all levels. With practical edge to my
            theoretical knowledge. If you're serious about mastering frontend
            development, look no further.
          </p>
        </ReviewCard>
      </div>
    </div>
  );
};

export default Reviews;
