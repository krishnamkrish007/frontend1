import React from 'react'
import '../styles/card.css';
import carimg from '../assets/car_1.png';


export const CardModel = () =>{

    return(
        <>
        <div className="card">
            <img src={carimg} alt="Avatar" height="150" width="180"/>
            <div className="container">
                <h4><b>John Doe</b></h4> 
                 <p>Architect</p> 
                 <button>Explore</button>
             </div>
        </div>
        </>
    )
}