import { connect } from 'react-redux';
import ProductForm from './product_form';
import { updateProduct, fetchProduct } from '../../actions/product_actions';

const msp = (state, ownProps) => {

    const productId = ownProps.match.params.id
    let product;
    if (state.entities.products[productId]) {
        product = state.entities.products[productId];
        product["pictureURLs"] = [];
    } else {
        product = {
            title: "",
            description: "",
            price: "",
            pictureFiles: [],
            pictureURLs: []
        }
    }

    return ({
        defaultState: {
            title: "",
            description: "",
            price: "",
            pictureFiles: [],
            pictureURLs: []
        },
        product,
        formType: "Publish",
        h1: "Update Your Listing",
        ajaxMethod: "PATCH",
        path: `api/products/${productId}`
    });
};

const mdp = (dispatch, ownProps) => {
    const productId = ownProps.match.params.id;

    return ({
        submitForm: (formData) => dispatch(updateProduct(formData)),
        fetchProduct: () => dispatch(fetchProduct(productId))
    });
};

export default connect(msp, mdp)(ProductForm);