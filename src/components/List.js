import React, { useContext } from "react";
import ProductContext from "./ProductContext";
import Card from "./Card";

function List() {
  const { allProducts } = useContext(ProductContext);
  console.log(allProducts);

  const result = allProducts.map((product) => {
    const imgUrl = `https://spoonacular.com/cdn/ingredients_100x100/${product.name}.jpg`;

    return (
      <>
        <Card product={product} imgUrl={imgUrl} />
      </>
    );
  });

  return <div className="wrapper-list">Suggested products :{result}</div>;
}

export default List;
