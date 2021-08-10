import React, { useState, useContext } from "react";
import ProductContext from "./ProductContext";
import List from "./List";

import { Link } from "react-router-dom";

function Create() {
  const { handleInputChange, handleFormSubmit, allProducts, product } =
    useContext(ProductContext);

  return (
    <>
      <div className="container-form">
        <form onSubmit={handleFormSubmit}>
          <div className="container-input">
            <label htmlFor="product">Product : </label>
            <input
              type="text"
              id="product"
              onChange={handleInputChange}
              value={product}
            />
          </div>
          <div className="container-btn">
            <input type="submit" value="submit" id="btn-submit" />
          </div>
        </form>
      </div>
      <List />
    </>
  );
}

export default Create;
