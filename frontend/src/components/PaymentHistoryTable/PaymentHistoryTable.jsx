import React, { useState } from 'react';






const PaymentsHistoryTable = ({ payments = [] }) => {
  let mappedPayments = payments.map((payment) => (
    <div className="flex">
      <div>{payment.payment_type}</div>
      <div>{payment.payment_amount}</div>
      <div>{payment.payment_due_date}</div>
    </div>
  ));
  return <div>{mappedPayments}</div>;
}

export default PaymentsHistoryTable();