import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios'
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
