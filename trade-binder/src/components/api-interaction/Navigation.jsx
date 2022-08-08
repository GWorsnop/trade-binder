import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Navigation() {
  const { userKey } = useContext(UserContext);
  const [user, setUser] = userKey;

  return (
    <div>
      <h3>Hello {user.username}</h3>
      <img
        src={user.avatar_url}
        alt={user.username}
        height="50px"
        width="50px"
      />
    </div>
  );
}

export default Navigation;
