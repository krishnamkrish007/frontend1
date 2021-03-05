import React from 'react'
import '../styles/navbar.css'
import logo from '../assets/logo.png'
export const Navabar = () =>{
    return (
        <>
       <header className="navbar" role="banner">
         <div id="item1"> <img src={logo} alt="ok"/></div>
         <div>Electric Cars</div>
         <div>Suitability Tool</div> 
         <div>My Booking</div>
         <div>Sign out</div>
       </header>
        </>
    )
}