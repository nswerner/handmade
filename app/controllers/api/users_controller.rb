class Api::UsersController < ApplicationController

    def create
        @user = User.find_by(email: user_params[:email])
        
        if @user
            render json: ["There is already an account associated with this email address"], status: 401
        else
            @user = User.new(user_params)

            if @user.save
                login(@user)
                ensure_cart
                render 'api/users/show'
            else
    
                render json: ["Password must be at least 6 characters long"], status: 401
            end
        end
    end

    def show
        @user = User.find_by(id: params[:id])

        if @user == current_user
            render :private_show
        elsif @user
            render :show
        end
    end

    def update
        @user = User.find(params[:id])

        if @user.update(user_params)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :shop_name, :image_url, :gender, :location, :birthday, :about, :favorite_material)
    end

    def ensure_cart
        @user.update( cart_id:  ( @user.cart_id || Cart.create(user_id: @user.id).id ) )
    end
end