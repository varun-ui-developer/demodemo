import React from "react";
import { useState } from "react";

export function Component() {
  let [demo, setDemo] = useState("Varun");

  return (
    <div>
      Component{demo}
      <Component1 demo={demo} />
    </div>
  );
}
export function Component1(props) {
  return (
    <div>
      Component1 {props.demo}
      <Component2 demo={props.demo} />
    </div>
  );
}
export function Component2(props) {
  return (
    <div>
      Component2 {props.demo}
      <Component3 demo={props.demo} />
    </div>
  );
}
export function Component3(props) {
  return <div>Component3 {props.demo}</div>;
}
