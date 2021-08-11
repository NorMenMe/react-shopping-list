import React, { useState } from "react";

function Card({ movie, deleteProduct }) {
  const [count, setCount] = useState(0);

  function handleIncrementClick() {
    setCount(count + 1);
  }

  function handleDecrementClick() {
    setCount(count - 1);
  }

  console.log(count);

  return (
    <>
      <div key={movie.imdbID} className="card" style={{ width: "14rem" }}>
        <img className="card-img-top" src={movie.Poster} alt="Card image cap" />
        <div className="card-body">
          <div className="wrapper-increment">
            <div id="increment">
              <span onClick={handleIncrementClick}>+</span>
            </div>
          </div>
          <div className="name-count">
            <h5 className="card-title">{movie.name}</h5>
            <p>{count}</p>
          </div>
          <div className="wrapper-decrement">
            <div id="decrement">
              <span onClick={handleDecrementClick}>-</span>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => deleteProduct(movie.imdbID)}
        >
          Delete item
        </button>
      </div>
    </>
  );
}

export default Card;
