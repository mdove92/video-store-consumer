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
  onSelectMovieForCheckout = movie => {
    
    this.setState({
    selectedMovie: movie 
    })
  };
  onSelectCustomerForCheckout = customer => {
    
    console.log(customer)
    this.setState({
    selectedCustomer: customer
    })
    console.log(this.state.selectedCustomer)
  };
render() {
  let selectedMovie = "" 
  if(this.state.selectedMovie){
selectedMovie = <div> 
  <h3> Selected Movie</h3>
   <h4>{this.state.selectedMovie.title} </h4>
   <img src={this.state.selectedMovie.image_url} alt="" />


</div>

  }
  let selectedCustomer = "" 
  if(this.state.selectedCustomer){
selectedCustomer = <div> 
  <h3> Selected Customer</h3>
   <h4>{this.state.selectedCustomer.name} </h4> 

</div>

  }
  return (
    <div>
      <h2> {selectedMovie}</h2>
      <h2>{selectedCustomer}</h2>

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
                onSelectMovieForCheckoutCallback={this.onSelectMovieForCheckout} />}
            />
            <Route path="/Customers"
            render={(props) => <CustomerList {...props} 
            onSelectCustomerForCheckoutCallback={this.onSelectCustomerForCheckout}/>}
          />
            <Route path='/'
              render={(props) => <MovieList {...props} 
                onSelectMovieForCheckoutCallback={this.onSelectMovieForCheckout} />}
                /> 
          </Switch>
        </div>
      </Router>
    </div>
  );
}
  
}


export default App;

