import React from "react";

function Props(props) {

  return (
    <div>
      {/* {props.name} <br />
      {props.age} <br />
      {props.num} <br /> */}
      <a href={props.link}>{props.txt}</a>

    </div>
  );
}

export default Props;
