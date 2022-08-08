import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

function Header() {
  const { userKey, basketKey } = useContext(UserContext);
  const [user, setUser] = userKey;

  let navigate = useNavigate();
  return (
    <header>
      <h1>MTG Tradebinder</h1>
      <h2>Gather your collection and share your trade binder digitally</h2>
      <button onClick={() => navigate(-1)}>Home</button>
    </header>
  );
}

export default Header;
