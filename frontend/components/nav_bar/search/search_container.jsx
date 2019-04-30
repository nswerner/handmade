import { connect } from "react-redux";
import Search from './search';

const msp = (state) => {
    const allProducts = state.entities.products;


    return({
        allProducts
    });
};

const mdp = (dispatch) => {
    
    return({

    });
};

export default connect(msp, mdp)(Search);