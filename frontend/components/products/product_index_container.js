import { connect } from "react-redux";
import ProductIndex from './product_index'
import { fetchProducts } from '../../actions/product_actions';
import { clearSearch } from '../../actions/search_actions';

const msp = state => {

    return ({
        products: state.entities.products,
        users: state.entities.users
    });
};

const mdp = dispatch => {

    return ({
        fetchProducts: () => dispatch(fetchProducts()),
        clearSearch: () => dispatch(clearSearch())
    });
};

export default connect(msp, mdp)(ProductIndex)