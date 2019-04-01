@products.each do |product|

    pictures_array = product.product_pictures.map{ |picture| url_for(picture) }

    json.set! product.id do
        json.extract! product, :id, :title, :description, :price, :merchant_id
        json.product_pictures do json.array! pictures_array 
        end
    end
end

