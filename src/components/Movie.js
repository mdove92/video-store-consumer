import React from "react";
import PropTypes from "prop-types";

const Movie = props => {
  /* Add if statement to return a different movie html for search results that
     aren't in the library. If the movie result is not in the library, add a button that will
     add the movie to the library*/
  if (props.is_not_in_library) {
    return (
     
      <section className="movie-card--header">
        <h2>{props.title}</h2>
        <p>Release year: {props.release.split('-')[0]}</p>
        <img src={props.image} alt={props.title} />
        <div>{props.overview}</div>
      </section>
        
    
    );
  } else {
    return (
    
      <section className="movie-card--header">
        <h2>{props.title}</h2>
        <p>Release year: {props.release.split('-')[0]}</p>
        <img src={props.image} alt={props.title} />
        <div>{props.overview}</div>
      </section>
        
  
    );
  }
};
export default Movie;
