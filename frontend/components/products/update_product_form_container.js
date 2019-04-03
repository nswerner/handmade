import { connect } from 'react-redux';
import ProductForm from './product_form';
import { updateProduct } from '../../actions/product_actions';

const msp = state => {

    return ({

    });
};

const mdp = dispatch => {

    return ({
        submitForm: (formData) => dispatch(updateProduct(formData)),
    });
};

export default connect(msp, mdp)(ProductForm);