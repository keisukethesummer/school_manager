class ApplicationController < ActionController::Base
  # deviseに関わる処理であればメソッドを実行
  before_action :configure_permitted_parameters, if: :devise_controller?

  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
  end
end
