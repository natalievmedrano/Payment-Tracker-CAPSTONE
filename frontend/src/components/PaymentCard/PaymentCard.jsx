import React, { useState } from "react";
import './PaymentCard.css'

const PaymentCard = ({payment,activePaymentId, setActivePaymentId}) => {
  function handleClick(){
    setActivePaymentId(payment.id)
}

let cardClass= ''
if(payment.id === activePaymentId) cardClass= 'active';

 return(<div className={cardClass} onClick={handleClick}>
  <h4>{payment.month}</h4>
  <p>payment type</p>
 </div>)
};

export default PaymentCard;
