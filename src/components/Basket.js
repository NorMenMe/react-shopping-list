import React, { useContext } from "react";
import ProductContext from "./ProductContext";
import ListItem from "./ListItem";

function Basket() {
  const { movieShow, setMovieShow } = useContext(ProductContext);

  console.log(movieShow);

  const removeUpdate = (id) => {
    const temp = movieShow.filter((movie) => movie.imdbID !== id);
    setMovieShow(temp);
  };

  const listMovieShow = movieShow.map((movie, index) => (
    <ListItem movie={movie} index={index} onRemoveUpdate={removeUpdate} />
  ));

  return (
    <div className="wrapper-basket">
      Shopping basket
      <ul>{listMovieShow}</ul>
      <div>
        <p></p>
      </div>
    </div>
  );
}

export default Basket;
