import React, { useState } from "react";
import "./LoginForm.css";
import Box from "./Box";

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ username: "", password: "" });

  const submitHandler = (event) => {
    event.preventDefault();
    Login(details);
  };

  return (
    <div className="login">
      <form onSubmit={submitHandler}>
        <div className="login-input">
          <label>Username</label>
          <input
            type="text"
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
            values={details.username}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            values={details.password}
          ></input>
          <button type="submit" value="LOGIN">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
