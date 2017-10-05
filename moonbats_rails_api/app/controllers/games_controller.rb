class GamesController < ApplicationController
  def index
    @team = Team.find(params[:team_id])
    @games = @team.games
    render json: @games
  end
end
