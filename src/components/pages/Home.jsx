import React from "react";
import ProfessionalCarousel from "../carousel/Carousel";
import TeacherSection from "../teachers/TeacherSection";
import Cards from "../coursecard/Cards";
import Logo from "../log/Logo";
import Footer from "../footer/Footer";
const Home = () => {
  return (
    <div>
      <ProfessionalCarousel />
      <hr></hr>
      <TeacherSection />
      <Cards />
      <hr />
      <Logo />
      <Footer />
    </div>
  );
};

export default Home;
