import React, { useContext, useState, useEffect } from "react";
import ProductContext from "./ProductContext";
import ListItem from "./ListItem";

function Basket() {
  const { movieShow, setMovieShow } = useContext(ProductContext);

  const [arrForSum, setArrForSum] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  console.log(arrForSum);

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

  useEffect(() => {
    const tempReduce = arrForSum
      .reduce((accu, currentVa) => {
        return accu + Number(currentVa);
      }, 0)
      .toFixed(2);
    setTotalPrice(tempReduce);
    console.log(arrForSum);
  }, [arrForSum]);

  return (
    <div className="wrapper-basket">
      <h4>Shopping basket</h4>
      <ul>{listMovieShow}</ul>
      <div>
        <p className="total">Total €{totalPrice}</p>
      </div>
    </div>
  );
}

export default Basket;
