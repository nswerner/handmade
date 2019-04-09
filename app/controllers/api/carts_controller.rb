class CartsController < ApplicationController

    def create
        @cart = Cart.new(user_id: current_user.id)
        
        if @cart.save
            # CHANGE THIS WHEN VIEWS IMPLEMENTED
            # render 'api/carts/show'
        else
            render json: @cart.errors.full_messages
        end
    end


end