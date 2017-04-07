import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { POSTER_BASE_URL } from '../utils/utility';
import { API_KEY } from '../api/apiCall';
import { loadEverything, clearMovieDetails } from '../actions/detailAction';
import Cast from '../components/Cast';
import '../styles/details.css';

class Detail extends Component {

  componentDidMount() {
    let { id } = this.props.match.params;
    this.props.dispatch(loadEverything('movie/' + id + '/credits?' + API_KEY, 'movie/' + id +'?language=en-US&' + API_KEY));
  }

  componentWillUnmount() {
    this.props.dispatch(clearMovieDetails());
  }

  renderLanguage(languages) {
    let language = "";
    for (var i = 0; i < languages.length; i++) {
      (language.length === 0) ? (language += languages[i].name) : (language = language + ", " +  languages[i].name);
    }
    return language;
  }

  renderGenre(genres) {
    let genre = "";
    for (var i = 0; i < genres.length; i++) {
      (genre.length === 0) ? (genre += genres[i].name) : (genre = genre + ", " +  genres[i].name);
    }
    return genre;
  }

  // renderCrew(crew) {
  //   return crew.map((value) => {
  //     if(value.department.includes('Writing') || value.department.includes('Directing')) {
  //       return (
  //         <div key={value.credit_id}>
  //           <h4>{ value.name }</h4>
  //           <p>{ value.job }</p>
  //         </div>
  //       );
  //     }
  //   });
  // }

  render() {
    let { isFetching, data, cast} = this.props;
    if(isFetching) {
      return <div className="spinner"><img className="gif" src="spinner.gif" alt="spinner" /></div>;
    }else {
      return (
        <div className="detail-container">
          <div className="details">
            <div className="poster">
              <img src={ POSTER_BASE_URL + data.poster_path } alt=""/>
            </div>
            <div className="movie-attr">
              <div className="title">
                <h3>{data.title + "(" + data.release_date.substring(0,4) + ")"}</h3>
              </div>
              <div className="user-desc">
                <div className="language">{ this.renderLanguage(data.spoken_languages) }</div>
                <div className="genre">{ this.renderGenre(data.genres) }</div>
                <div className="rate"><i className="fa fa-star" aria-hidden="true"></i> {data.vote_average}</div>
                <div className="trailer"><i className="fa fa-youtube-play" aria-hidden="true"></i></div>
              </div>
              <div className="overview">
                <h3>Overview</h3>
                <p>{data.overview}</p>
              </div>
              <div className="featured-crew">
                <h3>Featured Crew</h3>
                <div>
                  {/* { this.renderCrew(crew) } */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <Cast casts={cast} />
            <div className="cast-crew"><Button className="btn btn-default">Full Casts and Crew</Button></div>
          </div>
        </div>
      );

    }
  }
}

const mapStateToProps = (state) => {
  let { isFetching, data } = state.movieDetails;
  let { cast, crew } = state.casts;
  return {
    isFetching,
    data,
    cast,
    crew
  }
}

export default connect(mapStateToProps)(Detail);
