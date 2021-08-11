import React, { useContext } from "react";
import ProductContext from "./ProductContext";

function Form() {
  const { handleInputChange, handleFormSubmit, entry } =
    useContext(ProductContext);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="container-input">
          <label htmlFor="product">Product : </label>
          <input
            type="text"
            id="product"
            onChange={handleInputChange}
            value={entry}
          />
        </div>
        <div className="container-btn">
          <input type="submit" value="submit" id="btn-submit" />
        </div>
      </form>
    </>
  );
}

export default Form;
