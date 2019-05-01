import { connect } from "react-redux";
import Search from './search';
import { filterProducts } from '../../../actions/product_actions';
import { appendSearch } from '../../../actions/search_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
    const storeProducts = state.entities.products;
    let allProducts;
    let searchTerm;

    if (state.ui.search) {
        searchTerm = state.ui.search;
    } else {
        searchTerm = "";
    }

    if (Object.keys(state.entities.products).length >= 23) {
        allProducts = state.entities.products;

        return ({
            storeProducts,
            allProducts,
            searchTerm: state.ui.search
        })

    }  else { 
        return({
            storeProducts,
            searchTerm: state.ui.search
        });
    }
};

const mdp = (dispatch) => {
    
    return({
        filterProducts: (currentlyDisplayed) => dispatch(filterProducts(currentlyDisplayed)),
        appendSearch: (input) => dispatch(appendSearch(input))
    });
};

export default withRouter(connect(msp, mdp)(Search));