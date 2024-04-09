import React, { useState } from "react";
import card2 from '../images/card2.jpg';

const Card = ({ heading, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleRadioClick = () => {
    setShowDescription(true);
  };

  return (
    <div
      className={`w-full sm:w-1/2 lg:w-1/4 relative transform transition-border duration-300 flex flex-col  border rounded-lg ${
        isHovered ? 'border-pink-500 shadow-lg hover:scale-105' : 'border-gray-500'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ pointerEvents: showDescription ? 'none' : 'auto' }}
    >
      <div className="relative w-full h-64">
        <img
          src={card2}
          alt="Card Image"
          className={`object-cover w-full h-full transition-transform duration-300 ${
            isHovered ? "scale-110 -translate-y-10" : ""
          }`}
          style={{ marginTop: isHovered ? "-4px" : "0" }}
        />
      </div>

      <div className={`bg-white bg-opacity-90 p-4 mb-10 w-full flex  justify-center items-center relative z-10 transition-transform duration-300 ${
        isHovered ? "scale-105 -translate-y-10" : ""
      }`}
      style={{ marginTop: isHovered ? "-4px" : "0" }}>
        <h3 className="text-lg font-semibold text-center">{heading}</h3>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 transition-opacity duration-300 ${
        isHovered ? "opacity-100" : "opacity-0"
      }`}>
        <p className="text-sm mt-5 mb-5 text-center">{description}</p>
      </div>
      
      <div className=" w-full flex justify-center items-center accent-pink-500" style={{ zIndex: 1 }}>
        <input
          type="radio"
          name="showDescription"
          onClick={handleRadioClick}
          className="w-4 h-4 mb-5"
        />
      </div>
    </div>
  );
};

const TripleCard = () => {
  return (
    <div className="flex justify-center">
      <Card
        heading="I'm a designer looking to share my work"
        description="with over 7 million shots from a vast co munity of designers. Dribbble is the leading source for design inspiration."
      />
      <Card
        heading="I'm looking to hire a designer."
        description="with over 7 million shots from a vast co munity of designers. Dribbble is the leading source for design inspiration."
      />
      <Card
        heading="I'm looking for designe inspiration"
        description="with over 7 million shots from a vast co munity of designers. Dribbble is the leading source for design inspiration."
      />
    </div>
  );
};

export default TripleCard;
