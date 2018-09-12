import React from 'react';
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      currentRecipe: null
    };
    this.onRecipeClick = this.onRecipeClick.bind(this);
  }
  componentDidMount() {
    fetch(rcpURL + '/v1/recipes')
      .then(res => res.json())
      .then(json => {
        this.setState({
          recipes: json
        });
      });
  }

  onRecipeClick(id) {
    fetch(`${rcpURL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({
          currentRecipe: recipe
        });
      });
    console.log(this.state.currentRecipe);
  }

  render() {
    const { recipes, currentRecipe } = this.state;
    return (
      <div>
        <Header />
        <main style={{ display: 'flex' }}>
          <RecipeList
            recipes={recipes}
            onHandleClick={this.onRecipeClick}
            style={{ flex: 3 }}
          />
          <RecipeDetail recipe={currentRecipe} style={{ flex: 5 }} />
        </main>
      </div>
    );
  }
}

export default App;
