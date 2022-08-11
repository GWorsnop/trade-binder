import getUsers from "./api-interaction/getUsers";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

function Friends() {
  const [allUsers, setAllUsers] = useState([]);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((data) => {
      setAllUsers(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="m-auto">
        <h3 className="text-xl font-bold"> Friends: </h3>
        <br />
        <div>
          <p className="loader"></p>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <h3 className="text-xl font-bold"> Friends: </h3>
        <br />
        <div className="grid gap-4 grid-cols-3 grid-rows-1 justify-items-center">
          {allUsers.map((profile, i) => {
            if (profile.username === user.username) {
              return null;
            } else
              return (
                <div
                  key={profile.username}
                  className="w-36 bg-blue-400 rounded-md shadow-md mb-4"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {profile.username}
                  </h3>
                  <img
                    className="profile m-auto"
                    src={profile.avatar_url}
                    alt={profile.username}
                    height="100px"
                    width="100px"
                  />
                  <Link to={`/friends/${profile.username}`}>
                    <button className="btn bg-white hover:bg-green-100 text-black text-xs">
                      Choose User
                    </button>
                  </Link>
                </div>
              );
          })}
        </div>
      </div>
    );
}

export default Friends;
