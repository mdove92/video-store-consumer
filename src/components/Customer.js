import React from 'react';
import PropTypes from 'prop-types';




const Customer = (props) => {
  console.log(props)
return (
//   <div>
// <h2> Customer </h2>
//   {props.name}
//   {props.id}
//   {props.name}
//   {props.name}
//   {props.name}
//   </div>
  <section>

      {/* <td><button value={id} name={name} onClick={selectCurrCustomer} className=“btn btn-info”>Select</button></td>
      <td>{id}</td>
      <td>{name}</td>
      <td>{showDollars(account_credit)}</td>
      <td>{movies_checked_out_count}</td>
    </tr> */}

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