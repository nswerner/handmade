class Api::UsersController < ApplicationController

    def create
        @user = User.new(new_user_params)

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

        if @user.update
            render json: @user
        else
            render json @user.errors.full_messages
        end
    end

    private
    def new_user_params
        params.require(:user).permit(:email, :password)
    end

    def about_user_params
        params.require(:user).permit(:shop_name, :image_url, :gender, :location, :birthday, :about, :favorite_material)
    end
end