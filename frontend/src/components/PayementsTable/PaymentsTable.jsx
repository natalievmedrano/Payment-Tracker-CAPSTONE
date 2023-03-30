import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../Searchbar/SearchBar";
import { Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

import "./PaymentsTable.css";
import MoneyTracker from "../MoneyTracker/MoneyTracker";

const PaymentsTable = ({ payments = [], id }) => {
  const [user, token] = useAuth();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredPayments, setFilteredPayments] = useState(payments);
  const [active, setActive] = useState(false);
  //const[deletePayments, setDeletedPayments]= useState=(payments)

  const handleClick = () => {
    setActive(!active);
  };

  // async function deletePayments() {
  //   let response = await axios.delete(
  //     'http://127.0.0.1:8000/api/payments/21/', {
  //       headers: {
  //         Authorization: 'Bearer ' + token
  //       }
  //     }
  //     );
  // }

  // function handleDelete(id){
  //   const deletePayment = payments.filter(payment => payment.id !== id)
  //   setDeletedPayments(deletePayment)
  // }

  let mappedPayments = filteredPayments.map((payment) => (
    <div className="flex">
      <Table striped bordered hover>
        <thead className="thead">
          <tr>
            <th>Payment Name</th>
            <th>Payment Amount</th>
            <th>Payment Due Date</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {" "}
            <td>{payment.payment_type}</td>
            <td>{payment.payment_amount}</td>
            <td>{payment.payment_due_date}</td>
            <td
              onClick={handleClick}
              style={{ color: active ? "green" : "red" }}
            >
              {payment.verify_payment}
            </td>
            <td>
              <button type="button">edit</button>
              <button className="submit" type="button">
                delete
              </button>
            </td>
          </tr>
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
      <MoneyTracker />
    </div>
  );
};

export default PaymentsTable;
