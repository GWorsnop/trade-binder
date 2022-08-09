import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

function Header() {
  const { user, setUser } = useContext(UserContext);
  let navigate = useNavigate();

  return (
    <header>
      <h1>MTG Tradebinder</h1>
      <h2>Gather your collection and share your trade binder digitally</h2>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/profile")}>Log in</button>
      <button onClick={() => navigate("/search")}>Add to Binder</button>
      <button onClick={() => navigate("/tradebinder")}>View your Binder</button>
    </header>
  );
}

export default Header;
