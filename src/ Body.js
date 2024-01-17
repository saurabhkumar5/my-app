import React from "react";
import './Body.css'
import Card from './Card'
function Body() {
  return (
    <div className="cards">
        <Card name={"burger"} rating={"4.5"} para={"sector6"}/>
        <Card name={"samosa"} rating={"4"} para={"sector61"}/>
        <Card name={"rasgulla"} rating={"4.2"} para={"sector16"}/>
        <Card name={"rasmalayi"} rating={"5"} para={"sector4"}/>
        <Card name={"banarasi paan"} rating={"4.3"} para={"sector23"}/>
        <Card name={"baati chokha"} rating={"4.9"} para={"sector56"}/>
        <Card name={"plates"} rating={"5"} para={"sector41"}/>
    </div>
  );
}

export default Body;
