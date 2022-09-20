import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false);

  function handleCartClick() {
    setCart((inCart) => !inCart);
  }

  let cartClass = inCart ? "in-cart" : "";
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
