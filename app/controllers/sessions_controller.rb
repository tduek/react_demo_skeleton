class SessionsController < ApplicationController

  def new
    
  end

  def create
    user = User.find_by_credentials(
      params[:email],
      params[:password]
    )

    if user.nil?
      flash.now[:alert] = "Wrong email/password combo"
      render :new, status: 401
    else
      sign_in!(user)
      flash[:success] = "Welcome back!"
      redirect_to root_url
    end
  end

  def destroy
    sign_out!
    flash[:success] = "Thank you, come again."
    redirect_to new_session_url
  end
end