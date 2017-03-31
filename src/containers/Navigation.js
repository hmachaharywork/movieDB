import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navigation.css';

class Navigation extends Component {

  render() {
    return (
      <div className="navbar-component">
        <div className="navigationbar area">
          <a href="#" className="brand">Movie Craze</a>
          <nav role="navigation" id="navigation" className="list">
            <NavLink exact className="item -link" activeClassName="active" to="/">Home</NavLink>
            <NavLink className="item -link" activeClassName="active" to="/popular">Popular</NavLink>
            <NavLink className="item -link" activeClassName="active" to="/top_rated">Top Rated</NavLink>
            <NavLink className="item -link" activeClassName="active" to="/upcoming">Upcoming</NavLink>
          </nav>
          <button data-collapse data-target="#navigation" className="toggle">
            <span className="icon"></span>
          </button>
        </div>
      </div>
    );
  }
}

export default Navigation;
