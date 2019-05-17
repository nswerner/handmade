export const createProductReview = (reviews) => {

    return $.ajax({
        method: "POST",
        url: `/api/products/${reviews.product_id}/reviews`,
        data: { reviews }
    })
}

export const updateProductReview = (reviews) => {

    return $.ajax({
        method: "PATCH",
        url: `/api/products/${reviews.product_id}/reviews/${reviews.id}`,
        data: { reviews }
    })
}

export const fetchReviews = (product_id) => {

    return $.ajax({
        method: "GET",
        url: `/api/products/${product_id}/reviews`
    })
}

export const fetchReview = (reviews) => {

    return $.ajax({
        method: "GET",
        url: `/api/products/${reviews.product_id}/reviews/${reviews.id}`,
    })
}

export const deleteReview = (reviews) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/products/${reviews.product_id}/reviews/${reviews.id}`,
        data: { reviews }
    })
}
