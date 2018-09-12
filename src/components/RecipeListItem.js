import React from 'react';
import PropTypes from 'prop-types';

const RecipeListItem = ({
  recipe, onHandleClick, onFavorited, favorited,
}) => (
  <li
    className="py2 border-bottom border-bottom-dashed pointer"
    key={recipe.id}
    onClick={() => onHandleClick(recipe.id)}
  >
    <span
      className="mr1"
      onClick={(e) => {
        e.stopPropagation();
        onFavorited(recipe.id);
      }}
    >
      {favorited ? '✅' : '🔲'}
    </span>
    <span>{recipe.name}</span>
    <span>{recipe.category}</span>
  </li>
);

RecipeListItem.propTypes = {
  recipe: PropTypes.object,
  favorited: PropTypes.bool,
  onHandleClick: PropTypes.func,
  onFavorited: PropTypes.func,
};

export default RecipeListItem;
