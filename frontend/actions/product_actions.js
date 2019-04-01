import * as productApiUtil from '../util/products_api_util';

export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

// normal action creators

const receiveAllProducts = (products) => {
    return({
    type: RECEIVE_ALL_PRODUCTS,
    products
    })
}

const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

const removeProduct = (id) => ({
    type: REMOVE_PRODUCT,
    id
})

const receiveErrors = (errors) => ({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
})


// thunk action creators

export const fetchProducts = () => (dispatch) => {
    return productApiUtil.fetchProducts()
        .then( (products) => {
            return dispatch(receiveAllProducts(products))   }   ,
        error => dispatch(receiveErrors(error.responseJSON)));
};

export const fetchProduct = (id) => (dispatch) => {
    return productApiUtil.fetchProduct(id)
        .then( product => dispatch(receiveProduct(product)),
        error => dispatch(receiveErrors(error.responseJSON)));
}

export const createProduct = (product) => (dispatch) => {
    return productApiUtil.createProduct(product)
        .then( product => dispatch(receiveProduct(product)),
        error => dispatch(receiveErrors(error.responseJSON)));
}

export const updateProduct = (product) => (dispatch) => {
    return productApiUtil.updateProduct(product)
        .then( product => dispatch(receiveProduct(product)),
        error => dispatch(receiveErrors(error.responseJSON)));
}

export const deleteProduct = (id) => (dispatch) => {
    return productApiUtil.deleteProduct(id)
        .then( product => dispatch(removeProduct(product)),
        error => dispatch(receiveErrors(error.responseJSON)));
}
