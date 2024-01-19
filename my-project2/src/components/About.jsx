import React from 'react'
import img from '../assets/images/Website-Transparent.png'
import { Link } from 'react-scroll'
import Button from '../Layout/Button.jsx'
import Heading from '../Layout/Heading.jsx'

const About = () => {
    return (
      <div className="md:min-h-screen flex flex-col-reverse md:flex-row text-center gap-5 md:mx-32 mx-5 mt-14 pt-10 items-center justify-between">
        <div className="w-full md:w-2/4">
          <img src={img} alt="img" />
        </div>
        <div className="w-full md:w-2/4 text-center space-y-2">
          <Heading title1="About " title2="Us?" />
          <p className="pt-5 mt-8 text-center pb-2">
            Welcome to <strong>Algorideem Technologies</strong>, where
            innovation meets excellence! At <strong className='text-red-500'>Algorideem Tech</strong>, we are a dynamic
            and forward-thinking technology company dedicated to providing a
            range of cutting-edge services and solutions. Our commitment to
            excellence and passion for technology drive us to deliver
            outstanding results for our clients.
            <br />
            We offer exclusive services such as <strong>Software Development</strong>, <strong>Software Testing</strong>, <strong>IT Consultancy</strong>, <strong>Software Development Training</strong>, <strong>Graphic Design Training</strong>, <strong>UI & UX Training</strong> ,
            Our Mission At <strong className='text-red-500'>Algorideem Tech</strong> is to push the boundaries of technology and empower
            individuals and businesses to thrive in the digital era. We are
            committed to delivering solutions that not only meet but exceed
            expectations, fostering growth, and driving success.
          </p>

          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button title="Contact Us" />
          </Link>
        </div>
      </div>
    );
}

export default About