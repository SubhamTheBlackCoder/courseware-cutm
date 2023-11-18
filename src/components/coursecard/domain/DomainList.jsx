import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../styles/CoreCourses.css';

const DomainList = (props) => {
  return (<>
    <div className="card">
      <h2>{props.heading}</h2>
      <Link to={props.path}>
        <button className="read-more-button">Read More</button>
      </Link>
      <Outlet />
    </div>
   
    
    </>
  );
};

export default DomainList;
