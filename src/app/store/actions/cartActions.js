import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./types";
import CartHelper from '../../components/services/CartHelper/index';
import Login from "../../auth/login";
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({forceRefresh:true});

const token = sessionStorage.getItem('id')
 
export const addToCart = (product) => (dispatch, getState) => {
  // const History = useHistory();
  if(token){
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((x) => {
    if (x.id === product.id) {
      alreadyExists = true;
    }
  });
  if (!alreadyExists) {
    // console.log("s ");
    // if (product.qty === null || product.qty === NaN) {
    //   console.log('ok');
    //   product.qty = 1
    // }
    console.log(product);
    product.qty = 1;
    console.log(product);
    cartItems.push({ ...product });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  console.log(cartItems);

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}else{
  history.push('/login');
}
  // cartItems.forEach((x) => {
  //   if (x.id !== product.id) {
  //     let data = { userId: uid, productId: product.id, quantity: 1};
  //     console.log(data);
  //     CartHelper.AddCart(data);
  //   }
  // });

};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice().filter((x) => x.id !== product.id);
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const incrementToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice()
  const selectProduct = cartItems.find(item => item.id === product.id)
  const index = cartItems.indexOf(selectProduct)
  const value = cartItems[index]
  console.log(value);
  if (value.qty === null || value.qty === NaN) {
    value.qty = 1
  } else {
    value.qty = value.qty + 1;
  }
  value.total = value.qty * value.netPrice;

  dispatch({
    type: INCREASE_QUANTITY,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // cartItems.forEach((x) => {
  //   if (x.id === product.id) {
  //     let data = { userId: uid, productId: product.id, quantity:product.qty };
  //     console.log(data);
  //     CartHelper.updateCart(data);
  //   }
  // });
}

export const decreaseToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice()
  const selectProduct = cartItems.find(item => item.id === product.id)
  const index = cartItems.indexOf(selectProduct)
  const value = cartItems[index]
  if (value.qty > 1) {
    value.qty = value.qty - 1;
    value.total = value.qty * value.netPrice;
  }
  dispatch({ type: DECREASE_QUANTITY, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

