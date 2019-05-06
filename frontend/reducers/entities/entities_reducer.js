import { combineReducers } from 'redux';
import UsersReducer from './users/users_reducer';
import ProductsReducer from './products/products_reducer';
import CartsReducer from './carts/carts_reducer';
import CartItemsReducer from './cart_items/cart_items_reducer';
import ReviewsReducer from './reviews/reviews_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  products: ProductsReducer,
  carts: CartsReducer,
  cartItems: CartItemsReducer,
  reviews: ReviewsReducer
});

export default EntitiesReducer;