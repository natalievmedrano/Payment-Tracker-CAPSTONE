import React, { useState } from "react";

const PaymentsTable = ({ payments = [] }) => {
  let mappedPayments = payments.map((payment) => (
    <div className="flex">
      <div>{payment.payment_type}</div>
      <div>{payment.payment_amount}</div>
      <div>{payment.payment_due_date}</div>
    </div>
  ));
  return <div>{mappedPayments}</div>;

  // <div>
  //   <td>
  //     <tr>Payment Name
  //         {payments.payment_due_date}
  //     </tr>
  //     <br />
  //     <tr>Payment Due Date</tr>
  //     <br />
  //     <tr>Payment Month</tr>
  //     <br />
  //     <tr>Payment Year</tr>
  //     <br />
  //     <tr> Payment PAID?</tr>
  //   </td>
  // </div>
};

export default PaymentsTable;
