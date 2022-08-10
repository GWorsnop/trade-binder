import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Header() {
  let navigate = useNavigate();

  return (
    <header>
      <h1>MTG Trade-Binder</h1>
      <h2>Gather your collection and share your trade-binder digitally</h2>
      <button onClick={() => navigate("/profile")}>Log in</button>
      <button onClick={() => navigate("/")}>Trade-Binder</button>
      <button onClick={() => navigate("/search")}>Add to Binder</button>
      <button onClick={() => navigate("/friends")}>
        View Friends' Binders
      </button>
    </header>
  );
}

export default Header;
