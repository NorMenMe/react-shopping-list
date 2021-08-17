import React, { useContext } from "react";
import ProductContext from "./ProductContext";
import Card from "./Card";

function List() {
  const { search } = useContext(ProductContext);

  // ↓↓↓ store the map-logic inside a variable and then pass it through the render process

  const result = search.map((movie) => {
    return (
      <>
        <Card movie={movie} />
      </>
    );
  });

  return <div className="wrapper-list">{result}</div>;
}

export default List;
