import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import zard1Image from "./images/zard.jpg";
import zard2Image from "./images/zard2.jpg";
import zard3Image from "./images/zard3.jpg";
import "./style.css";

const galleryData = [
  {
    imagePath: zard1Image,
    alt: "Image 1",
    summary: "This is the first image in the gallery.",
  },
  {
    imagePath: zard2Image,
    alt: "Image 2",
    summary: "This is the second image in the gallery.",
  },
  {
    imagePath: zard3Image,
    alt: "Image 3",
    summary: "This is the third image in the gallery.",
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
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
              <img
                src={galleryData[currentImageIndex].imagePath}
                alt={galleryData[currentImageIndex].alt}
                className="gallery-image"
              />
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
      </header>
    </div>
  );
};

export default LandingPage;
