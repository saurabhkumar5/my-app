import React from 'react'
import './Card.css'
function Card({name,rating,para,img}) {
  return (
   
    <div className="card">
      
      <img  src={img} />
      <h2>{name}</h2>
      <h3>{rating} stars</h3>
      <p>{para}</p>
    
     
    </div>
  )
}

export default Card