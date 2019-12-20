import React, { Component } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import CustomerList from "./components/CustomerList";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "./components/Movie";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router";
import { withRouter } from "react-router";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: false,
      selectedCustomer: false,
      checkoutMessage: "",
      searchBar: "",
      movies: [],
      toSearch: false
    };
  }
  onSearchSubmitHandler = event => {
    event.preventDefault();
    const title = this.state.searchBar;
    axios
      .get("http://localhost:3000/movies", { params: { query: title } })
      .then(response => {
        console.log(response.data);
        this.setState({ movies: response.data, toSearch: true });
        this.props.history.push("/search");
      });

    this.setState({
      searchBar: ""
    });
  };
  onSelectMovieForCheckout = movie => {
    this.setState({
      selectedMovie: movie
    });
  };
  onSelectCustomerForCheckout = customer => {
    console.log(customer);
    this.setState({
      selectedCustomer: customer
    });
    console.log(this.state.selectedCustomer);
  };
  onInputChange = event => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  };
  checkout = event => {
    let dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7);
    axios
      .post(
        "http://localhost:3000/rentals/" +
          this.state.selectedMovie.title +
          "/check-out",
        { customer_id: this.state.selectedCustomer.id, due_date: dueDate }
      )
      .then(res => {
        this.setState({
          checkoutMessage: `${this.state.selectedMovie.title} has been successfully checked out to ${this.state.selectedCustomer.name}`,
          selectedCustomer: null,
          selectedMovie: null // Set the selected customer and movie to null when the rental is completed
        });
      })
      .catch(error => {
        this.setState({
          checkoutMessage: `Movie Checkout was Unsucessful`
        });
        console.log(error);
      });
  };
  render() {
    let selectedMovie = "";
    if (this.state.selectedMovie) {
      selectedMovie = (
        <div>
          <img
            src={this.state.selectedMovie.image_url}
            alt={this.state.selectedMovie.title}
            className="movie-img"
          />
          <p className="checkout-text">Selected movie: {this.state.selectedMovie.title}</p>
        </div>
      );
    }
    let selectedCustomer = "";
    if (this.state.selectedCustomer) {
      selectedCustomer = (
        <div>
          <p className="checkout-text">
            {" "}
            Customer: {this.state.selectedCustomer.name}{" "}
          </p>
        </div>
      );
    }
    let checkoutButton = "";
    if (this.state.selectedCustomer && this.state.selectedMovie) {
      checkoutButton = (
        <button onClick={this.checkout} className="btn btn-info">
          Checkout {this.state.selectedMovie.title} for{" "}
          {this.state.selectedCustomer.name}
        </button>
      );
    }
    const isToSearch = this.state.toSearch;
    if (isToSearch === true) {
      return <Redirect to="/search" />;
    } else {
      return (
        <div>
          <Router>
            <div>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand bsPrefix="App-title" href="#home">
                  Amal and Mac's Film Enthusiasts Club
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link as={Link} className="title" to="/">
                      Home
                    </Nav.Link>
                    <Nav.Link as={Link} className="title" to="/search">
                      Search
                    </Nav.Link>
                    <Nav.Link as={Link} className="title"  to="/library">
                      Film Library
                    </Nav.Link>
                    <Nav.Link as={Link} className="title"  to="/customers">
                      Members
                    </Nav.Link>
                  </Nav>
                  {/* <form
                    className="movieSearchForm"
                    onSubmit={this.onSubmitHandler}
                  >
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
                  </form> */}
                </Navbar.Collapse>
              </Navbar>
              <section className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 bd-highlight">
                  <h2 className="selectedHeader">{selectedMovie}</h2>

                  <h2 className="selectedHeader">{selectedCustomer}</h2>
                  <p className="selectedHeader checkoutMessage">{this.state.checkoutMessage}</p>

                  <p className="selectedHeader">{checkoutButton}</p>
                </div>
              </section>
              <div className="App">
                {/* <nav>
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
          </nav> */}

                <Switch>
                  <Route path="/search">
                    <Search movies={this.state.movies} />
                  </Route>
                  <Route
                    path="/library"
                    render={props => (
                      <MovieList
                        {...props}
                        onSelectMovieForCheckoutCallback={
                          this.onSelectMovieForCheckout
                        }
                      />
                    )}
                  />
                  <Route
                    path="/Customers"
                    render={props => (
                      <CustomerList
                        {...props}
                        onSelectCustomerForCheckoutCallback={
                          this.onSelectCustomerForCheckout
                        }
                      />
                    )}
                  />
                  <Route
                    path="/"
                    render={props => (
                      <MovieList
                        {...props}
                        onSelectMovieForCheckoutCallback={
                          this.onSelectMovieForCheckout
                        }
                      />
                    )}
                  />
                </Switch>
              </div>
            </div>
          </Router>
        </div>
      );
    }
  }
}

export default App;
