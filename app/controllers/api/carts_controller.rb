class Api::CartsController < ApplicationController


    # CHANGE THIS - WILL PROBABLY NEED ERROR HANDLING HERE IN THE CONTROLLER
    def create
        @cart = Cart.new(user_id: params[:user_id])
       
        # CHANGE THIS - MIGHT SOURCE USER CART CREATION TO ORDERS
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
        @cart = Cart.where(id: params[:id]).includes(:cart_items, :products)
        @cart = @cart[0]

        if @cart
            render 'api/cart/show'
        end
    end



end