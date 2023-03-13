import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import './HomePage.css'
import { Container } from "react-dom";

import axios from "axios";
import SideBar from "../../components/SideBar/SideBar";
import PaymentCard from "../../components/PaymentCard/PaymentCard";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [payments, setPayments] = useState([]);
  const[months, setMonths] = useState([]);

  useEffect(() => {
    getAllPayments();
  }, []);

  async function getAllPayments(payment_id) {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/payments/all/");
      console.log(response.data)
      setPayments(response.data);
    } catch (exception) {
      console.log(`ERROR in getAllPayments EXCEPTION: ${exception}`);
    }
  }

  async function addPayment(newPayment){
  
      let response = await axios.post("http://127.0.0.1:8000/api/payments/", newPayment);
      if (response.status === 201) {
        await getAllPayments();
      }
    
      console.log(response.data)
      
  
  }

  async function updatePayment(){
    let response = await axios.put(`http://127.0.0.1:8000/api/payments/3/`)
    if (response.status === 200) {
      await getAllPayments();
    }
  }

  async function deletePayment(){
    let response = await axios.delete(`http://127.0.0.1:8000/api/payments/3/`)
    if(response.status === 204){
      await getAllPayments();
    }
  }
  return (
    <div className="container">
     <SideBar/>
      <PaymentCard/>
    </div>
  );
};

export default HomePage;
