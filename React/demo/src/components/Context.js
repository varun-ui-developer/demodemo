import React from "react";
import { useState, useContext, createContext } from "react";

const UserContext = createContext();

export function Context1() {
  let [user, setuser] = useState("Varun");

  return (
    <UserContext.Provider value={user}>
      <div>
        {`Hello ${user}`}
        <Context2 />
      </div>
    </UserContext.Provider>
  );
}
export function Context2() {
  return (
    <div>
      Component1
      <Context3 />
    </div>
  );
}
export function Context3() {
  return (
    <div>
      Component2
      <Context4 />
    </div>
  );
}
export function Context4() {
  const user = useContext(UserContext);
  return <div>Component3{user}</div>;
}
