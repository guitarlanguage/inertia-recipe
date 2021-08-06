Rails.application.routes.draw do
  
  # get "/recipes", to: "recipes#index"

  resources :recipes, only: [:index, :show]

  devise_for :users
  get 'inertia-example', to: 'inertia_example#index'
  root to: "inertia_example#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
