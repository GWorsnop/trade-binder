import axios from "axios";
import { useEffect, useState } from "react";

export default function CardSearch() {
  const [getSuccessfulCheck, SetGetSuccessful] = useState(
    "Item Search: Pending"
  );

  const [cardName, SetCardName] = useState("");
  const [cardSet, SetCardSet] = useState("");
  const [isFoil, SetIsFoil] = useState(false);
  const [quantity, SetQuantity] = useState(1);
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
        return res;
      })
      .then((res) => {
        setResult(res.data);
        SetGetSuccessful("Item Search: Submitted!");
      })
      .catch((err) => {
        SetGetSuccessful("Item Submission: Failed.");
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
        <label id="itemCategory">
          Foil:
          <select
            value={isFoil}
            onChange={(event) => {
              SetIsFoil(event.target.value);
            }}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
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
            SetIsFoil(false);
            SetQuantity(1);
          }}
        >
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
      <hr />
      <p>{getSuccessfulCheck}</p>
      <p>{error}</p>
      <h3>Card Found</h3>
      <p>{result.name}</p>
      <p>Price: €{result.prices.eur}</p>
      <p>Foil: {isFoil}</p>
      <img src={result.image_uris.small} alt={result.name} />
    </div>
  );
}
