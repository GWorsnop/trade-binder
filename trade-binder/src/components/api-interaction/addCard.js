import axios from "axios";

export default function addCard(cardName, price, quantity, image, user) {
  return axios
    .post(`https://gworsnop-trade-binder.herokuapp.com/api/cards`, {
      name: cardName,
      price: price,
      quantity: quantity,
      image: image,
      username: user,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
