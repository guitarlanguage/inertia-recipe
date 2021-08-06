import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'
import  Layout from '../components/Layout'

const RecipeList = ({ user, recipes }) => (
  <>
    <h1>{user.name}'s recipes</h1>
    {recipes.map(recipe => (
      <div key={recipe.id}>
        <InertiaLink href={`recipes/${recipe.id}`}>{recipe.name}</InertiaLink>
      </div>
    ))}
  </>
);

export default RecipeList;