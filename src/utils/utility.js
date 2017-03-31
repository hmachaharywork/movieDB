export function sortMovies(movies) {
  let sortedMovies = (movies !== 'undefined') ? movies : [];
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
}


export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500_and_h281_bestv2/';
