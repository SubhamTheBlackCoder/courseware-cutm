import React from "react";
import { Link } from "react-router-dom";
import "../styles/OtherInformation.css";
import Logo from "../Logo";
import Footer from "../Footer";

const OtherInformation = () => {
  return (
    <>
      <div className="school-information">
        <div className="left-panel">
          <h2>Other Information</h2>
          <ul>
            <li>
              <Link to="https://courseware.cutm.ac.in/wp-content/uploads/2020/07/FAQs-for-subject-registration.pdf">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <br />
        <div className="right-panel">
          <h2>Time Table</h2>
          <p className="ok">School Of Engineering (SoET)</p>
          <table>
            <tbody>
              <tr>
                <td>
                  <Link to="https://courseware.cutm.ac.in/other-information/">
                    Aerospace
                  </Link>
                </td>
                <td>
                  <Link to="https://courseware.cutm.ac.in/other-information/">
                    Civil
                  </Link>
                </td>
                <td>
                  <Link to="https://courseware.cutm.ac.in/other-information/">
                    CSE
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="https://courseware.cutm.ac.in/other-information/">
                    ECE
                  </Link>
                </td>
                <td>
                  <Link to="https://courseware.cutm.ac.in/other-information/">
                    MECH
                  </Link>
                </td>
                <td>
                  <Link to="https://courseware.cutm.ac.in/other-information/">
                    EEE
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="https://courseware.cutm.ac.in/other-information/">
                    Mining
                  </Link>
                </td>
                <td>
                  <Link to="https://courseware.cutm.ac.in/other-information/">
                    BioTechnology
                  </Link>
                </td>
                <td>
                  <Link to="https://courseware.cutm.ac.in/other-information/">
                    Ambien Generic
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr></hr>
      <Logo />
      <Footer />
    </>
  );
};

export default OtherInformation;
