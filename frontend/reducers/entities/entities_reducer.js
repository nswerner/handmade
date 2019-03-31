import { combineReducers } from 'redux';
import UsersReducer from './users/users_reducer';
import ProductsReducer from './products/products_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  products: ProductsReducer
});

export default EntitiesReducer;