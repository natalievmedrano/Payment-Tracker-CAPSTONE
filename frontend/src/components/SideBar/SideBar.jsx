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
          <a href="/january">2021</a>
        </li>
        <li>
          <button onClick={(event) => handleClick()}>2022</button>
        </li>
        <li>
          <button onClick={(event) => handleClick()}>2023</button>
        </li>
        <li>
          <button onClick={(event) => handleClick()}>January</button>
        </li>
        <li>
          <button onClick={(event) => handleClick()}>February</button>
        </li>
        <li>
          <button onClick={(event) => handleClick()}>March</button>
        </li>
        <li>
          <button onClick={(event) => handleClick()}>April</button>
        </li>
        <li>
          <button onClick={(event) => handleClick()}>May</button>
        </li>
        <li>
          <button onClick={(event) => handleClick()}>June</button>
        </li>
        <li>
          <button onClick={(event) => handleClick()}>July</button>
        </li>
        <li>
          <button onClick={(event) => handleClick()}>August</button>
        </li>
        <li>
          <button onClick={(event) => handleClick()}>September</button>
        </li>
        <li>
          <button onClick={(event) => handleClick()}>October</button>
        </li>
        <li>
          <button onClick={(event) => handleClick()}>November</button>
        </li>
        <li>
          <button onClick={(event) => handleClick()}>December</button>
        </li>
      </div>
    </section>
  );
};

export default SideBar;
