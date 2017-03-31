import React from 'react';
import {Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';
import { IMAGE_BASE_URL } from '../utils/utility';
import '../styles/MovieThumbnails.css';

const MovieThumbnails = (props) => {
  function displayGrid() {
    let { movies } = props;
    console.log("MovieThumbnails", movies);
    return movies.map((movie) => {
      return (
          <Col className="movie-thumnail" key={movie.id} xs={12} sm={6} md={6} lg={4}>
            <Thumbnail src={IMAGE_BASE_URL + movie.backdrop_path} alt={ IMAGE_BASE_URL + movie.poster_path}>
              <div className="movie-title">
                <h4>{movie.title}</h4>
                <div className="rating"><i className="fa fa-star" aria-hidden="true"></i> {movie.vote_average}</div>
              </div>
              <div className="movie-property">
                <div><i className="fa fa-calendar" aria-hidden="true"></i> {movie.release_date}</div>
              </div>
              <div className="movie-description">
                {movie.overview}
              </div>
              <div>
                <Button className="more-button" bsStyle="primary">More</Button>
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
