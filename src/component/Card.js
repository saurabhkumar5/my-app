import React from 'react'
import './Card.css'


function Card(props) {
  const CDN_URL="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  const {resList} = props;
  const {  cloudinaryImageId, cuisines, totalRatings, deliveryTime, name, avgRating } = resList?.info;


  
  return (
   
    <div className="card">
     <img 
            className="resImg"
            alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <p>{cuisines}</p>
            <p>{totalRatings} STARS</p>
            <p>Time to deliver: {avgRating} </p>
    
             
     
    </div>
  )
}

export default Card