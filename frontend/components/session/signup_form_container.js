import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions'; 
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const msp = state => {

    return ({
        formType: "Sign Up"
    });
};

const mdp = dispatch => {

    return({
        action: (user) => dispatch(signUp(user))
    });
};

export default withRouter(connect(msp, mdp)(SessionForm));