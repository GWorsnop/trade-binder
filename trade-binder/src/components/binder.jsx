import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Binder(props) {
  const { cards, setIsDeleted } = props;
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="binder">
      {cards.map((item) => {
        return (
          <div key={item.item_id}>
            <p>{item.name}</p>
            <img
              className="image"
              src={item.image}
              alt={item.name}
              height="100px"
              width="75px"
            ></img>
            <p>Quantity: {item.quantity}</p>
            <p>€{item.price / 100}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Binder;
