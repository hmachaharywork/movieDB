export const initialState = () => ({
    genre: [],
    nowShowing:{
      isLoading: true,
      inTheatre: []
    },
    popular:{
      isFetching: true,
      popularMovies: [],
      page: 1
    },
    topRated: {
      isFetching: true,
      topRatedMovies: [],
      page: 1
    },
    upcoming: {
      isFetching: true,
      upcomingMovies: [],
      page: 1
    }
})
