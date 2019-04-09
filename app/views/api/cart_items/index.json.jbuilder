json.cart_items do
    @cart_items.each do |cart_item|
        json.set! cart_item.id do
            json.extract! cart_item, :quantity
        end
    end
end