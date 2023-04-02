import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

import './January.css'



const January = () => {
    const[user,token]= useAuth();
    const[newPayments,setNewPayments] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchPayments = async () => {
          try {
            let response = await axios.get(
              "http://127.0.0.1:8000/api/payments/all/",
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
            );
            //console.log(response.data);
            setNewPayments(response.data);
            navigate("/january")
          } catch (error) {
            console.log(error.message);
          }
        };
        fetchPayments();
      }, [token]);



      const mappedJanuary = newPayments.map((payment) => (
        <div id="jan-table" key={payment.id}>
            <table>
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
            </table>
        </div>
      ))

      const filteredJanuary = newPayments.filter(payment => payment.month.includes('january' || 'January'))
    return ( <div> {mappedJanuary}</div> );
}
 
export default January;


 
