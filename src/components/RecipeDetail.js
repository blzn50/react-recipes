import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RecipeDetail = ({ recipe, className, ...props }) => {
  if (!recipe) {
    return (
      <div style={props.style} className={classNames('h3 p2 italic bg-white center', className)}>
        <p>Please select a recipe to view detail.</p>
      </div>
    );
  }
  return (
    <div style={props.style} className={classNames('bg-white p2', className)}>
      <h2 className="h2">{recipe.name}</h2>
      <img className="fit" src={recipe.image} alt={recipe.name} />
      <div>
        <span>{recipe.category}</span>
        <span>{recipe.calories}</span>
        <h3>Ingredients</h3>
        {recipe.ingredients && (
          <ul>
            {recipe.ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        )}
        <h3>Steps</h3>
        {recipe.steps && (
          <ol>
            {recipe.steps.map(step => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        )}
      </div>
      <Link to={`/recipe/${recipe.id}`}>See More</Link>
    </div>
  );
};

RecipeDetail.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  recipe: PropTypes.object,
};

export default RecipeDetail;
