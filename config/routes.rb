Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      mount Knock::Engine => "/knock"
    end
  end

  get "/*path" => redirect("/")
end
