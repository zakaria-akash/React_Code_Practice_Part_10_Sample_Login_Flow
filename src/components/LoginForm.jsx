import React from "react";
import InputEntry from "./InputEntry";

function LoginForm() {
  return (
    <form className="form">
      <h4>Welcome! Please login to continue </h4>
      <InputEntry type="text" placeholder="username" />
      <InputEntry type="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
