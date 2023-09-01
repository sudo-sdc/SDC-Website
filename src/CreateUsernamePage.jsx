import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator"; // Import the validator library
import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import "./style.css";
import { db } from "./firebase/firebaseConfig";

const CreateUsernamePage = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const collectionReference = collection(db, "emails")

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
      await addDoc(collectionReference, {
        email: email
      });
      setErrorMessage("Email Registered Succesfully");
      setTimeout(()=>navigate("/"),1000 )
    } catch (error) {
      console.error("Error registering user:", error);
      setErrorMessage("Error lil bro");
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
