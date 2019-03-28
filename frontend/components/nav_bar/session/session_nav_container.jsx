import { connect } from "react-redux";
import SessionNav from './session_nav';
import { signOut } from '../../../actions/session_actions';
import { openModal } from '../../../actions/modal_actions';

const msp = state => {

    return({
        currentUser: state.session.id
    });
};

const mdp = dispatch => {

    return({
        signOut: () => dispatch(signOut()),
        openModal: (modal) => dispatch(openModal(modal))
    });
};

export default connect(msp, mdp)(SessionNav);