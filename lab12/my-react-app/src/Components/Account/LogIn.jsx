import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Footer from "../Home/Footer";
import { useEffect, useContext } from "react";
import { AuthContext } from "../../Authentification";

function Login() {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");

  const navigate = useNavigate();

  const { setIsAuthentificated } = useContext(AuthContext);

  function handleLogin(e) {
    e.preventDefault();
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("password"));

    let mail;
    let pass;
    if (localStorage.getItem("email") != null) {
      mail = localStorage.getItem("email").replace(/"/g, "");
      pass = localStorage.getItem("password").replace(/"/g, "");
    }
    if (!emaillog || !passwordlog) {
      alert("Please, fill in all fields!");
    } else if (passwordlog !== pass || emaillog !== mail) {
      alert("Fill correct info about you!");
    } else {
      setIsAuthentificated(true);
      navigate("/home");
    }
  }

  return (
    <>
      <div className="login">
        <form onSubmit={handleLogin}>
          <h2>Log In</h2>
          <p>
            <input
              type="email"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </p>

          <p>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </p>
          <button type="submit">
            <p>Login</p>
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
