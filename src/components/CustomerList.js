import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';
import axios from 'axios';


class CustomerList extends Component {
  constructor(props){
      super(props)
      this.state = {
          customers:[], 
          error: '',
      }
    }
    componentDidMount() {
        axios.get("http://localhost:3000/customers")
          .then((response) => {
            this.setState({customers: response.data });
            console.log(this.state.customers)
          })
          .catch((error) => {
            this.setState({ error: error.message });
          });
      }
    
    render() {
      const customerInfo = this.state.customers.map((customer) => {
        return (
          <Customer
          accountCredit= {customer.account_credit}
          address= {customer.address}
          city= {customer.city}
          id= {customer.id}
          moviesCheckedOutCount= {customer.movies_checked_out_count}
          name= {customer.name}
          phone={customer.phone}
          postalCode= {customer.postal_code}
          registeredAt= {customer.registered_at}
          state= {customer.state}/> 
      );
    
      }) 
        return (
          // <div>
          //    <h2> Customers List </h2>
          //   {customerInfo}
          //   </div>
          <section>
            <table className="table table-striped">
              <thead className="table-header-row">
                <tr>
                <th>Customer</th>
                <th>Id</th>
                <th>Name</th>
                <th>Account Credit</th>
                <th># Movies checked out</th>
                </tr>
               
              </thead>
              <tbody>{customerInfo}</tbody>
            </table>
          </section>
        );

         
           

    }
  }
export default CustomerList;