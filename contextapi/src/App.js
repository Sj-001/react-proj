import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Movielist from './Movielist';
import Addmovie from './Addmovie';
import MovieContext from './MovieContext';

function App() {
  return (
    <div className="App">
      <h1>Movie App</h1>
      <MovieContext>
        <Navbar />
        <Addmovie/>
        <Movielist />
      </MovieContext>
    </div>
  );
}

export default App;
