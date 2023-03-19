import React, { useState } from 'react';
import './SideBar.css'
import { Link } from 'react-router-dom';
import PaymentCard from '../PaymentCard/PaymentCard';


const SideBar = ({payments}) => {
    const[activePaymentId, setActivePaymentId] = useState(0)
   const sidebarMonths= payments.map((payment)=> <PaymentCard payment={payment} setActivePaymentId={setActivePaymentId} activePaymentId={activePaymentId}/>)


    //console.log(activePaymentId)
    return ( <section className='sidebar'>


    <h2>PAYMENT HISTORY</h2>
    <h6>choose a month to view all past payments</h6>
    
    <div>
        <p>January</p>
        <p>February</p>
        <p>March</p>
        <p>April</p>
        <p>May</p>
        <p>June</p>
        <p>July</p>
        <p>August</p>
        <p>September</p>
        <p>October</p>
        <p>November</p>
        <p>December</p>
    </div>
    
 
    </section> );
}

export default SideBar;