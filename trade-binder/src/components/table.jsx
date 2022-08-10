import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Table(props) {
  const { cards, setIsDeleted } = props;
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="hidden">
      <hr />
      <table id="table" width="1200" border="0" cellPadding="0" cellSpacing="0">
        <tbody id="table-body">
          <tr>
            {cards.map((item) => {
              return (
                <td key={item.item_id}>
                  <img
                    className="image"
                    width="240px"
                    align="left"
                    hspace="0"
                    src={item.image}
                    alt={item.name}
                  ></img>
                  <td>
                    Value: €{item.price / 100} | Quantity: {item.quantity}{" "}
                  </td>
                  <br />
                  <button>Delete</button>
                  <button className="bottomButtom">Change Quantity</button>
                  <br />
                  <p></p>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
