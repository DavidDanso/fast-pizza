import React from "react";

const Order = ({ openHour, closeHour }) => {
  return (
    <div className="order">
      <p>
        We're happy to welcome you between {openHour}:00pm and {closeHour}
        :00pm.
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;
