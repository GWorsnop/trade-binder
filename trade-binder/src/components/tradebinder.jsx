import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./table";
import { useContext } from "react";
import { UserContext } from "./UserContext";

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

  if (user.username === "Guest") {
    return (
      <div>
        <h3 className="text-1xl text-black font-semibold">
          Hello {user.username}
        </h3>
        <div className="flex items-center justify-center">
          <img
            className="profile object-center"
            src={user.avatar_url}
            alt={user.username}
            height="100px"
            width="100px"
          />
        </div>
        <h3>Please log in to create and view your trade-binder.</h3>
      </div>
    );
  } else if (isLoading) {
    return (
      <div>
        <div className="m-auto">
          <h3 className="text-2xl text-black font-semibold">{user.username}</h3>
          <div className="flex items-center justify-center">
            <img
              className="profile object-center p-1"
              src={user.avatar_url}
              alt={user.username}
              height="100px"
              width="100px"
            />
          </div>
        </div>
        <h3 className="text-1xl text-black font-semibold">
          Your Trade-Binder:
        </h3>
        <br />
        <div>
          <p className="loader"></p>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <div className="m-auto">
          <h3 className="text-2xl text-black font-semibold">{user.username}</h3>
          <div className="flex items-center justify-center">
            <img
              className="profile object-center p-1"
              src={user.avatar_url}
              alt={user.username}
              height="100px"
              width="100px"
            />
          </div>
        </div>
        <h3 className="text-1xl text-black font-semibold">
          Your Trade-Binder:
        </h3>
        <br />
        <Table cards={cards} setIsDeleted={setIsDeleted} />
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
