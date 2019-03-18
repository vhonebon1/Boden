module Api::V1
  class DrinksController < ApiController
    before_action :set_drink, only: [:show, :update, :destroy]

    # GET /drinks
    def index
      @drinks = Drink.select("id, title").all
      render json: @drinks.to_json
    end

    # GET /drinks/:id
    def show
      @drink = Drink.find(params[:id])
      render json: @drink.to_json(:include => { :ingredients => { :only => [:id, :description] }})
    end

    # DELETE /drinks/:id
    def destroy
      @drink = Drink.destroy(params[:id])
      render json: @drinks
    end

    def create
      @drink = Drink.new(drink_params)
      if @drink.save
        render json: @drinks
      else
        render "new"
      end
    end

    private

    def set_drink
      @drink = Drink.find(params[:id])
    end

    def drink_params
      params.require(:drink).permit(:title)
    end
  end
end