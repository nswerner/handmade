import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signIn } from "../../actions/session_actions";
import Modal from './modal';  

const msp = state => {

  return({
    modal: state.ui.modal,
    demoUser: { email: "demo@email.com", password: "demopassword" }
  });
};

const mdp = dispatch => {

  return({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    demoLogin: (demoUser) => dispatch(signIn(demoUser))
  });
};

export default connect(msp, mdp)(Modal);