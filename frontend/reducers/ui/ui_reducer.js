import { combineReducers } from 'redux';
import ModalReducer from './modal/modal_reducer';
import SearchReducer from "./search/search_reducer";

const UIReducer = combineReducers({
  modal: ModalReducer,
  search: SearchReducer
});

export default UIReducer;