import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, GET_TOTALS } from "./types";
import CartHelper from '../../components/services/CartHelper/index'
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({forceRefresh:true});
const uid = sessionStorage.getItem('id');
const token = sessionStorage.getItem('_sid');
export const addToCart = (product) => (dispatch, getState) => {
  if (token) {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((x) => {
    if (x.productModel.id === product.id) {
      alreadyExists = true;
    }
  });
  if (!alreadyExists) {
    let data = { userId: uid, productId: product.id, quantity: 1 };
    Promise.resolve(CartHelper.AddCart(data).then(function (value) {
      return cartItems.push(value.result);

    }))
  }
  setTimeout(() => {
    dispatch({
      type: ADD_TO_CART,
      payload: { cartItems },
    });
  }, 1000);
}else{
  history.push('/login');
  
}
  // localStorage.setItem("cartItems", JSON.stringify(cartItems));


};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice().filter((x) => x.id !== product.id);
  let data = { token: token, id: product.id, };
  CartHelper.removeCart(data).then(function (value) {
  });
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  // localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const incrementToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice()
  const selectProduct = cartItems.find(item => item.id === product.id)
  const index = cartItems.indexOf(selectProduct)
  const value = cartItems[index]
  value.quantity = value.quantity + 1;
  value.total = value.quantity * value.price;

  let data = { id: product.id, userId: uid, productId: product.productModel.id, quantity: value.quantity };
  CartHelper.updateCart(data).then(function (value) {
    return console.log("increase", value);;
  })
  dispatch({
    type: INCREASE_QUANTITY,
    payload: { cartItems },
  });
  // localStorage.setItem("cartItems", JSON.stringify(cartItems));

}

export const decreaseToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice()
  const selectProduct = cartItems.find(item => item.id === product.id)
  const index = cartItems.indexOf(selectProduct)
  const value = cartItems[index]
  if (value.quantity > 1) {
    value.quantity = value.quantity - 1;
    value.total = value.quantity * value.price;
  }
  let data = { id: product.id, userId: uid, productId: product.productModel.id, quantity: value.quantity };
  CartHelper.updateCart(data).then(function (value) {
    return console.log("decrease", value);;
  })
  dispatch({ type: DECREASE_QUANTITY, payload: { cartItems } });
  // localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

export const getCart = () => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems
  console.log(cartItems);
  dispatch({type:GET_TOTALS,payload: { cartItems } });
console.log("getlog");
}