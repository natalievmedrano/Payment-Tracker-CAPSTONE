import React, { useState } from "react";
import SearchBar from "../Searchbar/SearchBar";

const PaymentsTable = ({ payments = [] }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredPayments, setFilteredPayments] = useState(payments);

  let mappedPayments = filteredPayments.map((payment) => (
    <div className="flex">
      <table>
        <thead>
          <tr>
            <th>Payment Name</th>
            <th>Payment Amount</th>
            <th>Payment Due Date</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
      <div> <td>{payment.payment_type}</td></div>
      <div><td>{payment.payment_amount}</td></div>
      <div><td>{payment.payment_due_date}</td></div>
      <div><td>{payment.verify_payment}</td></div>
      </tbody>
      </table>
    </div>
  ));

  const handleSearch = () => {
    const newFilteredPayments = payments.filter(payment =>
      payment.month.toLowerCase().includes(searchKeyword.toLowerCase()),
    );
    setFilteredPayments(newFilteredPayments)
  };

  return (
    <div>
      <SearchBar value={searchKeyword} onChange={setSearchKeyword} onSubmit={handleSearch} />{" "}
      {mappedPayments}
    </div>
  );

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
