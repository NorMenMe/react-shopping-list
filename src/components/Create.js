import React, { useState, useContext } from "react";
import ProductContext from "./ProductContext";
import List from "./List";
import Form from "./Form";
import { Link } from "react-router-dom";

function Create() {
  return (
    <div className="wrapper-create">
      <div className="container-form">
        <Form />
      </div>
      <List />
    </div>
  );
}

export default Create;
