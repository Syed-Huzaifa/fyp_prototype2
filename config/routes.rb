Rails.application.routes.draw do
  get 'landing/index'
  # Spree routes
  mount Spree::Core::Engine, at: '/'
  root to: 'landing#index'

  # sidekiq web UI
  require 'sidekiq/web'
  Sidekiq::Web.use Rack::Auth::Basic do |username, password|
    username == Rails.application.secrets.sidekiq_username &&
      password == Rails.application.secrets.sidekiq_password
  end
  mount Sidekiq::Web, at: '/sidekiq'
end
