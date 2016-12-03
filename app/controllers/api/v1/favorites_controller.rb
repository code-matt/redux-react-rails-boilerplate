class Api::V1::FavoritesController < ApplicationController
  before_action :authenticate_user, only: [:create]
  def index
    query = params["query"]
    if query.blank?
      render json: {favs: []}
    else
      favs = Favorite.where("name ILIKE ?","%#{sanitize(query)}%")
      render json: {favs: favs}
    end
  end

  def create
  end

  def sanitize(input)
    ActionController::Base.helpers.sanitize(input)
  end
end