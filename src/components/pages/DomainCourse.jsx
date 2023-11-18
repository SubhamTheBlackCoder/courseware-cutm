import React from 'react'
import { Link,Outlet } from 'react-router-dom';
const DomainCourse = () => {
  return (
    <div>
      <h1>DomainCourse</h1>
      <Link to="/course/domain-course/domain-card">sorry</Link>
      <Outlet />
    </div>
  );
};
    

export default DomainCourse
