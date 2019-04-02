import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';


const msp = (state, ownProps) => {
    const productId = ownProps.match.params.id

    return({
        productId: productId
    });
};

const mdp = (dispatch) => {

    return({
        fetchProduct: (id) => dispatch(fetchProduct(id))
    });
};

export default connect(msp, mdp)(ProductShow);