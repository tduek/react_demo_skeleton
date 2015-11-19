class Api::SessionsController < ApplicationController

  def show
    sleep 2
    
    unless current_user
      render json: {}
      return
    end
    
    @user = current_user
    render "api/users/show"  
  end

  def create
    @user = User.find_by_credentials(
      params[:email],
      params[:password]
    )

    if @user.nil?
      render json: {errors: ["Wrong!"]}, status: 401
    else
      sign_in!(@user)
      render "api/users/show"
    end
  end

  def destroy
    sign_out!
    render json: {}
  end
  
  
end