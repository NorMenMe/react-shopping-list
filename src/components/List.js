import React, { useContext } from "react";
import ProductContext from "./ProductContext";
import Card from "./Card";

function List() {
  const { search, setSearch } = useContext(ProductContext);

  const result = search.map((movie, index) => {
    return (
      <>
        <Card movie={movie} />
      </>
    );
  });

  return <div className="wrapper-list">{result}</div>;
}

export default List;
