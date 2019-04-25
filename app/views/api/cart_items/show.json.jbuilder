json.cartItems do
    json.set! @cart_item.id do
        json.extract! @cart_item, :id, :quantity, :product_id
    end
end