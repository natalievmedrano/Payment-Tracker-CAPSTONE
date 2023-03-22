import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import './HomePage.css'
import { Link } from "react-router-dom";

import axios from "axios";
import SideBar from "../../components/SideBar/SideBar";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
import PaymentsTable from "../../components/PayementsTable/PaymentsTable";
import SideBarPage from "../SideBar/SideBarPage";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [payments, setPayments] = useState([]);

 

  useEffect(()=> {
    const fetchPayments = async() => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/payments/all/", {
          headers: {
            Authorization: "Bearer" + token,
          },
        });
        console.log(response.data)
        setPayments(response.data)
      } catch (error) {
        console.log(error.message)
      }
    };
    fetchPayments();
  },[token]);


  return (
    <div className="flex">
     <SideBar payments={payments}/>

    <div className="container">
      <h1> Hello {user.username}!</h1>
      <Link to= "/addpayment"> Add Payment</Link>
      <PaymentsTable payments={payments}/>
    </div>
    </div>
  );
};

export default HomePage;
