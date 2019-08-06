Rails.application.routes.draw do
  ActiveAdmin.routes(self)

  namespace :api do
    namespace :v1 do
      resources :projects
    end
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
