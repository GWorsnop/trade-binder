import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import changeQuantity from "./api-interaction/changeQuantity";
import deleteCard from "./api-interaction/deleteCard";

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
                    Value: €{item.price / 100} | Quantity: {item.quantity}
                  </td>
                  <br />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      changeQuantity(1, item.card_id);
                    }}
                  >
                    Increase quantity
                  </button>
                  <button
                    onClick={(e) => {
                      if (item.quantity > 1) {
                        e.preventDefault();
                        changeQuantity(-1, item.card_id);
                      } else {
                        e.preventDefault();
                        setIsDeleted(true);
                        deleteCard(item.card_id);
                      }
                    }}
                  >
                    Decrease quantity
                  </button>
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
