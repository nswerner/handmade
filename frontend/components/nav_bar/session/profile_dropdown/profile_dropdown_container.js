import { connect } from 'react-redux';
import ProfileDropdown from './profile_dropdown';
import { signOut } from '../../../../actions/session_actions';

const msp = state => {

    return({
        currentUser: state.entities.users[state.session.id]
    });
};

const mdp = dispatch => {

    return({
        signOut: () => dispatch(signOut())
    });
};

export default connect(msp, mdp)(ProfileDropdown);