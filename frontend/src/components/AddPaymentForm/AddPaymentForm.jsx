// import React, { useState } from "react";
// import axios from "axios";


// import useAuth from "../../hooks/useAuth";
// import useCustomForm from "../../hooks/useCustomForm";
// import { useNavigate} from "react-router-dom";

// let intialPaymentInfo = {
//   payment_name: "",
//   payment_amount: "",
//   payment_month: "",
//   payment_year: "",
//   payment_DueDate: "",
// };


// const AddPaymentForm = () => {
//   const [user, token] = useAuth();
//   const navigate = useNavigate()
//   const [formData, handleChange, handleSubmit] = useCustomForm(intialPaymentInfo, addPayment);

//   async function addPayment() {
//     try {
//      let response= await axios.post("http://127.0.0.1:8000/api/payments/", formData, {
//       headers: {
//           Authorization: 'Bearer' + token
//       }
//      })
//      navigate("/")
//     } catch (error) {
//       console.log(error.message)
      
//     }
    

//   return (
//     <div className="container">
//       <form className="payementForm" onSubmit={handleSubmit}>
//         <label>
//           Payment Name:{" "}
//           <input
//             type="text"
//             name="Payment Name"
//             value={formData.payment_name}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Payment Amount :{" "}
//           <input
//             type="text"
//             name="Payment Amount"
//             value={formData.payment_amount}
//             onChange={handleChange}
//           />
//         </label>
//         <label >
//             Payment Month: {" "}
//             <input type="text" name="Payment Month" value={formData.payment_month} /> 
//         </label>
//         <label>
//             Payment Year: {" "}
//             <input type="text" name="Payment Year" value={formData.payment_year} />
//         </label>
//         <label>
//             Payment Due Date: {" "}
//             <input type="text" name="Payment Due Date" value={formData.payment_DueDate} />
//         </label>
//       </form>
//     </div>
//   );
// };
// };

// export default AddPaymentForm;
