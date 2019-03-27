import { signOut } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions'; 
import { connect } from 'react-redux';
import NavBar from './nav_bar';

const msp = ({ entities, session }) => {

  return ({
    currentUser: entities.users[session.id] || null
  });
};

const mdp = dispatch => {

  return ({
    signOut: () => dispatch(signOut()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(msp, mdp)(NavBar);