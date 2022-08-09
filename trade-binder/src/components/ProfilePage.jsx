import getUsers from "./api-interaction/getUsers";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

function ProfilePage() {
  const [allUsers, setAllUsers] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const guest = [
    {
      username: "Guest",
      avatar_url:
        "https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg",
      kudos: 0,
    },
  ];

  useEffect(() => {
    getUsers().then((data) => {
      setAllUsers(data);
    });
  }, []);

  return (
    <div>
      <h3> Choose your user: </h3>
      <ul>
        {guest.map((user, i) => {
          return (
            <li key={user.username}>
              <h3>{user.username}</h3>
              <img
                className="profile"
                src={user.avatar_url}
                alt={user.username}
                height="100px"
                width="100px"
              />
              <br />
              <Link to={`/`}>
                <button onClick={() => setUser(user)}>Choose User</button>
              </Link>
            </li>
          );
        })}
        {allUsers.map((user, i) => {
          return (
            <li key={user.username}>
              <h3>{user.username}</h3>
              <img
                className="profile"
                src={user.avatar_url}
                alt={user.username}
                height="100px"
                width="100px"
              />
              <br />
              <Link to={`/`}>
                <button onClick={() => setUser(user)}>Choose User</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProfilePage;
