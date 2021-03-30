import React, { useContext } from 'react';
import { MoviesProvider } from './MovieContext';

function Navbar(){
  const obj=useContext(MoviesProvider)

  
  return (
    <div style={{backgroundColor:'teal'}}>
      <h1>The Total Movies Count: {obj.movies.length}</h1>
    </div>
  );
}

export default Navbar;