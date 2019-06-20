class Api::CartItemsController < ApplicationController

    def create
        @cart_item = CartItem.new(cart_item_params)
        @cart_item.cart_id = params[:cart_id]

        if @cart_item.id
            @cart_item.save
            @product = Product.find_by(id: @cart_item.product_id)
            render 'api/cart_items/show'
        else 
            render json: {"errors": [@cart_item.errors.full_messages]}, status: 200
        end
    end

    def update
        @cart_item = CartItem.find_by(id: params[:id])

        if @cart_item
            if @cart_item.update(cart_item_params)
                @product = Product.find_by(id: @cart_item.product_id)
                render 'api/cart_items/show'
            end
        end
    end

    def index
        @cart_items = CartItem.where(cart_id: params[:cart_id])
        render 'api/cart_items/index'
    end

    def show
        @cart_item = CartItem.find_by(id: params[:id])
        @product = Product.find_by(id: @cart_item.product_id)
        render 'api/cart_items/show'
    end

    def destroy
        @cart_item = CartItem.find_by(id: params[:id])
        
        if @cart_item
            @cart_item.destroy
            @product = Product.find_by(id: @cart_item.product_id)
            render 'api/cart_items/show'
        end
    end

    private
    def cart_item_params
        params.require(:cartItems).permit(:quantity, :product_id)
    end
end