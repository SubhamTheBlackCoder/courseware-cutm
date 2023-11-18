import React from "react";
import "../styles/CutmLogo.css";
const Logo = () => {
  return (
    <div className="main__container1">
      <img
        src={
          "https://cutm.ac.in/wp-content/uploads/Centurion_University_of_Technology_and_Management_Logo.webp"
        }
        alt="cutm footer"
        height={275}
        width={180}
        className="main__logo"
      />
    </div>
  );
};

export default Logo;
