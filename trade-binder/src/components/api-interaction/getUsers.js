import axios from "axios";

export default function getUsers() {
  return axios
    .get(`https://trade-binder-backend.onrender.com/api/users`)
    .then((res) => {
      return res.data.users;
    });
}
