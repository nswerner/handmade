import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from'../actions/session_actions';
import { merge } from 'lodash';

const SessionErrorsReducer = (oldState = [], action) => {

  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      newState.errors = [];
      return newState;

    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;

    default: 
      return oldState;
  }


};


export default SessionErrorsReducer;

