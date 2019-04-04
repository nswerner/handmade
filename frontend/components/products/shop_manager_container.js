import { connect } from 'react-redux';
import ShopManager from './shop_manager';
import { receiveCurrentUser } from '../../actions/session_actions';

const msp = state => {
    const currentUser = state.entities.users[state.session.id]
    let shop_name;
    
    // debugger
    if (currentUser.shop_name) {
        shop_name = currentUser.shop_name;
    } else { 
        shop_name = "";
    }

    return({
        currentUser,
        shop_name: shop_name
    });
};

const mdp = dispatch => {

    return({
        receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user))
    });
};

export default connect(msp, mdp)(ShopManager);