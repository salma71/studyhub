Rails.application.routes.draw do
  # devise_for :users
  # to match our new created devise controller
  devise_for :users, :controllers => {:registrations => "registrations"}
  #change the route from /users/login to /login route
  devise_scope :user do
    get 'login', to: 'devise/sessions#new'
  end
  # devise_scope :user do
  #   get 'signup', to: 'devise/registrations#new'
  # end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#index'
end
