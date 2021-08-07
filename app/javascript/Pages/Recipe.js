import React from 'react';

const Recipe = ({ recipe }) => (
  <>

      <article className="blog-post">  
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>
      </article>

  </>
);

export default Recipe;