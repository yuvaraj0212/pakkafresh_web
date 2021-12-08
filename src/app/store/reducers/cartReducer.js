import Axios from "axios";
import { NotificationManager } from "react-notifications";
import { Apis } from "../../../config";
import { CartHelper } from "../../components/services";
import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, } from "../actions/types";

const Token =sessionStorage.getItem('_sid');
const GetCart = () => {
  try {
      let result =  Axios.get(Apis.GetCart, {
          headers: {
              'Access-Control-Allow-Origin': '*',
              'Authorization': `Bearer ${Token}`,
          }
      });
      if (result.data.error) {
          NotificationManager.error(result.data.massage);
          return null;
      }
      return result.data;
  } catch (error) {
      console.log(error);
      return null;
  }
};
// console.log(GetCart());
export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]")},
  // state = { cartItems : GetCart() || []},
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

    default:
      return state;
  }
};
