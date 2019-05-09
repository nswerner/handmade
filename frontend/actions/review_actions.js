import * as ReviewsApiUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_CART_ITEM";
export const REMOVE_REVIEW = "REMOVE_CART_ITEM";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";


// normal action creators

const receiveReviews = (response) => {
    return ({
        type: RECEIVE_REVIEWS,
        reviews: response.reviews,
        users: response.users
    })
}

const receiveReview = (response) => {
    return ({
        type: RECEIVE_REVIEW,
        reviews: response.reviews,
        users: response.users
    })
}

const removeReview = (response) => {
    return ({
        type: REMOVE_REVIEW,
        reviewID: Object.keys(response.reviews)
    })
}



// thunk action creators

export const createReview = (reviews) => dispatch => {
    return ReviewsApiUtil.createProductReview(reviews)
        .then(response => dispatch(receiveReview(response)));
}

export const fetchReviews = (product_id) => dispatch => {
    return ReviewsApiUtil.fetchReviews(product_id)
        .then(response => dispatch(receiveReviews(response)));
}

export const fetchReview = (reviews) => dispatch => {
    return ReviewsApiUtil.fetchReviews(reviews)
        .then(response => dispatch(receiveReview(response)));
}

export const updateReview = (reviews) => dispatch => {
    return ReviewsApiUtil.updateReview(reviews)
        .then(response => dispatch(receiveReview(response)));
}

export const deleteReview = (reviews) => dispatch => {
    return ReviewsApiUtil.deleteReview(reviews)
        .then(response => dispatch(removeReview(response)));
}
