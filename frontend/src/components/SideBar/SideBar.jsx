import React, { useState, useEffect } from "react";
import "./SideBar.css";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Table } from "react-bootstrap";
import PaymentCard from "../PaymentCard/PaymentCard";

const SideBar = ({}) => {
  const [user, token] = useAuth();
  const [payments, setNewPayments] = useState([]);
  const [sideBar, setSideBar] = useState([payments]);

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
        //console.log(response.data);
        setNewPayments(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPayments();
  }, [token]);

  const mappedPayments = payments.map((payment) => (
    <div>
     return

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
            <td>{payment.verify_payment}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ));



  const handleClick = () => {
    const sidebarPayments = payments.map((payment)=>{
      return <div>{payment.month}</div>
    });
    console.log(sideBar);
    setSideBar(sidebarPayments);
  };
  return (
    <section className="sidebar">
      <h2>PAYMENT HISTORY</h2>

      <div onClick={handleClick}>
        <li>
          <a href="/history">2021</a>
        </li>
        <li>
          <a href="/history">2022</a>
        </li>
        <li>
          <a href="/history">2023</a>
        </li>
        <li>
          <a href="/history">2023</a>
        </li>
        <li>
          <a href="/history">January</a>
        </li>
        <li>
          <a href="/history">February</a>
        </li>
        <li>
          <a href="/history">March</a>
        </li>
        <li>
          <a href="/history">April</a>
        </li>
        <li>
          <a href="/history">May</a>
        </li>
        <li>
          <a href="/history">June</a>
        </li>
        <li>
          <a href="/history">July</a>
        </li>
        <li>
          <a href="/history">August</a>
        </li>
        <li>
          <a href="/history">September</a>
        </li>
        <li>
          <a href="/history">October</a>
        </li>
        <li>
          <a href="/history">November</a>
        </li>
        <li>
          <a href="/history">December</a>
        </li>
       

      </div>
    </section>
  );
};

export default SideBar;
