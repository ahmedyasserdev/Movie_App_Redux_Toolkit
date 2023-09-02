import { useSelector, useDispatch } from 'react-redux';
import { getAllMovies, getAllShows, getLoading, fetchMoviesAysnc, fetchShowsAysnc } from '../../features/movies/movieSlice';
import MovieCard from './../MovieCard/MovieCard';
import './movieListing.scss';
import { useEffect } from 'react';

const MovieListing = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const loading = useSelector(getLoading);

  useEffect(() => {
      dispatch(fetchMoviesAysnc('harry'));
      dispatch(fetchShowsAysnc('friends'));
  }, [dispatch,]);

  let renderedMovies, renderedShows = "";

  if (loading) {
    return <h3 className='loading' >Loading...</h3>;
  }

  renderedMovies = movies.Response === "True" ? (
    movies?.Search?.map((item) => {
      return <MovieCard key={item.imdbID} item={item} />;
    })
  ) : (
    <div className='error'>
      <h3>{movies.Error}</h3>
    </div>
  );

  renderedShows = shows.Response === "True" ? (
    shows?.Search?.map((item) => {
      return <MovieCard key={item.imdbID} item={item} />;
    })
  ) : (
    <div className='error'>
      <h3>{shows.Error}</h3>
    </div>
  );

  return (
    <div className='wrapper'>
      <div className='list'>
        <h2>Movies</h2>
        <div className='movie-container'>
            {renderedMovies}
        </div>
      </div>

      <div className='list'>
        <h2>Shows</h2>
        <div className='show-container'>
          {renderedShows}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
