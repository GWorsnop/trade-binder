import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Navigation() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h3>Hello {user.username}</h3>
      <img
        className="profile"
        src={user.avatar_url}
        alt={user.username}
        height="100px"
        width="100px"
      />
      <h3></h3>
    </div>
  );
}

export default Navigation;
