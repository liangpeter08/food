import * as React from 'react';
import './App.css';
import Header from './containers/header/header';
import MainPageContent from './containers/mainPageContent/mainPageContent';
import Cart from './containers/Cart/cart';
import Notes from './containers/Notes/notes';
import TermOfUse from './containers/TermOfUse/termOfUse';
import Privacy from './containers/Privacy/privacy';
import ContactUs from './containers/ContactUs/contactUs';
import css from './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './containers/Footer/footer';

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
            <Route path="/terms">
              <TermOfUse />
            </Route>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
            <Route path="/">
              <MainPageContent />
            </Route>
            <Route exact path="/">
              <MainPageContent />
            </Route>
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
