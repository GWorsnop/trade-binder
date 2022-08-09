import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import addCard from "./api-interaction/addCard";

export default function CardSearch() {
  const { user, setUser } = useContext(UserContext);
  const [getSuccessfulCheck, SetGetSuccessful] = useState(
    "Item Search: Pending"
  );
  const [postSuccessful, SetPostSuccessful] = useState(null);
  const [cardName, SetCardName] = useState("");
  const [cardSet, SetCardSet] = useState("");
  const [isFoil, SetIsFoil] = useState(false);
  const [quantity, SetQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [error, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState({
    name: "",
    prices: { eur: 0 },
    image_uris: { small: "" },
  });

  const handleSubmit = (e) => {
    setIsLoading(true);
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
        setImage(res.data.image_uris.small);
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
    <div className="card-search">
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            onChange={(event) => {
              SetCardName(event.target.value);
            }}
            type="text"
            name="name"
            value={cardName}
          />
        </label>
        <br />
        <label>
          Set:
          <input
            onChange={(event) => {
              SetCardSet(event.target.value);
            }}
            type="text"
            name="description"
            value={cardSet}
          />
        </label>
        <br />
        <label>
          Quantity
          <input
            onChange={(event) => {
              SetQuantity(event.target.value);
            }}
            type="number"
            name="price"
            value={quantity}
          />
        </label>
        <br />
        <button
          type="reset"
          onClick={() => {
            SetCardName("");
            SetCardSet("");
            setPrice(0);
            setImage("");
            SetIsFoil(false);
            SetQuantity(1);
            SetPostSuccessful(null);
          }}
        >
          Reset
        </button>
        <button type="submit">Search</button>
      </form>
      <hr />
      <p>{getSuccessfulCheck}</p>
      <p>{error}</p>
      <h3>Card Found</h3>
      <p>{result.name}</p>
      <p>Price: €{price / 100}</p>
      <p>Quantity: {quantity}</p>
      <img src={image} alt={cardName} />
      <p>{postSuccessful}</p>
      <b />
      <button
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
    </div>
  );
}
