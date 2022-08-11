import getUsers from "./api-interaction/getUsers";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

function ProfilePage() {
  const [allUsers, setAllUsers] = useState([]);
  const { setUser } = useContext(UserContext);
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
        <div>
          <h3 className="text-xl font-bold"> Choose your user: </h3>
          <br />
          <div>
            <p className="loader"></p>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <h3 className="text-xl font-bold"> Choose your user: </h3>
        <br />
        <div className="grid gap-4 grid-cols-4 grid-rows-1 justify-items-center">
          {allUsers.map((user, i) => {
            return (
              <div
                key={user.username}
                className="w-36 bg-blue-400 rounded-md shadow-md mb-4"
              >
                <h3 className="text-xl font-semibold text-white">
                  {user.username}
                </h3>
                <img
                  className="profile m-auto"
                  src={user.avatar_url}
                  alt={user.username}
                  height="100px"
                  width="100px"
                />
                <Link to={`/`}>
                  <button
                    className="btn bg-white hover:bg-green-100 text-black text-xs"
                    onClick={() => setUser(user)}
                  >
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

export default ProfilePage;
