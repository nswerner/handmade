class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)

        if @review.save
            @review
            @user = User.find_by(id: @review.user_id)
            render 'api/reviews/show'
        else 
            render json: {"errors": [@review.errors.full_messages]}
        end
    end

    def update
        @review = Review.where(user_id: params[:reviews][:user_id]).where(product_id: params[:reviews][:product_id])
        @review = @review[0]
        if @review
            if @review.update(review_params)
                @user = User.find_by(id: @review.user_id)
                render 'api/reviews/show'
            else 
                render json: {errors: "failed to update your review"}
            end
        else 
            render json: {errors: "your review could not be located"}
        end
    end

    def index
        @reviews = Review.where(product_id: params[:product_id]).includes(:user)
        render 'api/reviews/index'
    end

    def show
        @review = Review.find_by(id: params[:id])
        
        if @review
            @user = User.find_by(id: @review.user_id)
            render 'api/reviews/show'
        else 
            render json: {errors: "your review could not be located"}
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        
        if @review
            @review.destroy
            @user = User.find_by(id: @review.user_id)
            render 'api/reviews/show'
        else 
            render json: {errors: "your review could not be located"}
        end
    end

    private
    def review_params
        params.require(:reviews).permit(:rating, :product_id, :user_id, :body)
    end
end