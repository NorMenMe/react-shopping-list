import React from "react";

function Card({ product, imgUrl }) {
  return (
    <>
      <div key={product.id} className="card" style={{ width: "14rem" }}>
        <img className="card-img-top" src={imgUrl} alt="Card image cap" />
        <div className="card-body">
          <div className="wrapper-increment">
            <div id="increment">
              <span>+</span>
            </div>
          </div>
          <h5 className="card-title">{product.name}</h5>
          <div className="wrapper-decrement">
            <div id="decrement">
              <span>-</span>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-danger">
          Delete item
        </button>
      </div>
    </>
  );
}

export default Card;
