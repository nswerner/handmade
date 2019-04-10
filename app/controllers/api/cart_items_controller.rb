class Api::CartItemsController < ApplicationController

    def create
        debugger
        # @cart_item = CartItem.new(cart_id: params[:cart_id], quantity: params[:cartItems][:quantity], product_id: params[:cartItems][:product_id])
        # quantity: params[:cart_items][:quantity] 
        @cart_item = CartItem.new(cart_item_params)
        @cart_item.cart_id = params[:cart_id]

        if @cart_item.save
            render 'api/cart_items/show'
        end
    end

    def update
        @cart_item = CartItem.find_by(id: params[:id])

        if @cart_item
            if @cart_item.update(cart_item_params)
                render 'api/cart_items/show'
            end
        end
    end

    def index
        @cart_items = CartItems.where(cart_id: params[:cart_id])
        render 'api/cart_items/index'
    end

    def show
        @cart_item = CartItem.find_by(id: params[:id])
        render 'api/cart_items/show'
    end

    def delete
        @cart_item = CartItem.find_by(id: params[:id])
        
        if @cart_item
            @cart_item.destroy
            render 'api/cart_items/show'
        end
    end

    private
    def cart_item_params
        params.require(:cartItems).permit(:quantity, :product_id)
    end
end