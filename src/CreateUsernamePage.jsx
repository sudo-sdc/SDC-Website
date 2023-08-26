import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator"; // Import the validator library
import axios from "axios";
import "./style.css";

const CreateUsernamePage = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/register", {
        name: email,
      });

      if (response.data.exists) {
        setErrorMessage(response.data.message);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      setErrorMessage("An error occurred while registering.");
    }
  };

  return (
    <div>
      <div className="login-form">
        <div className="color">
          <h1 className="LoginPost">Email Registration</h1>
          <form onSubmit={handleSubmit}>
            <div className="inputWrapper">
              <p>Email address</p>
              <input
                type="text"
                placeholder="Email"
                autoComplete="off"
                id="userName"
                name="username"
                value={email}
                onChange={handleInputChange}
              />
            </div>

            <div className="error-message">
              {errorMessage && <p className="error-text">{errorMessage}</p>}
            </div>

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUsernamePage;
