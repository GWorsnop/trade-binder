import axios from "axios";

export default function getUsers() {
  return axios
    .get(`https://marketplace-api-gw.herokuapp.com/api/users`)
    .then((res) => {
      return res.data.users;
    });
}
