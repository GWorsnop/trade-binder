import axios from "axios";

export default function getCard(name) {
  const nameSearch = name.split(" ").join("+");

  return axios
    .get(`https://api.scryfall.com/cards/named?fuzzy=${nameSearch}`)
    .then((res) => {
      return res;
    });
}
