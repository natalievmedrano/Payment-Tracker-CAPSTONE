import React, { useState } from 'react';
import './SideBar.css'
import { Link } from 'react-router-dom';
import PaymentCard from '../PaymentCard/PaymentCard';


const SideBar = ({payments}) => {
    let mapped

    //console.log(activePaymentId)
    return ( <section className='sidebar'>


    <h2>PAYMENT HISTORY</h2>


    
    <div >
        <li><a href="/2021">2021</a></li>
        <li><a href="/2022">2022</a></li>
        <li><a href="/2023">2023</a></li>
        <li><a href="/january">January</a></li>
        <li><a href="">February</a></li>
        <li><a href="">March</a></li>
        <li><a href="">April</a></li>
        <li><a href="">May</a></li>
        <li><a href="">June</a></li>
        <li><a href="">July</a></li>
        <li><a href="">August</a></li>
        <li><a href="">September</a></li>
        <li><a href="">October</a></li>
        <li><a href="">November</a></li>
        <li><a href="">December</a></li>
      
    
    </div>
    
 
    </section> );
}

export default SideBar;