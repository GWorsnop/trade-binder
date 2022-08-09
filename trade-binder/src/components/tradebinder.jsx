import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./table";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import Buttons from "./buttons";
import Binder from "./binder";

function Tradebinder() {
  const { user, setUser } = useContext(UserContext);
  const [cards, setCards] = useState([]);
  const [queriedCategory, setQueryCategory] = useState(null);
  const [sortCategory, setSortCategory] = useState(null);
  const [order, setOrder] = useState("asc");
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://gworsnop-trade-binder.herokuapp.com/api/cards/${user.username}`
      )
      .then((res) => {
        setCards(res.data.cards);
        setIsLoading(false);
        setIsDeleted(false);
      });
  }, [queriedCategory, sortCategory, order, isDeleted, user]);

  if (isLoading) {
    return (
      <div className="filters">
        <p className="loader"></p>
      </div>
    );
  } else
    return (
      <div>
        <Binder id="binder" cards={cards} setIsDeleted={setIsDeleted} />
      </div>
    );
}

export default Tradebinder;

/* <Buttons
setQueryCategory={setQueryCategory}
setSortCategory={setSortCategory}
order={order}
setOrder={setOrder}
/> */
