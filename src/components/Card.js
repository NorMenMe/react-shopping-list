import React, { useState } from "react";

function Card({ movie, removeUpdate }) {
  const [count, setCount] = useState(0);

  function handleIncrementClick() {
    setCount(count + 1);
  }

  function handleDecrementClick() {
    setCount(count - 1);
  }

  return (
    <>
      <div key={movie.imdbID} className="card">
        <div className="wrapper-img">
          <img
            className="card-img-top img"
            src={movie.Poster}
            alt="Card image cap"
          />
        </div>
        <div className="card-body">
          <div className="wrapper-card">
            <div className="wrapper-increment">
              <div id="increment">
                <span onClick={handleIncrementClick}>+</span>
              </div>
            </div>
            <div className="wrapper-name-count">
              <h5 className="card-title">{movie.Title}</h5>
              <div className="wrapper-count">
                <p id="count">{count}</p>
              </div>
            </div>
            <div className="wrapper-decrement">
              <div id="decrement">
                <span onClick={handleDecrementClick}>-</span>
              </div>
            </div>

            <p id="price">€{movie.price}</p>

            <button
              type="button"
              className="btn btn-danger"
              onClick={() => removeUpdate(movie.imdbID)}
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
