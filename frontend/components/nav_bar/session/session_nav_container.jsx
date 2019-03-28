import { connect } from "react-redux";
import SessionNav from './session_nav';

const msp = state => {

    return({
        currentUser: state.session.id
    });
};

const mdp = dispatch => {

    return({

    });
};

export default connect(msp, mdp)(SessionNav);