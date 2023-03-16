import React from "react";
import axios from "axios";

import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import { useNavigate } from "react-router-dom";

let intialPaymentInfo = {
  payment_name: "",
  payment_amount: "",
  payment_month: "",
  payment_year: "",
  payment_DueDate: "",
};

const AddPaymentPage = () => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    intialPaymentInfo,
    addPayment
  );

  async function addPayment() {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/payments/",
        formData,
        {
          headers: {
            Authorization: "Bearer" + token,
          },
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
        <label>
          Payment Name:{" "}
          <input
            type="text"
            name="Payment Name"
            value={formData.payment_name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Payment Amount :{" "}
          <input
            type="text"
            name="Payment Amount"
            value={formData.payment_amount}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Payment Month:{" "}
          <input
            type="text"
            name="Payment Month"
            value={formData.payment_month}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Payment Year:{" "}
          <input
            type="text"
            name="Payment Year"
            value={formData.payment_year}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Payment Due Date:{" "}
          <input
            type="text"
            name="Payment Due Date"
            value={formData.payment_DueDate}
            onChange={handleInputChange}
          />
        </label>
        <button>Add Payment</button>
      </form>
    </div>
  );
};

export default AddPaymentPage;
