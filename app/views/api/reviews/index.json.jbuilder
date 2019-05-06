json.reviews do 
    @reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :body, :rating, :product_id, :user_id
        end
    end
end

json.users do
    @reviews.each do |review|
        json.set! review.user_id do
            json.extract! review.user, :id, :email
        end
    end
end
