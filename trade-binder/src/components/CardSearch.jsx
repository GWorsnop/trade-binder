import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import addCard from "./api-interaction/addCard";

export default function CardSearch() {
  const { user } = useContext(UserContext);
  const [getSuccessfulCheck, SetGetSuccessful] = useState(
    "Item Search: Pending..."
  );
  const [postSuccessful, SetPostSuccessful] = useState(null);
  const [cardName, SetCardName] = useState("");
  const [cardSet, SetCardSet] = useState("");
  const [quantity, SetQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [error, setErr] = useState(null);
  const [result, setResult] = useState({
    name: "",
    prices: { eur: 0 },
    image_uris: { small: "" },
  });

  const handleSubmit = (e) => {
    setErr(null);
    e.preventDefault();
    axios
      .get(`https://api.scryfall.com/cards/named?`, {
        params: {
          fuzzy: cardName,
          set: cardSet,
        },
      })
      .then((res) => {
        setResult(res.data);
        SetCardName(res.data.name);
        setImage(res.data.image_uris.normal);
        setPrice(Number(res.data.prices.eur * 100));
        SetGetSuccessful("Item Search: Submitted!");
        SetPostSuccessful(null);
      })
      .catch((err) => {
        SetGetSuccessful("Item Search: Failed.");
        setErr(err.message);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="px-8">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Name:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(event) => {
                  SetCardName(event.target.value);
                }}
                type="text"
                name="name"
                value={cardName}
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Set:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(event) => {
                  SetCardSet(event.target.value);
                }}
                type="text"
                name="description"
                value={cardSet}
              />
            </label>
            <p className="text-gray-600 text-xs italic">
              Specific set not required, but value may differ.
            </p>
          </div>
          <div className="mb-10">
            <label className="block text-gray-700 text-sm font-bold mb-4 text-left">
              Quantity:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(event) => {
                  SetQuantity(event.target.value);
                }}
                type="number"
                name="price"
                value={quantity}
              />
            </label>
          </div>
          <div className="flex items-center justify-between pt-4">
            <button
              className="btn bg-gray-400 hover:bg-gray-500 text-xs"
              type="reset"
              onClick={() => {
                SetCardName("");
                SetCardSet("");
                setPrice(0);
                setImage("");
                SetQuantity(1);
                SetGetSuccessful("Item Search: Pending...");
                SetPostSuccessful(null);
              }}
            >
              Reset
            </button>
            <button
              className="btn bg-green-400 hover:bg-green-500 text-xs"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-2 pb-4 mb-4 w-64 h-96">
        <p>{getSuccessfulCheck}</p>
        <p>{error}</p>
        {getSuccessfulCheck === "Item Search: Submitted!" && (
          <div className="pt-2">
            <img
              className="m-auto h-56 rounded-lg"
              src={image}
              alt={cardName}
            />
            <p className="font-semibold">Price: €{price / 100}</p>
            <p className="font-semibold">Quantity: {quantity}</p>
            <b />
            <button
              className="btn bg-green-400 hover:bg-green-500 text-xs"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                if (user.username === "Guest") {
                  SetPostSuccessful(
                    "You must be logged in to add a card to your binder!"
                  );
                } else {
                  addCard(cardName, price, quantity, image, user.username);
                  SetPostSuccessful("Card added to binder!");
                }
              }}
            >
              Add to Binder
            </button>
            <p>{postSuccessful}</p>
          </div>
        )}
      </div>
    </div>
  );
}
