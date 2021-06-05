import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoDocumentFound from './components/NoDocumentFound';
import Checkout from './components/Checkout';
import Loading from './components/Loading';
import './styles/App.css';
import './styles/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/noDocumentFound" component={NoDocumentFound} />
            <Route exact path="/Checkout" component={Checkout} />
            <Route exact path="/Loading" component={Loading} />
            <Route path="/" component={NoDocumentFound} />
          </Switch>
        </Router>
        </div>
    );
  }
}

export default App;
