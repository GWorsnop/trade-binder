import getUsers from "./api-interaction/getUsers";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

function Friends() {
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
      <h3> Friends: </h3>
      <ul>
        {allUsers.map((profile, i) => {
          if (profile.username === user.username) {
            return;
          } else
            return (
              <li key={profile.username}>
                <h3>{profile.username}</h3>
                <img
                  className="profile"
                  src={profile.avatar_url}
                  alt={profile.username}
                  height="100px"
                  width="100px"
                />
                <br />
                <Link to={`/friends/${profile.username}`}>
                  <button>Choose User</button>
                </Link>
              </li>
            );
        })}
      </ul>
    </div>
  );
}

export default Friends;
