import React from "react";
import { Link, Outlet } from "react-router-dom";

const NewYork = () => {
  return (
    <div>
      <h1>NewYork</h1>
      <Link to="/teacher/raka/users">sorry</Link>
      <Outlet />
    </div>
  );
};

export default NewYork;
