import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navigation.css';

class Navigation extends Component {

  getTriggerElement(el) {
    var isCollapse = el.getAttribute('data-collapse');
    if (isCollapse !== null) {
      return el;
    } else {
      var isParentCollapse = el.parentNode.getAttribute('data-collapse');
      return (isParentCollapse !== null) ? el.parentNode : undefined;
    }
  }

  collapseClickHandler(event) {
    event.preventDefault();

    var triggerEl = this.getTriggerElement(event.target);
    // If trigger element does not exist
    if (triggerEl === undefined) {
      event.preventDefault();
      return false;
    }

    var targetEl = document.querySelector(triggerEl.getAttribute('data-target'));
    if (targetEl) {
      triggerEl.classList.toggle('-active');
      targetEl.classList.toggle('-on');
    }
  }

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
          <button data-collapse data-target="#navigation"
            className="toggle"
            onClick={this.collapseClickHandler.bind(this)}>
            <span className="icon"></span>
          </button>
        </div>
      </div>
    );
  }
}

export default Navigation;
