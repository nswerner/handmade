import { connect } from "react-redux";
import ProductIndex from './product_index'
import { fetchProducts } from '../../actions/product_actions';

const msp = state => {

    return ({
        products: state.entities.products,
        users: state.entities.users
    });
};

const mdp = dispatch => {

    return ({
        fetchProducts: () => dispatch(fetchProducts())
    });
};

export default connect(msp, mdp)(ProductIndex)