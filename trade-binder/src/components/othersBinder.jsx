import { useState, useEffect } from "react";
import axios from "axios";
import OthersTable from "./othersTable";
import { useContext } from "react";
import { UserContext } from "./UserContext";

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
        <h3 className="text-1xl text-black font-semibold">
          {usersBinder}'s Trade-Binder:
        </h3>
        <br />
        <OthersTable id="binder" cards={cards} setIsDeleted={setIsDeleted} />
      </div>
    );
}

export default OthersBinder;
