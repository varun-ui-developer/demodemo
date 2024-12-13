import React from "react";
import { Link, Outlet } from "react-router-dom";

function Course() {

  return (
    <div>
      <Link to="java">Java</Link>
      <Link to="python">Python</Link>
      <Outlet />
    </div>
  );
}

export default Course;
