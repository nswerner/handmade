class Api::CartItemsController < ApplicationController

    def create
        @cart_item = CartItem.new(user_id: params[:user_id], cart_id: params[:cart_id], cart_item_params)

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
        params.require(:cart_items).permit(:quantity)
    end
end