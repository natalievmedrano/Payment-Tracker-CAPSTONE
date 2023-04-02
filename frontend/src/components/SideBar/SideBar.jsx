import React, { useState, useEffect } from "react";
import "./SideBar.css";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Table } from "react-bootstrap";

const SideBar = ({}) => {
  const [user, token] = useAuth();
  const [payments, setNewPayments] = useState([]);
  const [sideBar, setSideBar] = useState(payments);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/payments/all/",
          {
            headers: {
              Authorization: "Bearer" + token,
            },
          }
        );
        console.log(response.data);
        setNewPayments(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPayments();
  }, [token]);

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

  const handleClick = () => {
    const sidebarPayments = payments.filter(
      (payment) => payment.month === payment.month
    );
    console.log(sideBar);
    setSideBar(sidebarPayments);
  };
  return (
    <section className="sidebar">
      <h2>PAYMENT HISTORY</h2>

      <div>
        <li>
          <a onClick={(event) => handleClick()}>2021</a>
        </li>
        <li>
          <a onClick={(event) => handleClick()}>2022</a>
        </li>
        <li>
          <a onClick={(event) => handleClick()}>2023</a>
        </li>
        <li>
          <a onClick={(event) => handleClick()}>January</a>
        </li>
        <li>
          <a onClick={(event) => handleClick()}>February</a>
        </li>
        <li>
          <a onClick={(event) => handleClick()}>March</a>
        </li>
        <li>
          <a onClick={(event) => handleClick()}>April</a>
        </li>
        <li>
          <a onClick={(event) => handleClick()}>May</a>
        </li>
        <li>
          <a onClick={(event) => handleClick()}>June</a>
        </li>
        <li>
          <a onClick={(event) => handleClick()}>July</a>
        </li>
        <li>
          <a onClick={(event) => handleClick()}>August</a>
        </li>
        <li>
          <a onClick={(event) => handleClick()}>September</a>
        </li>
        <li>
          <a onClick={(event) => handleClick()}>October</a>
        </li>
        <li>
          <a onClick={(event) => handleClick()}>November</a>
        </li>
        <li>
          <a onClick={(event) => handleClick()}>December</a>
        </li>
      </div>
    </section>
  );
};

export default SideBar;
