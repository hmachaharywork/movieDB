import React from 'react';
import { Link } from 'react-router-dom';
import {Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { IMAGE_BASE_URL, genreListing } from '../utils/utility';
import '../styles/MovieThumbnails.css';

const MovieThumbnails = ({movies, genre}) => {

  function displayGrid() {

    return movies.map((movie) => {
      let image = undefined;
      if(movie.backdrop_path !== null) {
        image = IMAGE_BASE_URL + movie.backdrop_path;
      }else {
        image = "default.png";
      }
      return (
        <Col className="movie-thumnail" key={movie.id} xs={12} sm={6} md={6} lg={4}>
            <Thumbnail src={image} alt={image}>
            <div className="movie-title">
              <h4>{movie.title}</h4>
              <div className="rating"><i className="fa fa-star" aria-hidden="true"></i> {movie.vote_average}</div>
            </div>
            <div className="movie-property">
              <div className="movie-release"><i className="fa fa-calendar" aria-hidden="true"></i> {movie.release_date.substring(0, 4)}</div>
              <div>{genreListing(movie.genre_ids, genre)}</div>
            </div>
            <div className="movie-description">
              {movie.overview}
            </div>
            <div>
                  <Link className="btn btn-primary more-button" to={"/" + movie.id +"-"+ movie.title +"/details"}>More</Link>
            </div>
          </Thumbnail>
        </Col>
      );
    });
  }

  return (
    <Grid>
      <Row>
        {displayGrid()}
      </Row>
    </Grid>
  );

};

export default MovieThumbnails;
