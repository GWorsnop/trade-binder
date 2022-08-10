import axios from "axios";

export default function changeQuantity(inc_quantity, card_id) {
  return axios
    .patch(`https://gworsnop-trade-binder.herokuapp.com/api/cards`, {
      inc_quantity: inc_quantity,
      card_id: card_id,
    })
    .then((res) => {
      return res.data;
    });
}
