import React from "react";
import Carousel from "nuka-carousel";
import '../styles/carousel.css';

const imageQuotes = [
  {
    imageUrl: "../images/Carousel/smg.png",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue.",
  },
  {
    imageUrl: "../images/Carousel/okl.png",
    quote: "The only way to do great work is to love what you do.",
  },
  {
    imageUrl: "../images/Carousel/lko.jpg",
    quote: "Don't watch the clock; do what it does. Keep going.",
  },
];

const ProfessionalCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoplay={true}
        wrapAround={true}
        renderBottomCenterControls={() => null}
      >
        {imageQuotes.map((item, index) => (
          <div key={index} className="carousel-item">
            <img
              src={item.imageUrl}
              alt={`Image ${index + 1}`}
              className="image"
            />
            <div className="image-overlay">
              <p className="overlay-text">{item.quote}</p>

              <img
                src="https://cutm.ac.in/wp-content/uploads/Centurion_University_of_Technology_and_Management_Logo.webp"
                alt="Your Logo"
                className="centered-logo"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProfessionalCarousel;
