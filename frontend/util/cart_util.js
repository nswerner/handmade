export const createCart = (user) => {

    return $.ajax({
        method: "POST",
        url: `/api/users/${user.id}/carts`
    })
}