import React, { useState } from "react";
import { useEffect } from "react";

function Effect() {
  let [count, setCount] = useState(0);
  let [demo, setDemo] = useState(0);
  useEffect(()=>console.log("hii"),[count,demo])
  return (
    <div>
      <h1>Effect Hook</h1>
      <p>Count : {count}</p>
      <p>Count2 : {demo}</p>
      <button onClick={() => setCount(count + 1)}>CLick me</button>
      <button onClick={() => setDemo(demo + 1)}>CLick me</button>
    </div>
  );
}

export default Effect;
