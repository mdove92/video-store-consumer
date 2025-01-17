import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: "",
      movies: []
    };
  }

  onInputChange = event => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  };

  onAddToLibraryHandler = movie => {
    axios
      .post("http://localhost:3000/movies", movie)
      .then(res => {
        this.setState({ movies: [] });
      })
      .catch(error => {
        return <h2>"You are a BAD DOG"</h2>;
      });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const title = this.state.searchBar;
    axios
      .get("http://localhost:3000/movies", { params: { query: title } })
      .then(response => {
        console.log(response.data);
        this.setState({ movies: response.data });
      });

    this.setState({
      searchBar: ""
    });
  };

  render() {
    console.log(this.state.searchBar);
    const foundMovies = this.state.movies.map(movie => {
      if (movie != null) {
        return (
          <section>
            <Movie
              id={movie.id}
              image={movie.image_url}
              title={movie.title}
              release={movie.release_date}
              overview={movie.overview}
              is_not_in_library={true}
            />
            <button
              onClick={() => {
                this.onAddToLibraryHandler(movie);
              }}
            >
              Add to library
            </button>
          </section>
        );
      } else {
        return; // if a null entry is returned, don't return anything
      }
    });
    return (
      <section>
        <div>
          <label className="search-bar--label" htmlFor="searchBar">
            Search
          </label>
        </div>
        <form className="movieSearchForm" onSubmit={this.onSubmitHandler}>
          <input
            name="searchBar"
            id="searchBar"
            placeholder="Movie"
            type="text"
            className="search-bar"
            onChange={this.onInputChange}
            value={this.state.searchBar}
          />
          <button onSubmit={this.onSubmit}>Search</button>
        </form>
        {foundMovies}
      </section>
    );
  }
}
export default Search;
