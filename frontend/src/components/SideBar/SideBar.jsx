import React, { useState } from 'react';
import AddPaymentForm from '../AddPaymentForm/AddPaymentForm';
import './SideBar.css'
import { Link } from 'react-router-dom';


const SideBar = ({payments}) => {



    return ( <div className='sideBar'>


    <h3>PAYMENT HISTORY</h3>
    
    <p><a href="#">January</a></p>
    <p><a href='#'>February</a></p>
    <p><a href='#'>March</a></p>
    <p><a href='#'>April</a></p>
    <p><a href='#'>May</a></p>
    <p><a href='#'>June</a></p>
    <p><a href='#'>July</a></p>
    <p><a href='#'>August</a></p>
    <p><a href='#'>September</a></p>
    <p><a href='#'>October</a></p>
    <p><a href='#'>November</a></p>
    <p><a href='#'>December</a></p>
    
 
    </div> );
}

export default SideBar;