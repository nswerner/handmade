export const createCart = (user) => {

    return $.ajax({
        method: "POST",
        url: `/api/users/${user.id}/carts`
    })
}


export const fetchCart = (user, id) => {

    return $.ajax({
        method: "GET",
        url: `/api/users/${user.id}/carts/${id}`
    })
}