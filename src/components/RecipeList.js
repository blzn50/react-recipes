import React from 'react';
const rcpURL = 'https://reactrecipes.herokuapp.com/v1/recipes';

const RecipeList = props => (
  <div style={props.style}>
    <h2 className="h2">Recipes</h2>
    <ul className="list-reset">
      {props.recipes.map(recipe => (
        <li
          className="py2 border-bottom border-bottom-dashed pointer"
          key={recipe.id}
          onClick={() => props.onHandleClick(recipe.id)}
        >
          <span>{recipe.name}</span>
          <span>{recipe.category}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default RecipeList;
