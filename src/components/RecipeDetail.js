import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RecipeDetail = (props) => {
  if (!props.recipe) {
    return (
      <div
        style={props.style}
        className={classNames('h3 p2 italic bg-white center', props.className)}
      >
        <p>Please select a recipe to view detail.</p>
      </div>
    );
  }
  return (
    <div style={props.style} className={classNames('bg-white p2', props.className)}>
      <h2 className="h2">{props.recipe.name}</h2>
      <img className="fit" src={props.recipe.image} alt={props.recipe.name} />
      <div>
        <span>{props.recipe.category}</span>
        <span>{props.recipe.calories}</span>
        <h3>Ingredients</h3>
        <ul>
          {props.recipe.ingredients.map(ingredient => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <h3>Steps</h3>
        <ol>
          {props.recipe.steps.map(step => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

RecipeDetail.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  recipe: PropTypes.object,
};

export default RecipeDetail;
