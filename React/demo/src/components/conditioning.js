import React from "react";

function Success() {
  return <div>Login Success</div>;
}

function Failure() {
  return <div>Login Failure</div>;
}
function Login(props) {
  //   if (props.verify) {
  //     return <Success />;
  //   } else {
  //     return <Failure />;
  //   }

  //   props.verify ? <Success /> : <Failure />;

  return (
    <div>
      <h1>Hellllo</h1> {props.isName && <h1>Varun</h1>}
    </div>
  );
}

export default Login;
