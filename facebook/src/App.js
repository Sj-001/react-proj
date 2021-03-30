import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import {BrowserRouter, Route} from 'react-router-dom'

import Dashboard from './Dashboard';
function App() {
  return (
    <div className="App">
      
      
      
      <BrowserRouter>
        <Navbar />
        <Route path='/dashboard' component={Dashboard} exact/>
        <Route path='/' component={Body} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
