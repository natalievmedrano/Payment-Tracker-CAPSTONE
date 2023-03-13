import React, { useState } from 'react';
import AddPaymentForm from '../AddPaymentForm/AddPaymentForm';
import './SideBar.css'


const SideBar = ({}) => {
    return ( <div className='sideBar'>
        <button>ADD PAYMENT</button>
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
    </div> );
}
 <AddPaymentForm/>
export default SideBar;