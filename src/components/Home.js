import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRecipe: null,
    };
    this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  onRecipeClick(id) {
    fetch(`${rcpURL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then((recipe) => {
        this.setState({
          currentRecipe: recipe,
        });
      });
  }

  render() {
    const { recipes, favorites } = this.props.state;
    const { currentRecipe } = this.state;
    return (
      <div>
        <main className="px4 flex">
          <div style={{ flex: 3 }}>
            <h2 className="h2">Recipes</h2>
            <RecipeList
              recipes={recipes}
              favorites={favorites}
              onHandleClick={this.onRecipeClick}
              onFavorited={this.props.toggleFavorite}
            />
            {' '}
          </div>

          <RecipeDetail className="ml4" recipe={currentRecipe} style={{ flex: 5 }} />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  state: PropTypes.object,
  toggleFavorite: PropTypes.func,
};

export default Home;
