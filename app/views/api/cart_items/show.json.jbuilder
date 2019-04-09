json.cart_items do
    json.set! @cart_item.id do
        json.extract! @cart_item, :quantity
    end
end