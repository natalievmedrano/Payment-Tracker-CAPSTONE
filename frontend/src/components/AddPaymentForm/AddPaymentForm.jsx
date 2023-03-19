import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const AddPaymentForm = ({paymentId}) => {
  const { config } = useAuth();
  const [payment, setPayment] = useState("");

  const createPayment = async (newPayment) => {
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/payments/`,
        newPayment,
        config
      );
    } catch (error) {
        console.log(error)
    }
  };
function handleSubmit(event){
    event.preventDefault();
    const newPayment = {
        payment_id: paymentId, payment
    }
}

  return(
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text"
            value={null} 
            onChange={(event)=> setPayment(event.target.value)}/>
          <button type="submit">ADD PAYMENT</button>  
        </div>

    </form>
  )

};

export default AddPaymentForm;
