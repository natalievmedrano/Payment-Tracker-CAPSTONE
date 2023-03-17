import React, { useState } from "react";
import axios from "axios";

import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import { useNavigate } from "react-router-dom";

let initialInfo = null;

const UpdatepaymentPage = () => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [formData, handleInputChange, handleSubmit] = useCustomForm();

    async function updatePayment(){
        try {
            let response = await axios.put('http://127.0.0.1:8000/api/payments/3/', formData,
            {
                headers:{
                    Authorization: "Bearer" + token
                },
            })
            navigate("/");
        } catch (error) {
            console.log(error.message)
            
        }
    }


    return (<div>
        <form onSubmit={handleSubmit}>
            label

        </form>
    </div>);
};

export default UpdatepaymentPage;
