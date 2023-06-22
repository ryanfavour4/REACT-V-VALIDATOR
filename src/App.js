import React, { useState } from "react";
import { Validator } from "./v-lib/V-lib";
import SingleValidating from "./SingleValidating";
import "./App.css";

const Form = () => {
  const V = new Validator("No one");
  const { errors } = V;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: ""
  });

  V.rules = {
    firstName: { minLength: 3, regex: /^[A-Z].*$/ },
    lastName: { toMatch: formData.firstName, maxLength: 19 },
    number: {
      minLength: 9,
      maxLength: 15,
      countryCode: true,
      phoneNumber: true
    },
    email: {
      email: true,
      minLength: 5,
      maxLength: 15
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    V.validate(formData);
    console.log(errors);
    if (errors.length) alert(errors[0]);
  };

  return (
    <>
      <div className="form-container">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="number">Number:</label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
      <SingleValidating />
    </>
  );
};

export default Form;
