import React, { Component } from 'react';

export const MoviesProvider=React.createContext()

class MovieContext extends Component {

  constructor() {
    super();
    this.state={
      movies: [],
      addmovie: this.addmovie,
    }
  }
  
  addmovie=(movieobj)=>{
   
    this.setState({
      movies:[...this.state.movies, movieobj]
    })
  }
  render() {
    return (
      <div>
        <MoviesProvider.Provider value={{...this.state}}>
          {this.props.children}
        </MoviesProvider.Provider>
      </div>
    );
  }
}

export default MovieContext;