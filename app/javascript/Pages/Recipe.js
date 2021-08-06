import React from 'react';

const Recipe = ({ recipe }) => (
  <>
    
      <div>{recipe.name}</div>
      <div>{recipe.description}</div>
  </>
);

export default Recipe;