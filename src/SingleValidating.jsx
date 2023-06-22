import React, { useState } from "react";
import "./App.css";

//? IMPORT LIBRARY
import { Validator } from "./v-lib/V-lib";

const SingleValidating = () => {
  //? INITIALIZE VALIDATOR
  const V = new Validator("optional for now");

  //? GRAB ERRORS FROM V.ERRORS
  const errors = V.errors;

  //? SET UP OPTIONAL RULES YOU WANT A FIELD
  V.rules = {
    minLength: 2,
    maxLength: 10,
    toMatch: "pumpmkin"
  };

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    V.validate(name);
    console.log(errors);
    if (errors.length) alert(errors[0]);
  };

  return (
    <div className="form-container">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SingleValidating;
