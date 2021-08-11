import React, { useContext } from "react";
import ProductContext from "./ProductContext";
import Card from "./Card";

function List() {
  const { search } = useContext(ProductContext);
  console.log(search);

  const deleteProduct = (id) => {
    return search.filter((movie) => movie.id !== id);
  };

  const result = search.map((movie) => {
    return (
      <>
        <Card movie={movie} deleteProduct={deleteProduct} />
      </>
    );
  });

  return <div className="wrapper-list">Suggested products :{result}</div>;
}

export default List;
