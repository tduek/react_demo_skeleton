class StaticPagesController < ApplicationController
  
  # before_action :ensure_user_logged_in
  
  def root
  end
  
  def ensure_user_logged_in
    unless current_user
      flash[:alert] = "Must be logged in for that!"
      redirect_to new_session_url
    end
  end
end
