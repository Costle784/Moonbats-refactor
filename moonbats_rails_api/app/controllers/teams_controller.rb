class TeamsController < ApplicationController

  def index
    @teams = Team.all
    render json: @teams
  end

  def futuregames
    @team = Team.find(params[:id])
    @games = @team.games.where("date > ?", DateTime.now)
    render json: @games
  end

  def pastgames
    @team = Team.find(params[:id])
    @games = @team.games.where("date < ?",'2018-01-01')
    render json: @games
  end
end
