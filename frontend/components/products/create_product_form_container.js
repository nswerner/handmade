import { connect } from 'react-redux';
import ProductForm from './product_form';
import { createProduct } from '../../actions/product_actions';

const msp = state => {

    return({

        defaultState: {
            title: "",
            description: "",
            price: "",
            pictureFiles: [],
            pictureURLs: []
        },
        product: {
            title: "",
            description: "",
            price: "",
            pictureFiles: [],
            pictureURLs: []
        },
        formType: "Publish",
        h1: "Add a New Listing",
        ajaxMethod: "POST"

    });
};

const mdp = dispatch => {

    return({
        submitForm: (formData) => dispatch(createProduct(formData)),
    });
};

export default connect(msp, mdp)(ProductForm);