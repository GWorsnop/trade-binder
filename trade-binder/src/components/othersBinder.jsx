import { useState, useEffect } from "react";
import axios from "axios";
import OthersTable from "./othersTable";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function OthersBinder(props) {
  const { usersBinder } = props;
  const { user } = useContext(UserContext);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://trade-binder-backend.onrender.com/api/cards/${usersBinder}`)
      .then((res) => {
        setCards(res.data.cards);
        setIsLoading(false);
        setIsDeleted(false);
      });
  }, [isDeleted, user, usersBinder]);

  if (isLoading) {
    return (
      <div>
        <h3 className="text-1xl text-black font-semibold">
          {usersBinder}'s Trade-Binder:
        </h3>
        <br />
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
