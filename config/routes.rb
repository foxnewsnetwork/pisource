Rails.application.routes.draw do

  root 'apiv1/home#index'
  namespace :apiv1 do
    resources :products, only: [:index], controller: 'products/index'
    resources :products, only: [:show], controller: 'products/show'
    resources :pictures, only: [:show], controller: 'pictures/show'
    resources :offers, only: [:create], controller: 'offers/create'
    resources :taxons, only: [:index], controller: 'taxons/index'
    resources :taxons, only: [:show], controller: 'taxons/show'
    resources :employees, only: [:index], controller: 'employees/index'
    resources :translations, only: [:index], controller: 'translations/index'
  end

  namespace :admin do
    resources :admin_products, only: [:create], controller: 'products/create'
    resources :admin_products, only: [:destroy], controller: 'products/destroy'
    resources :admin_products, only: [:update], controller: 'products/update'

    resources :taxons, only: [:create], controller: 'taxons/create'
    resources :taxons, only: [:update], controller: 'taxons/update'
    resources :taxons, only: [:destroy], controller: 'taxons/destroy'

  end
end