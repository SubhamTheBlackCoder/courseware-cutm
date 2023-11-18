import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import '../../styles/TeacherRaka.css';
import Logo from '../../log/Logo';
import Footer from '../../footer/Footer';

const TeacherFirstPage = () => {
  const location = useLocation();
  const updatedProfile = location.state?.updatedProfile;

  const [savedProfile, setSavedProfile] = useState(null);
  const teacherId = 10;

  useEffect(() => {
    const savedProfileData = JSON.parse(localStorage.getItem(`updatedProfile_${teacherId}`));
    if (savedProfileData) {
      setSavedProfile(savedProfileData);
    }
  }, [teacherId]);

  useEffect(() => {
    if (updatedProfile) {
      localStorage.setItem(`updatedProfile_${teacherId}`, JSON.stringify(updatedProfile));
      setSavedProfile(updatedProfile);
    }
  }, [teacherId, updatedProfile]);

  return (<>
    <div>
      <div className="topRight">
        <Link to="/teacher/raka/users" className="adminButton">
          Admin
        </Link>
      </div>
      {savedProfile && (
        <div className="backgroundStyle">
          <div className="containerStyle">
            <div className="leftSectionStyle">
              <div className="logoContainerStyle">
                <img
                  src="https://i.pinimg.com/originals/21/4d/2d/214d2d67777a013520421918c1e4a4f5.jpg"
                  alt="Logo"
                  className="logoStyle"
                />
              </div>
              <h1>{savedProfile.name}</h1>
              <p>{savedProfile.profession}</p>
              <button className="buttonStyle">MESSAGE ME</button>
              <p>{savedProfile.about}</p>
              <h3>
                <p>Programming Skills:</p>
              </h3>
              <ul>
                <li>{savedProfile.skill}</li>
              </ul>
              <h3>
                <p>Expertise</p>
              </h3>
              <ul>
                <li>Java Development</li>
                <li>Dot Net Development</li>
                <li>ReactJS</li>
              </ul>
            </div>
            <div className="rightSectionStyle">
              <p>Mail : {savedProfile.mail}</p>
              <p>Phone: {savedProfile.contact}</p>
              <p>Skype: rray080</p>
              <p>
                Web: <a href="http://cutm.ac.in">cutm.ac.in</a>
              </p>
              <p>Location: {savedProfile.location}</p>
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </div>
    <Logo/>
    <Footer/>
    </>  
  );
};

export default TeacherFirstPage;
