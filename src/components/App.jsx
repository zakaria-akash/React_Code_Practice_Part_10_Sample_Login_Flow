import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

let isLoggedIn = true;
let isRegistered = true;

//writing inline function using ternary operator
function App() {
  return (
    <div className="container">
      {!isRegistered ? (
        <RegisterForm />
      ) : isLoggedIn ? (
        <div>
          <h1>Hello, I am Zakaria Ibrahim!</h1>
          <h4>Congratulation! You are logged into my portal.</h4>
          <p className="chekmark">&#10004;</p>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default App;
