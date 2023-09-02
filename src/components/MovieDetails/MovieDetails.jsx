import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './movieDetails.scss';
import { useEffect } from 'react';
import { fetchDetailsAysnc, getAllDetails, } from '../../features/movies/movieSlice';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector(getAllDetails);
  const {
    Title,
    Year,
    Actors,
    Genre,
    imdbRating,
    imdbVotes,
    Runtime,
    Plot,
    Director,
    Language,
    Awards,
    Poster,
  } = movieDetails;

  useEffect(() => {
    dispatch(fetchDetailsAysnc(imdbID));

  }, [dispatch, imdbID]);

  const infoItems = [
    { label: 'Director', value: Director, className: 'director' },
    { label: 'Stars', value: Actors, className: 'stars' },
    { label: 'Categories', value: Genre, className: 'categories' },
    { label: 'Languages', value: Language, className: 'languages' },
    { label: 'Awards', value: Awards, className: 'awards' },
  ];

  const details = [
    { label: 'IMDb Rating', value: imdbRating, className: 'rating', icon: 'fa-star' },
    { label: 'IMDb Votes', value: imdbVotes, className: 'votes', icon: 'fa-thumbs-up' },
    { label: 'Run Time', value: Runtime, className: 'time', icon: 'fas fa-film' },
    { label: 'Year', value: Year, className: 'year', icon: 'fa-calendar' },
  ];

  return (


    <section>
      <div className='left'>
        <div className="title">
          {Title}
        </div>

        <div className='box' >
          {details.map(({ value, icon, label, className }, index) => (
            <div key={index} className={className}>
              <span>{label}</span> <i className={`fas ${icon}`}></i> : {value}
            </div>
          ))}

        </div>
        <p className='plot'>{Plot}</p>

        <div className='info'>
          {infoItems.map((item, index) => (
            <div key={index} className={item.className}>
              <span>{item.label}  : </span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='right' >
        <img src={Poster} alt={Title} />

      </div>




    </section>





  );
};

export default MovieDetails;

// <div className='rating'>
// <span>Imdb Rating</span> <i className='fas fa-star'></i> : {imdbRating}
// </div>