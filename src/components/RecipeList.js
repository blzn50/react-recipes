import React from 'react';
const rcpURL = 'https://reactrecipes.herokuapp.com/v1/recipes';

const RecipeList = props => (
  <div style={props.style}>
    <h2>Recipes</h2>
    <ul>
      <li>
        <span>Best recipe</span>
        <span>Sweets</span>
      </li>
      <li>
        <span>Best recipe 2</span>
        <span>Meat</span>
      </li>
      <li>
        <span>Best recipe 3</span>
        <span>Starter</span>
      </li>
    </ul>
  </div>
);

export default RecipeList;
