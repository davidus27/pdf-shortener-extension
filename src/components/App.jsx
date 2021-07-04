import React from 'react';
import {
  MemoryRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NoDocumentFound from './NoDocumentFound';
import Checkout from './Checkout';
import Loading from './Loading';
import '../styles/App.css';
import '../styles/bootstrap.min.css';
import Footer from './Footer';

function App() {

    return (
      <div className="App">
        <Router>
          <Switch>
              <Route exact path="/Checkout" component={Checkout} />
              <Route exact path="/Loading" component={Loading} />
              <Route path="/" component={NoDocumentFound} />
          </Switch>
        </Router>
        <Footer />       
      </div>
    );
}

export default App;
