import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProgrammeStructure.css";
import Logo from "../Logo";
import Footer from "../Footer";

const ProgrammeStructure = () => {
  return (
    <>
      <div>
        <h1 className="main-heading1">Programme Structure</h1>
        <div className="campus-card" id="odisha-campus">
          <h2>Odisha Campus</h2>
          <p>
            Programme Structure (CBCS) –{" "}
            <Link to="https://courseware.cutm.ac.in/wp-content/uploads/2021/01/Programme-Structure_2020.pdf">
              Click Here
            </Link>
          </p>
          <p>
            CUTM_Course Repository – 2020 –{" "}
            <Link to="https://courseware.cutm.ac.in/wp-content/uploads/2021/02/CUTM_Course-Repository-2020.pdf">
              Click Here
            </Link>
          </p>
          <p>
            CUTM_Course Repository – 2021 –{" "}
            <Link to="https://courseware.cutm.ac.in/wp-content/uploads/2022/02/CUTM_Course-Repository-2021_26.02-1.pdf">
              Click Here
            </Link>
          </p>
          <p>
            CUTM_Domain 2021 – 2020 –{" "}
            <Link to="https://courseware.cutm.ac.in/wp-content/uploads/2021/09/CUTM_Domain_2021-.pdf">
              Click Here
            </Link>
          </p>
          <p>
            CUTM_Value Added Course Repository 2021 –{" "}
            <Link to="https://courseware.cutm.ac.in/wp-content/uploads/2021/09/CUTM_Value-Added-Course-Repository-2021-.pdf">
              Click Here
            </Link>
          </p>
          <p>
            CUTM_Skill courses 2021 –{" "}
            <Link to="https://courseware.cutm.ac.in/wp-content/uploads/2021/09/CUTM_Skill-courses-2021.pdf">
              Click Here
            </Link>
          </p>
        </div>
        <div className="campus-card" id="andhra-campus">
          <h2>Andhra Pradesh Campus</h2>
          <p>
            Programme Structure (CBCS) –{" "}
            <Link to="https://courseware.cutm.ac.in/wp-content/uploads/2021/01/Programme-Structure_2020.pdf">
              Click Here
            </Link>
          </p>
          <p>
            CUTM_Course Repository –{" "}
            <Link to="https://courseware.cutm.ac.in/wp-content/uploads/2020/06/Programme-Structure-Final-AP-Campus.pdf">
              Click Here
            </Link>
          </p>
        </div>
      </div>
      <Logo />
      <Footer />
    </>
  );
};

export default ProgrammeStructure;
