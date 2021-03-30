import React, {useContext, useState} from 'react';
import { MoviesProvider } from './MovieContext';

function Addmovie() {

  const[movie, setmovie]=useState('')
  const[director, setdirector]=useState('')
  const obj=useContext(MoviesProvider)
  function addmovie(){
    var movieobj={
      movie:movie,
      director:director
    }
    obj.addmovie(movieobj)
  }
  return (
    <div>
      <h1>Add Movie</h1>
      <input type="text" placeholder="Movie Name" value={movie} onChange={(event)=>{setmovie(event.target.value)}}/><br/>
      <input type="text" placeholder="Director Name" value={director} onChange={(event)=>{setdirector(event.target.value)}}/><br/>
      <button onClick={addmovie}>ADD MOVIE</button>
    </div>
  );
}

export default Addmovie;