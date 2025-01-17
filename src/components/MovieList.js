import React, { Component } from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import axios from "axios";

import "./Movie.css";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      error: ""
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/movies")
      .then(response => {
        this.setState({ movies: response.data });
        console.log(this.state.movies);
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }
  onSelectForCheckoutHandler = movie => {
    this.props.onSelectMovieForCheckoutCallback(movie);
    window.scrollTo(0, 0); // Scroll to top of screen when the button has been pressed
  };
  render() {
    const moviesInfo = this.state.movies.map(movie => {
      if (movie.inventory == 0) {
        return (
          <section className="card p-2 flex-fill bd-highlight  w-50">
            <Movie
              id={movie.id}
              image={movie.image_url}
              title={movie.title}
              release={movie.release_date}
              overview={movie.overview}
            />
            <section className="movieCheckedOut"><b>Movie is checked out</b></section>
          </section>
        );
      } else {
        return (
          <section className="card p-2 flex-fill bd-highlight  w-50">
            <Movie 
              id={movie.id}
              image={movie.image_url}
              title={movie.title}
              release={movie.release_date}
              overview={movie.overview}
            />
            <button
              onClick={() => {
                this.onSelectForCheckoutHandler(movie);
              }} className="btn btn-info btn-movie"
            >
              Select Movie for Checkout
            </button>
            
          </section>
        );
      }
    });

    return (
      <div>
        <h2> Rental Library </h2>
        <section className = "d-flex p-2 bd-highlight flex-wrap">
        {moviesInfo}
        </section>
      </div>
    );
  }
}

export default MovieList;
