import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import Props from "./components/props";
// import Event from "./components/event";
// import Login from "./components/conditioning";
import reportWebVitals from "./reportWebVitals";
// import Forms from "./components/forms";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Course from "./components/Course";
import Java from "./components/Java";
import Python from "./components/Python";
import Effect from "./components/effect";

let rootid = document.getElementById("root");

const root = ReactDOM.createRoot(rootid);

// let namee = prompt("Enter Name value");
// let agee = prompt("Enter Age value");
// let numm = prompt("Enter Number value");

// let txt = prompt("enter text")
// let link = prompt("enter link")

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/*<Props name={namee} age={agee} num={numm}/> */}

    {/* <Props txt={txt} link={link}/> */}

    {/* <Event/> */}
    {/* <Login verify={true} isName={-10}/> */}
    {/* <Forms/> */}
  
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/course">Course</Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />}>
          <Route path="java" element={<Java />} />
          <Route path="python" element={<Python />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
