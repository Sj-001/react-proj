import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>

      <BrowserRouter>
        <Navbar />
        <Route path='/home' component={Home} exact/>
        <Route path='/contact' component={Contact} exact/>
        <Route path='/services' component={Services} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
