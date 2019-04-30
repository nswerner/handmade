import { connect } from "react-redux";
import Search from './search';
import { filterProducts } from '../../../actions/product_actions';

const msp = (state) => {
    const storeProducts = state.entities.products;
    let allProducts;

    debugger
    
    if (Object.keys(state.entities.products).length >= 23) {
        allProducts = state.entities.products;

        return ({
            storeProducts,
            allProducts
        })

    }  else 
        return({
            storeProducts,
        });
};

const mdp = (dispatch) => {
    
    return({
        filterProducts: (currentlyDisplayed) => dispatch(filterProducts(currentlyDisplayed)),
    });
};

export default connect(msp, mdp)(Search);