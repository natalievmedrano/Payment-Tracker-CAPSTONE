import React from "react";
import axios from "axios";
import "./AddPaymentPage.css";

import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import { useNavigate } from "react-router-dom";

let initialValues = {
  payment_type: "",
  payment_amount: "",
  month: "",
  year: "",
  payment_due_date: "",
};

const AddPaymentPage = () => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    initialValues,
    addPayment
  );

  async function addPayment() {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/payments/",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          }
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="container">
      <form className="payementForm" onSubmit={handleSubmit}>
        <h2>Enter Payment Information here!</h2>
        <br />
        <tr>
        <input
          placeholder="Enter Payment Name"
          type="text"
          name="payment_type"
          value={formData.payment_type}
          onChange={handleInputChange}
          />
          </tr>
          <tr>
            <br/>
            
        <input
          placeholder="Enter Payment Amount"
          type="text"
          name="payment_amount"
          value={formData.payment_amount}
          onChange={handleInputChange}
        />
        </tr>
        <br/>
        <tr>
        <input
          placeholder="Enter Payment Month"
          type="text"
          name="month"
          value={formData.month}
          onChange={handleInputChange}
        />
        </tr>
        <br />
        <tr>
        <input
          placeholder="Enter Payment Year"
          type="text"
          name="year"
          value={formData.year}
          onChange={handleInputChange}
        />
        </tr>
        <br />
        <tr>
        <input
          placeholder="Enter Payment Due Date"
          type="text"
          name="payment_due_date"
          value={formData.payment_due_date}
          onChange={handleInputChange}
        />
        </tr>
    
        <button type="submit" onSubmit={handleSubmit}>Add Payment</button>
      
      </form>
    </div>
  );
};

export default AddPaymentPage;
