import React, { useState, useContext } from "react";
import List from "./List";
import Form from "./Form";

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
