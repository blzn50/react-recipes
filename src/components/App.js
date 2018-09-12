import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Recipe from './Recipe';
import Favorites from './Favorites';
import NotFound from './NotFound';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      favorites: [],
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  componentDidMount() {
    fetch(`${rcpURL}/v1/recipes`)
      .then(res => res.json())
      .then((json) => {
        this.setState({
          recipes: json,
        });
      });
  }

  toggleFavorite(id) {
    this.setState(({ favorites, ...state }) => {
      const idx = favorites.indexOf(id);
      if (idx !== -1) {
        return { ...state, favorites: favorites.filter(f => f.id == id) };
      }
      return { ...state, favorites: [...favorites, id] };
    });
  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route
              exact
              path="/"
              render={() => <Home state={this.state} toggleFavorite={this.toggleFavorite} />}
            />
            <Route path="/recipe/:id" component={Recipe} />
            <Route
              path="/favorites"
              render={() => <Favorites state={this.state} toggleFavorite={this.toggleFavorite} />}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
