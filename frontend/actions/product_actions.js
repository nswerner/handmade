import * as productApiUtil from '../util/products_api_util';

export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";

// normal action creators

const receiveAllProducts = (response) => {
    return({
        type: RECEIVE_ALL_PRODUCTS,
        products: response.products,
        merchants: response.merchants
    });
}

const receiveProduct = (response) => {
    return({
        type: RECEIVE_PRODUCT,
        product: response.products,
        merchant: response.merchant
    })
}

const removeProduct = (response) => {
    return({
    type: REMOVE_PRODUCT,
    id: Object.values(response.products)[0].id
    })
}

const receiveErrors = (errors) => ({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
})

const filterProductsAction = (currentlyDisplayed) => ({
    type: FILTER_PRODUCTS,
    products: currentlyDisplayed
})


// thunk action creators

export const fetchProducts = () => (dispatch) => {
    return productApiUtil.fetchProducts()
        .then( (response) => {
            return dispatch(receiveAllProducts(response))   }   ,
        error => dispatch(receiveErrors(error.responseJSON)));
};

export const fetchProduct = (id) => (dispatch) => {
    return productApiUtil.fetchProduct(id)
        .then( product => dispatch(receiveProduct(product)),
        error => dispatch(receiveErrors(error.responseJSON)));
}

export const fetchUserProducts = (userId) => (dispatch) => {
    return productApiUtil.fetchUserProducts(userId)
        .then( response => dispatch(receiveAllProducts(response)),
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
        .then( response => {
            return dispatch(removeProduct(response)),
        error => dispatch(receiveErrors(error.responseJSON))
        });
}

export const filterProducts = (currentlyDisplayed) => (dispatch) => {
    return dispatch(filterProductsAction(currentlyDisplayed)), error => dispatch(receiveErrors(error.responseJSON))
}