class RecipesController < ApplicationController
  def index
    render inertia: 'RecipeList', props: {
      recipes: current_user.recipes,
    }
  end

  def show
    render inertia: 'Recipe', props: {
      recipe: current_user.recipes.find(params[:id]) 
    }
  end

  def new
    render inertia: 'CreateRecipe'
  end

  def create
    recipe = current_user.recipes.create recipe_params
  end

  private

  def recipe_params
    params.require(:name, :description).permit(:name, :description)
  end
end
