import React from "react";

import { useState, useEffect } from "react";

function DescriptionPro() {
  const [storedProfile, setStoredProfile] = useState(null);

  const courseId = 21;

  useEffect(() => {
    const storedData = localStorage.getItem(`course_${courseId}`);

    if (storedData) {
      setStoredProfile(JSON.parse(storedData));
    } else {
      fetch(`http://localhost:9092/courses/${courseId}`)
        .then((response) => response.json())
        .then((data) => {
          setStoredProfile(data);
          localStorage.setItem(`course_${courseId}`, JSON.stringify(data));
        })
        .catch((error) => console.error("Error fetching course data:", error));
    }
  }, [courseId]);
  const containerStyle = {
    width: "80%",
    margin: "0",
    whiteSpace: "pre-wrap",
    padding: "20px",
    textAlign: "left",
  };
  const linkStyle = {
    display: "block",
    marginBottom: "10px",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "left",
  };

  const subheadingStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "16px",
    marginBottom: "20px",
  };

  const listStyle = {
    listStyleType: "disc",
    paddingLeft: "20px",
  };

  return (
    <>
      {storedProfile ? (
        <div style={containerStyle}>
          <h1 style={headingStyle}>{storedProfile.courseName}</h1>
          <h1>
            <p style={headingStyle}>{storedProfile.credit}</p>
          </h1>

          <h2 style={subheadingStyle}>Course Objectives</h2>
          <p style={paragraphStyle}>{storedProfile.courseObjective}</p>

          <h2 style={subheadingStyle}>Learning Outcomes</h2>
          <p style={paragraphStyle}>{storedProfile.learningOutcomes}</p>

          <h2 style={subheadingStyle}>Course Syllabus</h2>
          <p>{storedProfile.coreSyllabus}</p>

          <h2 style={subheadingStyle}>Session Plan</h2>
          {/*session 1 */}

          <p style={paragraphStyle}>{storedProfile.session}</p>
        </div>
      ) : (
        <p>No stored profile found.</p>
      )}{" "}
    </>
  );
}

export default DescriptionPro;
