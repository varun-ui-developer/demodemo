import logo from "./logo.svg";
// import './App.css';
import Functional from "./components/functional";
import { useState } from "react";

function App(props) {
  let [style, setStyle] = useState({
    color: "red",
    fontSize: "20px",
    backgroundColor: "blue",
  });
  // let cssstyle = {color:"red",backgroundColor:"red"}
  function change() {
    setStyle({
      color: "blue",
      fontSize: "30px",
      backgroundColor: "green",
    });
  }

  return (
    <div className="App">
      <header className="App-header" style={style}>
        <button onClick={change}>Click Me</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Functional />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {props.name}
        </a>
      </header>
    </div>
  );
}

export default App;
