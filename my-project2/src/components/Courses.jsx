import React from 'react'
import Heading from '../Layout/Heading.jsx'
import webImg from '../assets/images/Web-Dev1.png'
import softImg from '../assets/images/Soft-Test1.png'
import itconsult from '../assets/images/IT-cons.png'
import graphicImg from '../assets/images/Graphic-Des1.png'
import webTrainingImg from '../assets/images/Webd-Training.png'
import uiuxImg from '../assets/images/ui&ux.png'
import CoursesCard from '../Layout/CoursesCard.jsx'



const Courses = ({ isDarkMode }) => {
  const paragraphClass = isDarkMode ? 'text-white' : 'text-black';
  return (
    <div className={`min-h-screen flex-col items-center md:px-32 px-5 my-10 pt-14 ${isDarkMode ? 'bg-white text-black' : ''}`}>
        
        <div className='pt-4'>
          <Heading title1="Our " title2="Services" />
        </div>
        
        
        <div className='flex flex-wrap justify-center gap-6 mt-8 pl-4 text-justify courses-container'>
        <CoursesCard img={webImg} title="Software Development" isDarkMode={isDarkMode} className="course-card paragraphClass ">
          <p className={paragraphClass}>At <strong>Algorideem Tech,</strong> we blend creativity, innovation, and technical expertise to deliver bespoke web solutions tailored to your unique needs. We are passionate about crafting seamless, user-centric softwares that leave a lasting impression.
            🚀 Custom Software Development from concept to execution, we specialize in building custom software that align with your brand identity and business goals.
            💻 Responsive Design to ensure your software looks stunning on every device with our responsive design approach.
            </p>
          </CoursesCard>
          <CoursesCard img={softImg} title="Software Testing" className="course-card ">
          <p className={paragraphClass}>Is your software ready to face the real world? At <strong>Algorideem Technologies</strong>, we specialize in comprehensive software testing services designed to ensure the utmost performance, security, and reliability of your applications.<br />
            ✅ End-to-End Testing Solutions: From unit testing to system testing, we've got you covered at every stage of the development lifecycle. Our comprehensive testing ensures your software is flawless and user-ready with
            🔍 Quality Assurance Experts.
            </p>
          </CoursesCard>
          <CoursesCard img={itconsult} title="IT Consulting" className="course-card">
          <p className={paragraphClass}>
          Are you ready to transform your business through innovative and tailored IT solutions? Look no further! At <strong>Algorideem Technologies</strong>, we are your trusted partners in navigating the digital landscape and achieving unparalleled success.
            </p>
          </CoursesCard>
          <CoursesCard img={webTrainingImg} title="Software Development Training" className="course-card">
          <p className={paragraphClass}>Are you ready to embark on an exciting journey into the world of web development? Look no further! At <strong>Algorideem Technologies</strong>, we're passionate about empowering individuals with the skills and knowledge needed to thrive in the dynamic field of web development. with our Expert Instructors and Hands-On Learning.
          </p>
          </CoursesCard>
          <CoursesCard img={graphicImg} title="Graphic Design Training" className="course-card">
          <p className={paragraphClass}>Are you passionate about visual storytelling, design, and bringing ideas to life? Dive into the exciting world of Graphic Design with <strong>Algorideem Technologies</strong> – your gateway to a vibrant and creative career!<br/>
            ✅ Creative Learning Environment: Immerse yourself in an inspiring atmosphere where creativity flourishes. Our training center is designed to ignite your imagination and nurture your design talents with
            👩‍🎨 Expert Instructors. 🖥️ Hands-On Projects: Turn concepts into reality with hands-on projects that mirror real-world design scenarios. Build a portfolio that showcases your skills and sets you apart in the competitive design landscape.
          </p>
          </CoursesCard>
          <CoursesCard img={uiuxImg} title="UI/UX Training" className="course-card mt-4 mb-4">
            <p className={paragraphClass}>Are you ready to embark on a journey that merges creativity and functionality? Discover the dynamic world of UI/UX design with <strong>Algorideem Technologies</strong> – your gateway to crafting seamless and user-centric digital experiences! <br/>
            🛠️ Hands-On Practicality:<br/>
            🎨 UI Design Fundamentals: Master the principles of creating visually stunning and user-friendly interfaces.
            🖱️ UX Research and Prototyping: Dive into user research methodologies, wireframing, and prototyping to bring ideas to life.
            🚀 Interaction Design: Explore the art of crafting engaging and responsive interactions for a seamless user experience and 
            📱 Mobile and Responsive Design.
            </p>
          </CoursesCard>
        </div>
    </div>

  )
}

export default Courses