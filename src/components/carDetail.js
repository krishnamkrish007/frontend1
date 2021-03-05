import React from 'react'
import carimg from '../assets/car_1.png';
import '../styles/carddetail.css';
import StripeCheckout from 'react-stripe-checkout'
export const CarDetail = () => {
    return(
        <>
            <div className="grid-container">
                <div className="left">
                    <div><img src={ carimg}  alt="Avatar" height="300" width="400"/></div><br/>
                    <div>Range:100miles</div>
                    <br/>
                    <div>Charging</div>
                </div>
                <div className="right">
                    <div>Car name</div><br/>

                    <div>Car speed</div><br/>
                    <button className="detail-button">Book now</button>
                   
                </div>
            </div>
        </>
    )
}