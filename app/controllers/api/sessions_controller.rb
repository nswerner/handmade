class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        unless @user.is_a?(Array)
            login(@user)
            render 'api/users/show'
        else
            render json: @user, status: 401
        end
    end


    def destroy
        @user = current_user

        if @user
            logout
            render json: {}
        else
            render json: ["You are not currently logged in"], status: 404
        end
    end

end