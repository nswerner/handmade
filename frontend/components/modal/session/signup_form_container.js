import { connect } from 'react-redux';
import { signUp, signIn } from '../../../actions/session_actions'; 
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const msp = state => {

    return ({
        formType: "Register",
        errors: state.errors.session,
        demoUser: { email: "demo@email.com", password: "demopassword" }
    });
};

const mdp = dispatch => {

    return({
        action: (user) => dispatch(signUp(user)),
        demoLogin: (demoUser) => dispatch(signIn(demoUser))
    });
};

export default withRouter(connect(msp, mdp)(SessionForm));