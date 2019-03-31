import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from'../../../actions/session_actions';
import { merge } from 'lodash';

const SessionErrorsReducer = (oldState = [], action) => {

  Object.freeze(oldState);
  let newState = [];

  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      return newState;

    case RECEIVE_SESSION_ERRORS:
      newState = newState.concat(action.errors);
      return newState;

    default: 
      return oldState;
  }


};


export default SessionErrorsReducer;

