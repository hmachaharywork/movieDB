import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { IMAGE_BASE_URL } from '../utils/utility';

import '../styles/Carousel.css';

const CarouselInstance = ({movies}) => {
  function renderCarousel() {
    return movies.map((movie) => {
      if(movie.backdrop_path !== null) {
        return (
          <Carousel.Item key={movie.id}>
            <img width={900} height={350} alt="900x500" src={IMAGE_BASE_URL + movie.backdrop_path} />
            <div className="now-showing">Now Showing</div>
            <Carousel.Caption>
              <h3>{movie.title}</h3>
              <Link className="btn btn-primary more-button" to={"/" + movie.id +"-"+ movie.title +"/details"}>Details</Link>
            </Carousel.Caption>
          </Carousel.Item>
        );
      }
    });
  }
    return (
      // <div className="carousel-container">
        <Carousel indicators={false}>
          { renderCarousel() }
        </Carousel>
      // </div>
    );
}

export default CarouselInstance;
