import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Header() {
  const { user, setUser } = useContext(UserContext);
  let navigate = useNavigate();

  if (user.username === "Guest") {
    return (
      <header>
        <br />
        <h1 className="text-4xl text-black font-bold">MTG Trade-Binder</h1>
        <h2 className="text-2xl text-black font-semibold">
          Gather your collection and share your trade-binder digitally
        </h2>
        <button className="btn btn-blue" onClick={() => navigate("/profile")}>
          Log in
        </button>
        <button className="btn btn-blue" onClick={() => navigate("/")}>
          Trade-Binder
        </button>
        <button className="btn btn-blue" onClick={() => navigate("/search")}>
          Add to Binder
        </button>
        <button className="btn btn-blue" onClick={() => navigate("/friends")}>
          View Others' Binders
        </button>
      </header>
    );
  } else
    return (
      <header>
        <br />
        <h1 className="text-4xl text-black font-bold">MTG Trade-Binder</h1>
        <h2 className="text-2xl text-black font-semibold">
          Gather your collection and share your trade-binder digitally
        </h2>
        <div className="flex flex-row justify-center h-12">
          <img
            className="h-12 w-12 rounded-full object-center"
            src={user.avatar_url}
            alt={user.username}
          />
          <button className="btn btn-blue" onClick={() => navigate("/profile")}>
            Swap User
          </button>
          <button className="btn btn-blue" onClick={() => navigate("/")}>
            Trade-Binder
          </button>
          <button className="btn btn-blue" onClick={() => navigate("/search")}>
            Add to Binder
          </button>
          <button className="btn btn-blue" onClick={() => navigate("/friends")}>
            View Others' Binders
          </button>
        </div>
      </header>
    );
}

export default Header;
