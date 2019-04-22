@products = json.products do
    @cart.products.each do |product|

        pictures_array = product.product_pictures.map{ |picture| url_for(picture) } 

        json.set! product.id do
            json.extract! product, :id, :title, :description, :price, :merchant_id
            json.productPictures { json.array! pictures_array } 
        end
    end
end

@products ||= {}

@cart_items = 
    json.cartItems do 
        @cart.cart_items.each do |item|
            json.set! item.id do
                json.extract! item, :id, :quantity, :cart_id, :product_id

                unitPrice = @products["#{item.product_id}"]['price']
                itemPrice = (unitPrice * item.quantity)
                itemPrice = sprintf('%.2f', itemPrice)
                unitPrice = sprintf('%.2f', unitPrice)

                json.itemPrice itemPrice
                json.unitPrice unitPrice
            end
        end
    end

@cart_items ||= {}

debugger

###################################################



json.cart do

    cart_item_ids = @cart.cart_items.map { |item| item.id }

    json.set! @cart.id do
        json.extract! @cart, :user_id
        json.cartItems { json.array! cart_item_ids }

        cartTotal = 0
        @cart_items.each do |id, cartItem|
            cartTotal += (cartItem['quantity'] * @products[cartItem['product_id'].to_s]['price'])
        end
        cartTotal = sprintf('%.2f', cartTotal)
       json.cartTotal cartTotal
    end
end





json.cartItems do 
    @cart.cart_items.each do |item|
        json.set! item.id do
            json.extract! item, :id, :quantity, :cart_id, :product_id

            unitPrice = @products["#{item.product_id}"]['price']
            itemPrice = (unitPrice * item.quantity)
            itemPrice = sprintf('%.2f', itemPrice)
            unitPrice = sprintf('%.2f', unitPrice)

            json.itemPrice itemPrice
            json.unitPrice unitPrice
        end
    end
end





json.products do
    @cart.products.each do |product|

        pictures_array = product.product_pictures.map{ |picture| url_for(picture) } 

        json.set! product.id do
            json.extract! product, :id, :title, :description, :price, :merchant_id
            json.productPictures { json.array! pictures_array } 
        end
    end
end


# NEW
json.users do
    @cart.cart_items.each do |cartItem|

        json.set! cartItem.merchant.id do
            json.extract! cartItem.merchant, :shop_name
        end
    end
end

