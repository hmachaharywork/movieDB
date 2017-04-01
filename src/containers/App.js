import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import Popular from './Popular';
import TopRated from './TopRated';
import Upcoming from './Upcoming';
import Search from './Search';
import '../styles/App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="web-container">
          <Navigation className="nav-block"/>
          <Search />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/popular" component={Popular} />
            <Route path="/top_rated" component={TopRated} />
            <Route path="/upcoming" component={Upcoming} />
            <Route render={() => <h2>404 page not found.</h2>} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
