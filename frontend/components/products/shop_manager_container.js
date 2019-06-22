import { connect } from 'react-redux';
import ShopManager from './shop_manager';
import { receiveCurrentUser, fetchCurrentCartID } from '../../actions/session_actions';
import { fetchUserProducts, updateProduct, deleteProduct, fetchProducts } from '../../actions/product_actions';
import { clearSearch } from '../../actions/search_actions';
import { fetchCart  } from '../../actions/cart_actions';
 
const msp = state => {
    const currentUser = state.entities.users[state.session.id]
    let shop_name;
    
    if (currentUser.shop_name) {
        shop_name = currentUser.shop_name;
    } else { 
        shop_name = "";
    }

    return({
        products: Object.values(state.entities.products),
        currentUser,
        shop_name: shop_name
    });
};

const mdp = (dispatch) => {

    return({
        receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
        fetchUserProducts: (userId) => dispatch(fetchUserProducts(userId)),
        updateProduct: (product) => dispatch(updateProduct(product)),
        removeProduct: (id) => dispatch(deleteProduct(id)),
        clearSearch: () => dispatch(clearSearch()),
        fetchCurrentCartID: (user) => dispatch(fetchCurrentCartID(user)),
        fetchCart: (user, id) => dispatch(fetchCart(user, id)),
        fetchProducts: () => dispatch(fetchProducts())
    });
};

export default connect(msp, mdp)(ShopManager);