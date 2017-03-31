import axios from 'axios';

const THE_MOVIE_DB_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=0aa36a484de7a18245122ab0ca01627c';

class Api {
  static getData(location) {
    var requestUrl = `${THE_MOVIE_DB_URL}${location}&${API_KEY}`;
    return axios.get(requestUrl).then(response => {
      //console.log(response.data.results);
      return response.data.results;
    }).catch(error => {
      return error;
    });
  }
}

export default Api;
