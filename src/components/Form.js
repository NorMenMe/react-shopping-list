import React, { useContext } from "react";
import ProductContext from "./ProductContext";

function Form() {
  const { handleInputChange, handleFormSubmit, entry } =
    useContext(ProductContext);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="container-input">
          <label htmlFor="product" id="label">
            ↓ Get your movies ↓
          </label>
          <input
            type="text"
            id="product"
            onChange={handleInputChange}
            value={entry}
            placeholder="movie name"
          />
        </div>
        <div className="wrapper-btn">
          <button type="submit" class="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
