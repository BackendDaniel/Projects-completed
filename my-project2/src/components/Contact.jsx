import React, { useState } from "react";
import emailjs from "emailjs-com";
import Heading from "../Layout/Heading";
import Button from "../Layout/Button";
import img from "../assets/contact.svg";
import Noty from "noty";
import "noty/lib/noty.css";
import "noty/lib/themes/mint.css"; // Choose a theme that suits your design

const Contact = ({ isDarkMode }) => {
  const [notification, setNotification] = useState(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [comment, setComment] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const notificationContainer = document.getElementById(
      "notification-container"
    );

    if (!userName || !userEmail || !comment) {
      // If any of the required fields is empty, show an error message and return
      new Noty({
        type: "error",
        text: "Please fill in all the required fields.",
        timeout: 3000,
      }).show();

      // Append the notification to the specified container
      notificationContainer.appendChild(
        document.querySelector(".noty_container")
      );

      return;
    }

    // All fields are filled, proceed with sending the email
    emailjs
      .sendForm(
        "service_6skloyc",
        "template_p2z7pyo",
        e.target,
        "3uCAB_BPMuq59Ux1a"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Use Noty for success notification
          new Noty({
            type: "success",
            text: "Your Message was Sent Successfully!",
            timeout: 3000,
          }).show();

          // Append the notification to the specified container
          notificationContainer.appendChild(
            document.querySelector(".noty_container")
          );

          // Reset the form fields
          setUserName("");
          setUserEmail("");
          setComment("");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          // Use Noty for error notification
          new Noty({
            type: "error",
            text: "Failed to send message. Please try again.",
            timeout: 3000,
          }).show();

          // Append the notification to the specified container
          notificationContainer.appendChild(
            document.querySelector(".noty_container")
          );
        }
      );
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-14 md:px-32 px-5 my-10 pt-16 ${
        isDarkMode ? "dark" : "light"
      }`}
    >
      <Heading title1="Contact " title2="Us" />

      <div className="flex flex-col md:flex-row justify-between w-full">
        <form onSubmit={sendEmail} className="w-full md:w-2/5 space-y-2 pt-8">
          <div
            className={`flex flex-col mt-0 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <label htmlFor="userName">Full Name</label>
            <input
              className="py-3 px-2 rounded-lg  hover:hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div
            className={`flex flex-col ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <label htmlFor="userEmail">Your Email</label>
            <input
              className="py-3 px-2 rounded-lg hover:hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userEmail"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Enter your Email Address"
            />
          </div>
          <div
            className={`flex flex-col ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <label htmlFor="comment">Message Us</label>
            <textarea
              className="py-3 px-2 rounded-lg hover:hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              name="comment"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Enter your comment"
              rows="4"
            />
          </div>

          <div className="flex flex-row justify-center">
            <Button type="submit" title="Send Message" />
          </div>
          <div id="notification-container"></div>
        </form>
        <div className="w-full md:w-2/4 ">
          <img src={img} alt="img" className="rounded-full w-3/4 pt-8" />
        </div>
      </div>
      {notification && (
        <div
          className={`${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white py-2 px-4 rounded-md mt-4 self-start`}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default Contact;
