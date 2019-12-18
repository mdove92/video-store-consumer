import React from 'react';
import PropTypes from 'prop-types';




const Customer = (props) => {
  console.log(props)
return (

  <section>
<tr> 
  <td> <button value={props.id} name={props.id} classname="btn btn-info">Select</button></td>
  <td> {props.id}</td>
  <td> {props.name}</td>
  <td> {props.accountCredit}</td>
  <td> {props.moviesCheckedOutCount}</td>
</tr>
</section>
)
}
export default Customer;