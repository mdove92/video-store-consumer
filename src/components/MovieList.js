import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import axios from 'axios';



class MovieList extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [], 
      error: '',
    }
  }
  componentDidMount() {
    axios.get("http://localhost:3000/movies")
      .then((response) => {
        this.setState({movies: response.data });
        console.log(this.state.movies)
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const moviesInfo = this.state.movies.map((movie) => {
      return(
        <Movie 
          id={movie.id}
          image={movie.image_url}
          title={movie.title}
          release={movie.release_date}
          overview={movie.overview}
        /> 
      )

    })

    return (
      <div>
  <h2> Rental Library </h2>
  {moviesInfo}
  
      </div>
    
    )

  }
}


export default MovieList;