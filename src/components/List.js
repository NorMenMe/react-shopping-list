import React, { useContext } from "react";
import ProductContext from "./ProductContext";
import Card from "./Card";

function List() {
  const { search, setSearch } = useContext(ProductContext);

  const removeUpdate = (id) => {
    const temp = search.filter((movie) => movie.imdbID !== id);
    setSearch(temp);
  };

  const result = search.map((movie, index) => {
    return (
      <>
        <Card key={index} movie={movie} removeUpdate={removeUpdate} />
      </>
    );
  });

  return <div className="wrapper-list">{result}</div>;
}

export default List;
