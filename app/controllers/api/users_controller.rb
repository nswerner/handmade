class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            render json: @user
        else
            render json: @user.errors.full_messages
        end
    end

    def show
        
    end

    def update
        @user.find(params[:id])

        if @user.update(user_params)
            render json: @user
        else
            render json @user.errors.full_messages
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :shop_name, :image_url, :gender, :location, :birthday, :about, :favorite_material)
    end
end