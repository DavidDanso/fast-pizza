import React from "react";
import PizzaCard from "../components/PizzaCard";
import pizzaData from "../data";
import "../index.css";

const Menu = () => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {pizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => {
              return (
                <PizzaCard
                  key={pizza.name}
                  name={pizza.name}
                  ingredients={pizza.ingredients}
                  price={pizza.price}
                  photoName={pizza.photoName}
                  soldOut={pizza.soldOut}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu:✆</p>
      )}
    </div>
  );
};

export default Menu;
