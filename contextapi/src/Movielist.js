import React, { useContext } from 'react';
import { MoviesProvider } from './MovieContext';

function Movielist() {
  const obj=useContext(MoviesProvider)
  var movielist=obj.movies.map((movie)=>{
    return <div style={{backgroundColor: 'lightgreen'}}>
      <h2>{movie.movie}</h2>
      <h2>{movie.director}</h2>
    </div>
  })
  return (
    <div style={{backgroundColor:'green'}}>
      <h1>Movies List</h1>
      {movielist}
    </div>
  );
}

export default Movielist;