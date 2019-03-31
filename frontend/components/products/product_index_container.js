import { connect } from "react-redux";
import ProductIndex from './product_index'
import { fetchProducts } from '../../actions/product_actions';

const msp = state => {

    return ({
        products: state.entities.products
    });
};

const mdp = dispatch => {

    return ({
        fetchProducts: (page) => dispatch(fetchProducts(page))
    });
};

export default connect(msp, mdp)(ProductIndex)