import React, { useState } from "react";

function ListItem({ movie, index, onRemoveUpdate }) {
  const [count, setCount] = useState(0);
  // const [nums, setNums] = useState([]);
  // const [arrNums, setArrNums] = useState([]);

  function handleIncrementClick() {
    setCount(count + 1);
    // setNums(movie.price * count);
    // setArrNums([...arrNums, nums]);
  }

  // console.log(nums);

  function handleDecrementClick() {
    setCount(count - 1);
  }

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
      <p id="price">€{movie.price * count}</p>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => onRemoveUpdate(movie.imdbID)}
      >
        Delete item
      </button>
    </li>
  );
}

export default ListItem;
