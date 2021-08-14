import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import ProductContext from "./ProductContext";

function Card({ movie, removeUpdate }) {
  const [count, setCount] = useState(0);

  const { setMovieShow } = useContext(ProductContext);
  console.log();

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
              <div id="increment" onClick={handleIncrementClick}>
                <span>+</span>
              </div>
            </div>
            <div className="wrapper-name-count">
              <h5 className="card-title">{movie.Title}</h5>
              <div className="wrapper-count">
                <p id="count">{count}</p>
              </div>
            </div>
            <div className="wrapper-decrement">
              <div id="decrement" onClick={handleDecrementClick}>
                <span>-</span>
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
          <Button variant="primary" onClick={() => setMovieShow(movie)}>
            Add to basket
          </Button>
        </div>
      </div>
    </>
  );
}

export default Card;
