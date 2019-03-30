json.set! product.id do
    json.extract! product, :id, :title, :description, :price, :merchant_id
    json.product_pictures do
        json.array! product.product_pictures do |picture|
            json.photoUrl url_for(picture)
        end
    end
end
