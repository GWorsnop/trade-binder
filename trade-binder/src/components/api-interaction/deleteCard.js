import axios from "axios";

export default function deleteCard(card_id) {
  return axios
    .delete(`https://gworsnop-trade-binder.herokuapp.com/api/cards/`, {
      data: { card_id: card_id },
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
