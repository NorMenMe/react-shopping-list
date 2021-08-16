import React, { useState } from "react";

function ListItem({
  movie,
  index,
  onRemoveUpdate,
  onUpdateArr,
  arrForSum,
  setArrForSum,
}) {
  const [count, setCount] = useState(0);
  const [priceItem, setPriceItem] = useState(0);

  function handleIncrementClick() {
    setCount(count + 1);
    setArrForSum([...arrForSum, movie.price]);
  }

  function handleDecrementClick() {
    setCount(count - 1);
    const temp = arrForSum.indexOf(movie.price);
    const test = arrForSum;
    test.splice(temp, 1);
    setArrForSum(test);
  }

  console.log(priceItem);
  return (
    <li key={index} className="listItem">
      <p>{index + 1}</p>
      <p>{movie.Title}</p>
      <div className="wrapper-counter">
        <div id="increment" onClick={handleIncrementClick}>
          <span>+</span>
        </div>
      </div>
      <span id="count">{count}</span>
      <div className="wrapper-decrement">
        <div id="decrement" onClick={handleDecrementClick}>
          <span>-</span>
        </div>
      </div>
      <p id="price">€{priceItem}</p>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => onRemoveUpdate(movie.imdbID, movie.price)}
      >
        Delete item
      </button>
    </li>
  );
}

export default ListItem;
