import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../../styles/AdvancedApplication.css";
import Logo from "../../../log/Logo";
import Footer from "../../../footer/Footer";

function AdvancedHematology() {
  return (
    <>
      <div className="topRight">
        <Link
          to="/course/core-course/Advanced-Hematology/description/users"
          className="adminButton" 
        >
          Admin
        </Link>
      </div>
      <nav className="Navdb">
        <h1 className="page-heading">Advanced Hematology</h1>
        <div className="navbar-heading">
          <div className="logo-image">
            <img
              src={
                "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48bfbc66-59e8-4ff7-99e4-b8d4166f755e/dbmhesd-7447ef50-b014-49f4-987b-cdb531572ea0.jpg/v1/fill/w_1024,h_998,q_75,strp/pain__nagato__by_murdered117_dbmhesd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTk4IiwicGF0aCI6IlwvZlwvNDhiZmJjNjYtNTllOC00ZmY3LTk5ZTQtYjhkNDE2NmY3NTVlXC9kYm1oZXNkLTc0NDdlZjUwLWIwMTQtNDlmNC05ODdiLWNkYjUzMTU3MmVhMC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oHz5pqrr9kPG9Fy9gmn3EhiqXt_ScydG853Ql4NUHZk"
              }
              alt="Logo"
            />
          </div>
          <div className="sub-heading">
            <p>Satyabrata Sadangi</p>
            <p>Domain Courses</p>
          </div>
        </div>
        <ul className="Navdb-links">
          <li>
            <Link to="/course/core-course/Advanced-Hematology/description">
              Description
            </Link>
          </li>
          <li>
            <Link to="/course/core-course/Advanced-Hematology">Teachers</Link>
          </li>
          <li>
            <Link to="/course/core-course/Advanced-Hematology">Attendees</Link>
          </li>
          <li>
            <Link to="/course/core-course/Advanced-Hematology">Comments</Link>
          </li>
          <li>
            <Link to="/course/core-course/Advanced-Hematology">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </nav>
      <Logo/>
      <Footer/>
    </>
  );
}

export default AdvancedHematology;
