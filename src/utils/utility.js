export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500_and_h281_bestv2';

/*************** Sort movies by release date descending***************/

export const sortMoviesByDate = (movies) => {
  let sortedMovies = (movies !== 'undefined') ? movies : [];

  sortedMovies = sortedMovies.filter((movie) => {
    let now = parseInt((new Date().getTime() / 1000).toFixed(0), 10);
    let releaseDate = parseInt((new Date(movie.release_date).getTime() / 1000).toFixed(0), 10);
    return releaseDate <= now;
  });

  sortedMovies = sortedMovies.sort((a, b) => {
    let aDate = parseInt((new Date(a.release_date).getTime() / 1000).toFixed(0), 10);
    let bDate = parseInt((new Date(b.release_date).getTime() / 1000).toFixed(0), 10);

    if(aDate > bDate){
      return -1;
    }else if(aDate < bDate) {
      return 1;
    }else {
      return 0;
    }
  });

  return sortedMovies;
};

/********* Sort movies by rating ************/

export const sortMoviesByRate = (movies) => {
  let sortedMovies = (movies !== 'undefined') ? movies : [];
  sortedMovies = sortedMovies.sort((a, b) => {
    if(a.vote_average > b.vote_average){
      return -1;
    }else if(a.vote_average < b.vote_average) {
      return 1;
    }else {
      return 0;
    }
  });

  return sortedMovies;
};

/********** Sort movies by release date ascending ***********/
export const sortMoviesAsc = (movies) => {
  let sortedMovies = (movies !== 'undefined') ? movies : [];
  sortedMovies = sortedMovies.sort((a, b) => {
    let aDate = parseInt((new Date(a.release_date).getTime() / 1000).toFixed(0), 10);
    let bDate = parseInt((new Date(b.release_date).getTime() / 1000).toFixed(0), 10);

    if(aDate < bDate){
      return -1;
    }else if(aDate > bDate) {
      return 1;
    }else {
      return 0;
    }
  });
  return sortedMovies;
};


/****** Listing genre for each movie ************/
export const genreListing = (genre_ids, genre) => {
  let genreStr = "";
  let length = genre.length;
  for (var i = 0; i < length; i++) {
    if(genre_ids.includes(genre[i].id)) {
      (genreStr !== "") ? (genreStr = genreStr + ", " + genre[i].name) : (genreStr += genre[i].name);
    }
  }
  return genreStr;
};

/********** Extracting image from movie list ***********/
export const extractImages = (movies) => {
  let images = [];
  let length = movies.length;
  let url =  undefined;

  for(var i = 0; i < length; i++) {
    if(movies[i].poster_path !== null) {
      //console.log(movies[i].poster_path);
      url = `${IMAGE_BASE_URL}${movies[i].poster_path}`;
      images.push(url);
    }else if( movies[i].backdrop_path !== null) {
      //console.log(movies[i].poster_path);
      url = `${IMAGE_BASE_URL}${movies[i].backdrop_path}`;
      images.push(url);

    }
  }
  //console.log(images);
  return images;
}
