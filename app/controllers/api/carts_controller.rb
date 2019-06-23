class Api::CartsController < ApplicationController


    def create
        @cart = Cart.new(user_id: params[:user_id])

        if @cart.save
            @user = current_user
            @user.cart_id = @cart.id
            @user.save
            render 'api/cart/show'
        else
            render json: @cart.errors.full_messages
        end
    end

    
    def show
        @cart = Cart.where(id: params[:id]).where(user_id: params[:user_id]).includes(:cart_items, :products)
        @cart = @cart[0]

        if @cart
            render 'api/cart/show'
        else 
            render json: {errors: "That information is private"}, status: 400
        end
    end



end