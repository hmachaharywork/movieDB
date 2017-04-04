import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadMovieDetails } from '../actions/detailAction';

class Detail extends Component {

  componentDidMount() {
    let { id } = this.props.match.params;
    this.props.dispatch(loadMovieDetails('movie/' + id +'?language=en-US'));
  }

  render() {
    let { isFetching, data } = this.props;
    if(isFetching) {
      return <h3>Loading...</h3>;
    }else {
      return <h3>{data.title}</h3>;
    }
  }
}

const mapStateToProps = (state) => {
  let { isFetching, data } = state.movieDetails;
  return {
    isFetching,
    data
  }
}

export default connect(mapStateToProps)(Detail);
