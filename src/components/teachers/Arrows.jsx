import React from "react";
import "../styles/arrow.css";

export const Left = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow-left"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-left left-arrow" />
    </div>
  );
};

export const Right = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow-right"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-right right-arrow" />
    </div>
  );
};
