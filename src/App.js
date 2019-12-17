import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList'
import CustomerList from './components/CustomerList'
import Search from './components/Search'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
render() {
  return (
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
          <Route path="/library">
            <MovieList />
          </Route>
          <Route path="/Customers">
            <CustomerList />
          </Route>
          <Route path="/">
          <MovieList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
  
}


export default App;

