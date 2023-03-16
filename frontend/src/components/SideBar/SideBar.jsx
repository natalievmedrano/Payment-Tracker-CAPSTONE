import React, { useState } from 'react';
import AddPaymentForm from '../AddPaymentForm/AddPaymentForm';
import './SideBar.css'
import { Link } from 'react-router-dom';


const SideBar = ({payments}) => {
    const [months, setMonths]= useState([])

    let filteredPaymentsByMonth = payments.filter(payment => payment.month).map(filteredPaymentsByMonth => (<li>{filteredPaymentsByMonth.month}</li>))

    return ( <div className='sideBar'>


    <p>{filteredPaymentsByMonth}</p>
    
    </div> );
}

export default SideBar;