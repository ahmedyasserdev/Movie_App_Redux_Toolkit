import { Link } from "react-router-dom"
import "./header.scss"
import user from "../../imgs/user.jpg"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchMoviesAysnc, fetchShowsAysnc } from "../../features/movies/movieSlice"
const Header = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (search) {
      dispatch(fetchMoviesAysnc(search))
      dispatch(fetchShowsAysnc(search))
    }
      setSearch("")
  }
  const [search , setSearch] = useState("")
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  
  return (
    <div className="header" >
    <div className="logo" >
    <Link to="/">
        Movie App
        </Link>
        </div>

          <div className="search" >
            <form onSubmit={handleSubmit} >  
              <input  className="search-input"  type = "text" value={search}  placeholder="Search..."  onChange={handleChange}  />
              <button className="search-icon" type = "submit" ><i className="fas fa-search" ></i></button>
            </form>
          </div>


      <div className="user-img">
        <img src = {user} />
      </div>

    </div>
  )
}

export default Header