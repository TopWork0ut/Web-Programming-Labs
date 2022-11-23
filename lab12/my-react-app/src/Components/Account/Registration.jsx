import React, { useState } from "react";
import Footer from "../Home/Footer";
import "./Registration.css";

import { Link, useNavigate } from "react-router-dom";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !retypePassword) {
      alert("Please, fill in all fields!");
    } else {
      if (password == retypePassword) {
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("password", JSON.stringify(password));

        setLogin(!login);
        navigate("/login");
      } else {
        alert("Passwords don't match.");
      }
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <div className="register_div">
      <div className="register_container">
        <form onSubmit={handleFormSubmit}>
          <h2>Sign Up</h2>
          <p>
            <input
              type="text"
              id="name"
              placeholder="Enter Full Name"
              name="name"
              onChange={(event) => setName(event.target.value)}
            />
          </p>

          <p>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </p>

          <p>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </p>

          <p>
            <input
              type="password"
              id="password_retype"
              placeholder="Enter password"
              onChange={(event) => setRetypePassword(event.target.value)}
            />
          </p>

          <div className="submit_div">
            <button type="submit">
              <p>Register</p>
            </button>
            <div>
              <p onClick={handleClick} className="submit_text">
                <Link to="/login">Sign in</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Registration;
