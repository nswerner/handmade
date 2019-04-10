//cart is referenced from user so we can only add items to the users current cart
export const createCartItem = (user, cartItems) => {

    return $.ajax({
        method: "POST",
        url: `/api/users/${user.id}/carts/${user.cart_id}/cart_items`,
        data: { cartItems }
    })
}

//cart is referenced from user so we can only update items in the users current cart
export const updateCartItem = (user, cartItems) => {

    return $.ajax({
        method: "PATCH",
        url: `/api/users/${user.id}/carts/${user.cart_id}/cart_items/${cartItems.id}`,
        data: { cartItems }
    })
}


// takes in a cart so that we can fetch items in older carts
export const fetchCartItems = (user, cart) => {

    return $.ajax({
        method: "GET",
        url: `/api/users/${user.id}/carts/${cart.id}/cart_items`
    })
}

// takes in a cart so that we can fetch items in older carts
export const fetchCartItem = (user, cart, item) => {

    return $.ajax({
        method: "GET",
        url: `/api/users/${user.id}/carts/${cart.id}/cart_items/${item.id}`
    })
}

//cart is referenced from user so we can only delete items from the users current cart
export const deleteCartItem = (user, item) => {

    return $.ajax({
        method: "DELETE",
        url: `/api/users/${user.id}/carts/${user.cart_id}/cart_items/${item.id}`
    })
}

