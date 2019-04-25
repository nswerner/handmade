import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { createCartItem } from '../../actions/cart_item_actions';


const msp = (state, ownProps) => {
    const productId = ownProps.match.params.id
    const currentUser = state.entities.users[state.session.id];
    let merchant;

    if (state.entities.products[productId]) {
        merchant = state.entities.users[state.entities.products[productId].merchant_id]
    } else {
        merchant = {shop_name: ""}
    }

    return({
        currentUser, 
        productId: productId,
        product: state.entities.products[productId],
        products: state.entities.products,
        merchant: merchant
    });
};

const mdp = (dispatch) => {

    return({
        fetchProduct: (id) => dispatch(fetchProduct(id)),
        createCartItem: (user, cartItem) => dispatch(createCartItem(user, cartItem))
    });
};

export default connect(msp, mdp)(ProductShow);