import { connect } from "react-redux";
import Search from './search';
import { filterProducts } from '../../../actions/product_actions';

const msp = (state) => {
    const allProducts = state.entities.products;


    return({
        allProducts
    });
};

const mdp = (dispatch) => {
    
    return({
        filterProducts: (currentlyDisplayed) => dispatch(filterProducts(currentlyDisplayed))
    });
};

export default connect(msp, mdp)(Search);