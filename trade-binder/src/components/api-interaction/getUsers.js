import axios from "axios";

export default function getUsers() {
  return axios
    .get(`https://gworsnop-trade-binder.herokuapp.com/api/users`)
    .then((res) => {
      return res.data.users;
    });
}
