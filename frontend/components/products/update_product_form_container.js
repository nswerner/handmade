import { connect } from 'react-redux';
import ProductForm from './product_form';
import { updateProduct } from '../../actions/product_actions';

const msp = (state, ownProps) => {

    const productId = ownProps.match.params.id

    return ({
        defaultState: {
            title: "",
            description: "",
            price: "",
            pictureFiles: [],
            pictureURLs: []
        },

        product: state.entities.products(productId),
        formType: "Publish",
        h1: "Update Your Listing",
        ajaxMethod: "PATCH"
    });
};

const mdp = dispatch => {

    return ({
        submitForm: (formData) => dispatch(updateProduct(formData)),
    });
};

export default connect(msp, mdp)(ProductForm);