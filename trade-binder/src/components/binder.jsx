import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Binder(props) {
  const { cards, setIsDeleted } = props;
  const { user, setUser } = useContext(UserContext);

  return (
    <div
      className="binder"
      width="1200"
      border="0"
      cellPadding="0"
      cellSpacing="0"
      colSpan={5}
    >
      {cards.map((item) => {
        return (
          <div key={item.item_id} valign="top">
            <p>{item.name}</p>
            <img
              className="image"
              width="240px"
              align="left"
              hspace="0"
              src={item.image}
              alt={item.name}
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
