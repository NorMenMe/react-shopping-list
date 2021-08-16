import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import ProductContext from "./ProductContext";

function Card({ movie, removeUpdate }) {
  const { movieShow, setMovieShow } = useContext(ProductContext);

  return (
    <>
      <div key={movie.imdbID} className="card">
        <div className="wrapper-img">
          <img className="card-img-top img" src={movie.Poster} alt="Card cap" />
        </div>
        <div className="card-body">
          <div className="wrapper-card">
            <h3 className="card-title">{movie.Title}</h3>

            <p id="price">€{movie.price}</p>
            <div className="wrapper-button-basket">
              <Button
                variant="info"
                onClick={() => setMovieShow([...movieShow, movie])}
              >
                Add to basket
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
