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

  def create
    @drink = Drink.new(drink_params)
    render json: @drinks
  end

  def destroy
    binding.pry
    @drink = Drink.destroy(params[:id])
    render json: @drink
  end

  private

  def set_drink
    @drink = Drink.find(params[:id])
  end

  def drink_params
    params.require(:drink).permit(:title)
  end
end
