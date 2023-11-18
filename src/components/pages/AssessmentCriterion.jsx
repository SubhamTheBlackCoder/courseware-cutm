import React from "react";
import { Link } from "react-router-dom";
import "../styles/AssessmentCriterion.css";
import Logo from "../Logo";
import Footer from "../Footer";

const AssessmentCriterion = () => {
  return (
    <div>
      <h1 className="main-heading">AssessmentCriterion</h1>
      <div className="campus-card" id="odisha-campus">
        <h2>Assessment Criterion</h2>
        <p>
          For Odisha Campus –{" "}
          <Link to="https://courseware.cutm.ac.in/wp-content/uploads/2020/06/Examination-Policy-Amendment_Odisha.pdf">
            Click Here
          </Link>
        </p>
        <p>
          For Andhra Pradesh Campus – 2020 –{" "}
          <Link to="https://courseware.cutm.ac.in/wp-content/uploads/2020/06/Examination-Policy-Amendment-AP-Campus.pdf">
            Click Here
          </Link>
        </p>
      </div>
      <Logo />
      <Footer />
    </div>
  );
};

export default AssessmentCriterion;
