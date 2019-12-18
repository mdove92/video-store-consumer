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
  onSelectForCheckoutHandler = movie => {
 
    this.props.onSelectMovieForCheckoutCallback(movie)
  };
  render() {
    const moviesInfo = this.state.movies.map((movie) => {
      return(
        <section>
        <Movie 
          id={movie.id}
          image={movie.image_url}
          title={movie.title}
          release={movie.release_date}
          overview={movie.overview}
          
        /> 
        <button onClick={() => {this.onSelectForCheckoutHandler(movie)}}>
            Select Movie for Checkout
          </button>
          </section>
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