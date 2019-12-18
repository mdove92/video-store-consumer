import React from 'react';
import PropTypes from 'prop-types';




const Customer = (props) => {

return (

 
<tr> 
  <td> <button value={props.id} name={props.id} className="btn btn-info" onClick={props.selectForCheckoutCallback}>Select</button></td>
  <td> {props.id}</td>
  <td> {props.name}</td>
  <td> {props.accountCredit}</td>
  <td> {props.moviesCheckedOutCount}</td>
</tr>
)
}
export default Customer;