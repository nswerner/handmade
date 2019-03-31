import { combineReducers } from 'redux';
import SessionErrorsReducer from './session/session_errors_reducer';
import ProductErrorsReducer from './products/product_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  products: ProductErrorsReducer
});

export default ErrorsReducer;