class Api::CartsController < ApplicationController

    def create
        @cart = Cart.new(user_id: params[:user_id])
        
        if @cart.save
            render 'api/cart/show'
        else
            render json: @cart.errors.full_messages
        end
    end


    def show
        @cart = Cart.where(id: params[:id]).includes(:cart_items, :products)
        @cart = @cart[0]

        if @cart
            render 'api/cart/show'
        end
    end



end