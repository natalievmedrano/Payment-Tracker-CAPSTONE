import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../Searchbar/SearchBar";
import { Table } from "react-bootstrap";

import "./PaymentsTable.css";

const PaymentsTable = ({ payments = [] }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredPayments, setFilteredPayments] = useState(payments);
  const [active, setActive] = useState(false);
  //const[deletedPayments, setDeletedPayments]= useState=([])

  const handleClick = () => {
    setActive(!active);
  };

  // async function deletePayments(id) {
  //   let response = await axios.delete(
  //     `http://127.0.0.1:8000/api/payments/${id}/`
  //   );
  //   console.log("DELETED:", response.data);
  //   setDeletedPayments(response.data);
  // }

  let mappedPayments = filteredPayments.map((payment) => (
    <div className="flex">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Payment Name</th>
            <th>Payment Amount</th>
            <th>Payment Due Date</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
            {" "}
            <td>{payment.payment_type}</td>
            <td>{payment.payment_amount}</td>
            <td>{payment.payment_due_date}</td>
            <td onClick={handleClick} style={{color: active ? "green" : "red"}}>{payment.verify_payment}</td>
          <button className="submit" >
            delete
          </button>
        </tbody>
      </Table>
    </div>
  ));

  const handleSearch = () => {
    const newFilteredPayments = payments.filter((payment) =>
      payment.month.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setFilteredPayments(newFilteredPayments);
  };

  return (
    <div>
      <SearchBar
        value={searchKeyword}
        onChange={setSearchKeyword}
        onSubmit={handleSearch}
      />{" "}
      {mappedPayments}
    </div>
  );
};

export default PaymentsTable;
