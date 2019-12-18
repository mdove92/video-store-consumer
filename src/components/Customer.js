import React from 'react';
import PropTypes from 'prop-types';




const Customer = (props) => {
  console.log(props)
return (

  <section>
<tr> 
  <td> {props.name}</td>
  <td> {props.id}</td>
  <td> {props.accountCredit}</td>
  <td> {props.moviesCheckedOutCount}</td>
</tr>
</section>
)
}
export default Customer;