import axios from "axios";

export default function addCard(cardName, price, quantity, image, user) {
  return axios
    .post(`https://trade-binder-backend.onrender.com/api/cards`, {
      name: cardName,
      price: math.round(price),
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
