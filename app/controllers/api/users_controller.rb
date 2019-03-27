class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages
        end
    end

    def show
        @user = User.find_by(params[:id])
        render :show
    end

    def update
        @user.find(params[:id])

        if @user.update(user_params)
            render 'api/users/show'
        else
            render json @user.errors.full_messages
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :shop_name, :image_url, :gender, :location, :birthday, :about, :favorite_material)
    end
end