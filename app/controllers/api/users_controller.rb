class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end



  protected

  def user_params
    self.params.require(:user).permit(:email, :password)
  end
end
