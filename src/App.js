import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList'
import CustomerList from './components/CustomerList'
import Search from './components/Search'
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './components/Movie';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedMovie: false,
      selectedCustomer: false,

    }
  }
  onSelectForCheckout = movie => {
    
    this.setState({
    selectedMovie: movie 
    })
    // movie.preventDefault();

    // axios
    //   .get("http://localhost:3000/movies", movie)
    //   .then(response => {
    //     console.log(response.data);
    //     this.setState({ movies: response.data });
    //   });

    // this.setState({
    //   searchBar: ""
    // });
  };
render() {
  let selectedMovie = "" 
  if(selectedMovie){
selectedMovie = <Movie 
id={this.state.selectedMovie.id}
image={this.state.selectedMovie.image_url}
title={this.state.selectedMovie.title}
release={this.state.selectedMovie.release_date}
overview={this.state.selectedMovie.overview}

/> 
  }
  return (
    <div>
      <h2> {selectedMovie}</h2>

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route
              path='/library'
              render={(props) => <MovieList {...props} 
                onSelectForCheckoutCallback={this.onSelectForCheckout} />}
            />
            <Route path="/Customers">
              <CustomerList />
            </Route>
            {/* <Route path="/">
              <MovieList
                onSelectForCheckoutCallback={this.onSelectForCheckout}
              />
            </Route> */}
            <Route
              path='/'
              render={(props) => <MovieList {...props} 
                onSelectForCheckoutCallback={this.onSelectForCheckout} />}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
  
}


export default App;

