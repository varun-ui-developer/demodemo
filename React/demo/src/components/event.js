import React from "react";
import { useState } from "react";

function Event() {
  let [name, setName] = useState("");

  function change(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <input type="text" name="name" id="name" onChange={change} value={name} />
      <h1>Hello {name}!, This is From Event</h1>

      {/* <button onClick={click}>Click Me</button> */}
    </div>
  );
}

export default Event;
