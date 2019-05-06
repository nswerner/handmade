json.reviews do
    json.set! @review.id do
        json.extract! @review, :id, :rating, :body, :product_id, :user_id
    end
end

json.users do
    json.set! @user.id do
        json.extract! @user, :id, :email
    end
end