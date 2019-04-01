class Api::ProductsController < ApplicationController

    # This is where we can incorporate search - Product.where(url_query)
    def index
        @products = Product.all.includes(:merchant).with_attached_product_pictures
        render 'api/products/index'
    end
    
    def show
        @product = Product.find_by(id: params[:id]).with_attached_product_pictures
        render 'api/products/show'
    end


    def create

        existing_product = Product.find_by(title: product_params[:title])

        if existing_product
            if Product.find_by(description: existing_product[:description])

                # prevents users from copying other users combination of title and description
                return render json: ["There is already a product matching this title and description"]
            elsif Product.find_by(merchant_id: existing_product[:merchant_id])

                # prevents merchants from listing products with the same title
                return render json: ["This product has already been listed"]
            end
        end


        @product = Product.new(product_params)
        @product.merchant_id = current_user.id
        if @product.save
            return render 'api/products/show'
        else
            return render json: @product.errors.full_messages
        end
    end


    def update
        @product = Product.find_by(id: params[:id])

        if @product
            if @product.merchant_id == current_user.id
                if @product.update(product_params)

                    return render 'api/products/show'
                else

                    return render json: @product.errors.full_messages
                end
            else

                return render json: ["You do not have permission to edit this product"], status: 401
            end
        else
            
            return render json: ["Could not locate that product"], status: 404
        end
    end

    def destroy
        @product = Product.find_by(id: params[:id])

        if @product
            if @product.merchant_id == current_user.id
                @product.destroy
            else
                return render json: ["You do not have permission to delete this product"], status: 401
            end
        else
            return render json: ["Could not locate that product"], status: 404
        end
    end

    private
    def product_params
        params.require(:product).permit(:title, :description, :price, :product_pictures)
    end
end