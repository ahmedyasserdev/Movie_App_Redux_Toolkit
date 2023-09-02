import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Footer from './components/Footer/Footer';
import NotFound from './components/PageNotFound/NotFound';
function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
