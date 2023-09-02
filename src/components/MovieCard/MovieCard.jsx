import { Link } from 'react-router-dom'
import './movieCard.scss'

// eslint-disable-next-line react/prop-types
const MovieCard = ({item}) => {
    // eslint-disable-next-line react/prop-types
    const {Poster , Title  , Year , imdbID  }   = item

    return (
        <div className='card' >
        <Link to = {`/movie/${imdbID}`} >
                <div className='card-container' >
                    <div className = "card-top" >
                        <img src = {Poster} alt = {Title} />
                    </div>
    
                    <div className = "card-bottom" >
                        <div className='card-info' >
                            <h4>{Title}</h4>
                            <p>{Year}</p>
                        </div>
                    </div>
    
    
                </div>
            
                </Link>
            </div>
    )
}

export default MovieCard