import { useEffect, useState } from "react";
import changeQuantity from "./api-interaction/changeQuantity";
import deleteCard from "./api-interaction/deleteCard";

function Table(props) {
  const { cards, setIsDeleted } = props;
  console.log(cards);

  const [displayCards, setDisplayCards] = useState(cards);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setDisplayCards(cards);
    setEdit(false);
  }, [cards, edit]);

  return (
    <div className="flex flex-row justify-center border-r-2 w-screen">
      <hr />
      <table>
        <tbody>
          <tr>
            {displayCards.map((item, index) => {
              return (
                <td
                  key={item.item_id}
                  className="inline-block w-60 text-center"
                >
                  <img
                    className="image rounded-lg"
                    width="240px"
                    src={item.image}
                    alt={item.name}
                  ></img>
                  <div className="w-60 bg-blue-200 rounded-lg">
                    <p className="inline-block w-60 text-center font-semibold">
                      Value: €{item.price / 100} | Quantity: {item.quantity}
                    </p>
                    <br />
                    <button
                      className="btn bg-green-400 hover:bg-green-500 text-xs"
                      onClick={(e) => {
                        e.preventDefault();
                        item.quantity++;
                        setEdit(true);
                        changeQuantity(1, item.card_id);
                      }}
                    >
                      Increase quantity
                    </button>
                    <button
                      className="btn bg-red-400 hover:bg-red-500 text-xs"
                      onClick={(e) => {
                        if (item.quantity > 1) {
                          e.preventDefault();
                          item.quantity--;
                          setEdit(true);
                          changeQuantity(-1, item.card_id);
                        } else {
                          e.preventDefault();
                          item.quantity--;
                          setEdit(true);
                          setIsDeleted(true);
                          deleteCard(item.card_id);
                        }
                      }}
                    >
                      Decrease quantity
                    </button>
                  </div>
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
