import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'
import  Layout from '../components/Layout'

const RecipeList = ({ user, recipes }) => (
  <>
    <h1 className="text-center">{user.name}'s recipes</h1>

    <div className="card-group row row-cols-1 row-cols-md-3 g-4">
      {recipes.map(recipe => (
        <div className="col">
          <InertiaLink href={`recipes/${recipe.id}`} className="text-center text-decoration-none text-danger">
            <div key={recipe.id} className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">{recipe.description}</p>
                <button href={`recipes/${recipe.id}`} className="">View Details </button>
              </div>
            </div>
          </InertiaLink>
        </div>
      ))}
    </div>

  </>
);

export default RecipeList;