import React, { useState } from "react";

function ListItem({ movie, index, onRemoveUpdate, arrForSum, setArrForSum }) {
  const [count, setCount] = useState(0);

  function handleIncrementClick() {
    setCount(count + 1);
    setArrForSum([...arrForSum, movie.price]);
  }

  // ↓↓↓ update "arrForSum" without the decremented item

  function handleDecrementClick() {
    setCount(count - 1);
    const indexNum = arrForSum.indexOf(movie.price);
    const tempArr = [...arrForSum];
    tempArr.splice(indexNum, 1);
    setArrForSum(tempArr);
  }

  return (
    <li key={index} className="listItem">
      <div className="number-items">
        <p>{index + 1}</p>
      </div>
      <div className="title">
        <p>{movie.Title}</p>
      </div>
      <div className="wrapper-counter">
        <div className="wrapper-increment" onClick={handleIncrementClick}>
          <span>+</span>
        </div>

        <span className="count">{count}</span>

        <div className="wrapper-decrement" onClick={handleDecrementClick}>
          <span>-</span>
        </div>
      </div>
      <div className="price">
        <p>€{movie.price}</p>
      </div>
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
