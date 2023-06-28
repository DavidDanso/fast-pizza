import React from "react";

const PizzaCard = ({ name, ingredients, price, photoName, soldOut }) => {
  return (
    <li className={soldOut ? "pizza sold-out" : "pizza"}>
      <img src={photoName} alt="pizzaPhoto" />

      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
};

export default PizzaCard;
