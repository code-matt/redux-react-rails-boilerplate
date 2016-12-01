class Api::V1::FavoritesController < ApplicationController
  before_action :authenticate_user, only: [:create]
  def index
    query = params["query"]
    favs = Favorite.where("name ILIKE ?","%#{sanitize(query)}%")
    render json: {favs: favs}
  end

  def create
  end

  def sanitize(input)
    ActionController::Base.helpers.sanitize(input)
  end
end