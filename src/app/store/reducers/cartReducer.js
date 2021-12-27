import { CartHelper } from "../../components/services";
import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY,GET_TOTALS } from "../actions/types";

const Token = sessionStorage.getItem('_sid');

let Carts = [];
if (Token) {
  Promise.resolve(CartHelper.GetCart(Token)).then(function (value) {
    value.forEach(val => {
      return Carts.push(val);
    });
  });
}
export const cartReducer = (
  // state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]")},
  state = { cartItems: Carts },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: action.payload.cartItems };

    case INCREASE_QUANTITY:
      return { cartItems: action.payload.cartItems };

    case DECREASE_QUANTITY:
      return { cartItems: action.payload.cartItems };

    case REMOVE_FROM_CART:
      return { cartItems: action.payload.cartItems };

    case GET_TOTALS:
      return { cartItems: action.payload.cartItems };

    default:
      return state;
  }
};
