
// const API_URL = "http://localhost:8899";


const API_URL = "http://13.235.132.111/pakkaFresh";

const Apis = {
  //product api
  GetProductById: `${API_URL}/product/product-details?productId=`,
  GetAllGroceryStaple: `${API_URL}/product/product-list`,
  GetAllProductList: `${API_URL}/product/product-list`,
  GetUserRegsiter :`${API_URL}/signup`,
  GetUserLogin:`${API_URL}/signin`,
  GetCustomerDetails:`${API_URL}/current-user`,
  GetOrderByUser:`${API_URL}/user-orderlist`,
  GetLocationListDetails:`${API_URL}/user-address`,
  GetProductByFilter:`${API_URL}/category/category-list`,
  GetProductBySubcategory:`${API_URL}/product/category-filter?categoryId=`,
  AddCart:`${API_URL}/cart/add-cart`,
  updateCart:`${API_URL}/cart/update-cart`,
  GetCart :`${API_URL}/cart/user-cart`,
};
export { API_URL, Apis };
