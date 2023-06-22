import React, { useState } from "react";
import { Validator } from "./v-lib/V-lib";
import SingleValidating from "./SingleValidating";
import ObjectValidating from "./ObjectValidating";
import "./App.css";

const Form = () => {

  return (
    <>
      <ObjectValidating />
      <SingleValidating />
    </>
  );
};

export default Form;
