import * as React from 'react';
import './App.css';
import Header from './containers/header/header';
import MainPageContent from './containers/mainPageContent/mainPageContent';
import Cart from './containers/Cart/cart';
import Notes from './containers/Notes/notes';
import css from './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={css.backgroundImg}>
          <Header />
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/notes">
              <Notes />
            </Route>
            <Route path="/">
              <MainPageContent />
            </Route>
            <Route exact path="/">
              <MainPageContent />
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
