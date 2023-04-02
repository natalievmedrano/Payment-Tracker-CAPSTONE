import React, { useState } from "react";
import './PaymentCard.css'
import { Table } from "react-bootstrap";

const PaymentCard = ({payments}) => {
  const mappedPayments = payments.map((payment) => (
    <div>
      <Table>
        <thead>
          <tr>
            <th>PAYMENT NAME</th>
            <th>PAYMENT AMOUNT</th>
            <th>PAYMENT DUE DATE</th>
            <th>PAYMENT STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{payment.payment_type}</td>
            <td>{payment.payment_amount}</td>
            <td>{payment.payment_due_date}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ));




 return(<div >
  {mappedPayments}
 </div>)
};

export default PaymentCard;
