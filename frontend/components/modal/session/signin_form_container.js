import { connect } from 'react-redux';
import { signIn } from '../../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const msp = state => {
    return({
        formType: "Sign In",
        errors: state.errors.session,
        demoUser: { email: "demo@email.com", password: "demopassword" }
    });
};

const mdp = dispatch => {

    return ({
        action: (user) => dispatch(signIn(user)),
        demoLogin: (demoUser) => dispatch(signIn(demoUser))
    });
};

export default withRouter(connect(msp, mdp)(SessionForm));