class MoonphasesController < ApplicationController

  def index
    if params[:date]
      #finds phase where the date is the same as the selectedGame
      @moonphase = Moonphase.where("date = ?", DateTime.parse(params[:date])).first
      #returns all phases that are the same as the one above
      @moonphases = Moonphase.where("phase = ?", @moonphase.phase)
    else
      @moonphases = Moonphase.all
    end

    # either all phases that are same phase as the game phase or all phases
    render json: @moonphases
  end
end
