import { connect } from "react-redux";
import Search from './search';
import { filterProducts } from '../../../actions/product_actions';
import { appendSearch } from '../../../actions/search_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
    const storeProducts = state.entities.products;
    let allProducts;
    let searchTerm;

    if (state.ui.search === null) {
        searchTerm = "";
    } else {
        searchTerm = state.ui.search;
    }

    if (Object.keys(state.entities.products).length >= 23) {
        allProducts = state.entities.products;

        return ({
            storeProducts,
            allProducts,
            searchTerm: searchTerm
        })

    }  else { 
        return({
            storeProducts,
            searchTerm: searchTerm
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