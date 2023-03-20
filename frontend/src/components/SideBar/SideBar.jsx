import React, { useState } from 'react';
import './SideBar.css'
import { Link } from 'react-router-dom';
import PaymentCard from '../PaymentCard/PaymentCard';


const SideBar = ({payments}) => {
    let filteredbyYear = payments.filter(payment => payment.year >= 2021)

    //console.log(activePaymentId)
    return ( <section className='sidebar'>


    <h2>PAYMENT HISTORY</h2>

    
    <div onClick={filteredbyYear}>
        <li><a href="/2021">2021</a></li>
        <li><a href="/2022">2022</a></li>
        <li><a href="/2023">2023</a></li>
      
    
    </div>
    
 
    </section> );
}

export default SideBar;