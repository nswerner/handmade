pictures_array = product.product_pictures.map{ |picture| url_for(picture) }

json.set! product.id do
    json.extract! product, :id, :title, :description, :price, :merchant_id
    json.productPictures { json.array! pictures_array } 
end

listed_products = product.merchant.listed_products.map { |product| product.id }

json.merchant do 
    json.set! product.merchant_id do
        json.extract! product.merchant, :id, :shop_name
        json.listedProducts do
            json.array! listed_products
        end
    end
end





#     json.merchants do 
#     @products.each do |product|
#         json.set! product.merchant_id do
#             json.extract! product.merchant, :id, :shop_name
#         end
#     end
# end