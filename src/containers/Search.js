import React, { Component } from 'react';

import '../styles/Search.css';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <input type="text" className="search-input" placeholder="Searh for a movie, a person..." />
      </div>
    );
  }
}

export default Search;
