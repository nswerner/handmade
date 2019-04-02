import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';


const msp = (state, ownProps) => {
    const productId = ownProps.match.params.id
    let merchant;

    if (state.entities.products[productId]) {
        merchant = state.entities.users[state.entities.products[productId].merchant_id]
    } else {
        merchant = {shop_name: ""}
    }

    return({
        productId: productId,
        product: state.entities.products[productId],
        products: state.entities.products,
        merchant: merchant
    });
};

const mdp = (dispatch) => {

    return({
        fetchProduct: (id) => dispatch(fetchProduct(id))
    });
};

export default connect(msp, mdp)(ProductShow);