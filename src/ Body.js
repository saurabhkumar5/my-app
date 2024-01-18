import React from "react";
import './Body.css'
import Card from './Card'
function Body() {
  return (
    <div className="cards">
        <Card name={"burger"} rating={"4.5"} para={"sector6"} img={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"}/>
        <Card name={"samosa"} rating={"4"} para={"sector61"} img={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bngudbgsxwdx6wimjzfw"}/>
        <Card name={"rasgulla"} rating={"4.2"} para={"sector16"} img={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ujcki60xhet1ghlb4rga"}/>
        <Card name={"rasmalayi"} rating={"5"} para={"sector4"} img={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a056e32315368f2cc51eb46737433d68"}/>
        <Card name={"banarasi paan"} rating={"4.3"} para={"sector23"} img={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bbuwmp35jmzxgpwyfq7b"}/>
        <Card name={"baati chokha"} rating={"4.9"} para={"sector56"}/>
        <Card name={"plates"} rating={"5"} para={"sector41"}/>
    </div>
  );
}

export default Body;
