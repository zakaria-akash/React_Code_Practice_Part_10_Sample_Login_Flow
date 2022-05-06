import React from "react";
import InputEntry from "./InputEntry";

function RegisterForm() {
  return (
    <form className="form">
      <h4>Create your new account </h4>
      <InputEntry type="text" placeholder="username" />
      <InputEntry type="password" placeholder="password" />
      <InputEntry type="password" placeholder="confirm password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
