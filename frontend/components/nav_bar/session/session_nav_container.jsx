import { connect } from "react-redux";
import SessionNav from './session_nav';
import { withRouter } from 'react-router-dom';
import { signOut, signIn } from '../../../actions/session_actions';
import { openModal } from '../../../actions/modal_actions';

const msp = state => {

    return({
        currentUser: state.entities.users[state.session.id],
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

export default withRouter(connect(msp, mdp)(SessionNav));