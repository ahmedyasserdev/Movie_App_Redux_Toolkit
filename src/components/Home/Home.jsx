import { useEffect } from "react";
import MovieLlisting from '../MovieListing/MovieListing';
import "./home.scss"
import { useDispatch } from "react-redux";
import {fetchMoviesAysnc, fetchShowsAysnc  , } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movie = "harry"
  const seire = "friends"
  useEffect(() => {
  dispatch(fetchMoviesAysnc(movie))
  dispatch(fetchShowsAysnc(seire))
  
}, [dispatch ,] )

return (

  <div>
    <div className="banner-img" ></div>
    <MovieLlisting />
  </div>
)
}

export default Home