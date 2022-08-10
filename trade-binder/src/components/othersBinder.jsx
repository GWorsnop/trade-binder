import { useState, useEffect } from "react";
import axios from "axios";
import OthersTable from "./othersTable";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import Buttons from "./buttons";
import Binder from "./binder";

function OthersBinder(props) {
  const { usersBinder } = props;
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
        `https://gworsnop-trade-binder.herokuapp.com/api/cards/${usersBinder}`
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
        <h3>{usersBinder}'s Trade-Binder:</h3>
        <OthersTable id="binder" cards={cards} setIsDeleted={setIsDeleted} />
      </div>
    );
}

export default OthersBinder;

/* <Buttons
setQueryCategory={setQueryCategory}
setSortCategory={setSortCategory}
order={order}
setOrder={setOrder}
/> */
