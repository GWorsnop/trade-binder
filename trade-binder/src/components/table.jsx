import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Table(props) {
  const { cards, setIsDeleted } = props;
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <hr />
      <table id="table">
        <thead id="header">
          <tr id="items-row-names">
            <th>Card Name:</th>
            <th>Image:</th>
            <th>Quantity:</th>
            <th>Price:</th>
            <th>Trade:</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {cards.map((item) => {
            return (
              <tr key={item.card_id}>
                <th>{item.name}</th>
                <th>
                  <img
                    className="image"
                    src={item.image}
                    alt={item.name}
                    height="100px"
                    width="75px"
                  ></img>
                </th>
                <th>{item.quantity}</th>
                <th>€{item.price / 100}</th>
                <th>
                  <button
                    onClick={() => {
                      // orderItem(user.username, item.item_id);
                    }}
                  >
                    Delete item
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
