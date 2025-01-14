import "./project.css";
import owl from "../../assets/owl4.png";
import { useState } from "react";
import welcom from "../../assets/welcom.png";
import mainImg from "../../assets/mainImg.png";
import allStories from "../../assets/allStories.png";
import hover from "../../assets/hover.png";
import languageTo from "../../assets/languageTo.png"

export const Project = () => {
  const screenshots = [
    {
      id: 1,
      img: welcom,
      title: "Welcome Page",
      description:
        "Begin your magical storytelling journey with a warm welcome and fun call-to-action!",
    },
    {
      id: 2,
      img: mainImg,
      title: "Main Page",
      description: "Enter your keywords and discover the joy of reading through unique, personalized stories!",
    },
    {
      id: 3,
      img: languageTo,
      title: "Main Page",
      description:
        "Switch between English and Swedish to enjoy stories in your chosen language!",
    },
    {
      id: 4,
      img: allStories,
      title: "All Stories Page",
      description:
        "Explore your collection of tales, each with its own unique illustration!",
    },
    {
      id: 5,
      img: hover,
      title: "Single Story Page",
      description:
      "Improves early language learning and pronunciation by hovering over a word!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="project">
      <div className="project-header">
        <div className="project-header_title">
          <img className="owl" src={owl} alt="owl icon" />
          <h1 className="project-title">Night Owl Reads</h1>
        </div>
        <p className="project-subtitle">
          Where every story begins with magic! A fun, interactive way to engage
          beginner readers with personalized stories.
        </p>
      </div>

      <div className="carousel-container">
        <div className="carousel-slide">
          <img
            src={screenshots[currentSlide].img}
            alt={screenshots[currentSlide].title}
            className="carousel-image"
          />
          <h3 className="carousel-title">{screenshots[currentSlide].title}</h3>
          <p className="carousel-description">
            {screenshots[currentSlide].description}
          </p>
        </div>

        
        <button className="carousel-button left" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="carousel-button right" onClick={handleNext}>
          &#10095;
        </button>

        <div className="carousel-indicators">
          {screenshots.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="project-footer">
        <p>© 2024 Night Owl Reads | Make Reading Fun!</p>
      </div>
    </div>
  );
};
