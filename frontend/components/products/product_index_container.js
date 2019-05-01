import { connect } from "react-redux";
import ProductIndex from './product_index'
import { fetchProducts } from '../../actions/product_actions';
import { clearSearch } from '../../actions/search_actions';

const msp = state => {
    let searchTerm;

    if (state.ui.search) {
        searchTerm = state.ui.search;
    } else {
        searchTerm = "";
    }


    return ({
        products: state.entities.products,
        users: state.entities.users,
        searchTerm
    });
};

const mdp = dispatch => {

    return ({
        fetchProducts: () => dispatch(fetchProducts()),
        clearSearch: () => dispatch(clearSearch())
    });
};

export default connect(msp, mdp)(ProductIndex)