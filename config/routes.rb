Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:create, :update, :show] do
      resources :products, only: [:index]
      resources :carts, only: [:create, :show]
    end
  end
end
