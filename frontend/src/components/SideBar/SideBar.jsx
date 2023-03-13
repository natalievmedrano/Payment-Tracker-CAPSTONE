import React, { useState } from 'react';
import AddPaymentForm from '../AddPaymentForm/AddPaymentForm';
import './SideBar.css'
import { Link } from 'react-router-dom';


const SideBar = ({payments}) => {
    return ( <div className='sideBar'>



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

export default SideBar;