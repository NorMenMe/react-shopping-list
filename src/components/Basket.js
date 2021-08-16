import React, { useContext, useState } from "react";
import ProductContext from "./ProductContext";
import ListItem from "./ListItem";

function Basket() {
  const { movieShow, setMovieShow } = useContext(ProductContext);
  const [arrForSum, setArrForSum] = useState([]);

  console.log(arrForSum);

  // const filtered = () => {
  //   arrForSum.reduce((accu, currentVa) => {
  //     return accu + currentVa;
  //   }, 0);
  // };

  const removeUpdate = (id, price) => {
    const temp = movieShow.filter((movie) => movie.imdbID !== id);
    setMovieShow(temp);
    const newArr = arrForSum.filter((item) => item !== price);
    setArrForSum(newArr);
  };

  const listMovieShow = movieShow.map((movie, index) => (
    <ListItem
      movie={movie}
      index={index}
      onRemoveUpdate={removeUpdate}
      arrForSum={arrForSum}
      setArrForSum={setArrForSum}
    />
  ));

  return (
    <div className="wrapper-basket">
      <h4>Shopping basket</h4>
      <ul>{listMovieShow}</ul>
      <div>
        <p className="total">
          Total €
          {arrForSum.reduce((accu, currentVa) => {
            return accu + Number(currentVa);
          }, 0)}
        </p>
      </div>
    </div>
  );
}

export default Basket;
