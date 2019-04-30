unitPrice = @product['price']                
itemPrice = (unitPrice * @cart_item.quantity)
itemPrice = sprintf('%.2f', itemPrice)
unitPrice = sprintf('%.2f', unitPrice)

json.cartItems do
    json.set! @cart_item.id do
        json.extract! @cart_item, :id, :quantity, :product_id
        json.unitPrice unitPrice
        json.itemPrice itemPrice
    end
end