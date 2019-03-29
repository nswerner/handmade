import { connect } from "react-redux";
import SessionNav from './session_nav';
import { signOut, signIn } from '../../../actions/session_actions';
import { openModal } from '../../../actions/modal_actions';

const msp = state => {

    return({
        currentUser: state.session.id,
        demoUser: { email: "demo@email.com", password: "demopassword" }
    });
};

const mdp = dispatch => {

    return({
        signOut: () => dispatch(signOut()),
        openModal: (modal) => dispatch(openModal(modal)),
        demoLogin: (demoUser) => dispatch(signIn(demoUser))
    });
};

export default connect(msp, mdp)(SessionNav);