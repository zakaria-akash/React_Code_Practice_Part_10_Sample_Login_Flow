import React from "react";
import LoginForm from "./LoginForm";

let isLoggedIn = false;

//without applying inline function
// function renderConditionally() {
//   if (isLoggedIn) {
//     return <h1>Hello, I am Zakaria Ibrahim!</h1>;
//   } else {
//     return <LoginForm />;
//   }
// }

//applying inline function using ternary operator
function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello, I am Zakaria Ibrahim!</h1> : <LoginForm />}
    </div>
  );
}

export default App;
