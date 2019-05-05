import { connect } from "react-redux";
import Search from './search';
import { filterProducts } from '../../../actions/product_actions';
import { appendSearch } from '../../../actions/search_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from './../../../actions/modal_actions';

const msp = (state) => {
    const storeProducts = state.entities.products;
    let allProducts;
    let searchTerm;
    let loggedIn;

    if (state.session.id === null) {
        loggedIn = false;
    } else {
        loggedIn = true;
    }

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
            searchTerm: searchTerm,
            loggedIn: loggedIn
        })

    }  else { 
        return({
            storeProducts,
            searchTerm: searchTerm,
            loggedIn: loggedIn
        });
    }
};

const mdp = (dispatch) => {
    
    return({
        filterProducts: (currentlyDisplayed) => dispatch(filterProducts(currentlyDisplayed)),
        appendSearch: (input) => dispatch(appendSearch(input)),
        openModal: () => dispatch(openModal("signin"))
    });
};

export default withRouter(connect(msp, mdp)(Search));