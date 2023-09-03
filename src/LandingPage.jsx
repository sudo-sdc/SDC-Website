import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import president from "./images/president.jpg";
import vicePresident from "./images/vicePresident.jpg";
import eventCoordinator from "./images/eventCoordinator.jpg";
import "./style.css";

const galleryData = [
  {
    imagePath: president,
    alt: "President of SDC",
    summary: "Emi Jr. Anyakpor",
    linkedin: "https://www.linkedin.com/in/emi-jr-anyakpor-3b3478226/", // Add LinkedIn URL here
  },

  {
    imagePath: vicePresident,
    alt: "Vice President of SDC",
    summary: "Dami Adenugba",
    linkedin: "https://www.linkedin.com/in/adedotdev/", // Add LinkedIn URL here
  },

  {
    imagePath: eventCoordinator,
    alt: "Event Coordinator for SDC",
    summary: "Victoria Miteva",
    linkedin: "https://www.linkedin.com/in/victoria-miteva-b50b721b1/", // Add LinkedIn URL here
  },
  // Add more image objects as needed
];

const LandingPage = ({ setLoggedInUser }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < galleryData.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handleLogout = () => {
    setLoggedInUser("");
  };

  const disablePrevButton = currentImageIndex === 0;
  const disableNextButton = currentImageIndex === galleryData.length - 1;

  return (
    <div className="intro">
      <header>
        <h1>Welcome to our Club!</h1>
        <div className="buttonContainer">
          <Link to="/createUsername" className="button">
            <FontAwesomeIcon icon={faEnvelope} />
            News Letter
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </header>

      <div className="gradient"></div>

      <section className="flex-container">
        <div className="about">
          <h2>Meet the board members</h2>

          <div className="gallery">
            <div className="gallery-item">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className={`arrow-icon left ${
                  disablePrevButton ? "disabled" : ""
                }`}
                onClick={handlePrevImage}
              />
              <a
                href={galleryData[currentImageIndex].linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={galleryData[currentImageIndex].imagePath}
                  alt={galleryData[currentImageIndex].alt}
                  className="gallery-image"
                />
              </a>
              <FontAwesomeIcon
                icon={faArrowRight}
                className={`arrow-icon right ${
                  disableNextButton ? "disabled" : ""
                }`}
                onClick={handleNextImage}
              />
              <p>{galleryData[currentImageIndex].summary}</p>
            </div>
          </div>
        </div>

        <div className="tools">
          <h2>Why should you join?</h2>
          <ul>
            <li>reasons</li>
          </ul>
        </div>
      </section>

      <div className="gradient"></div>

      <header id="footerColor">
        <h2>Contact us!</h2>
        <p>&copy; 2023 SDC. All rights reserved.</p>
      </header>
    </div>
  );
};

export default LandingPage;
