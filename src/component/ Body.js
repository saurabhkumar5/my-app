import React, { useEffect, useState } from "react";
import './Body.css'
import Card from './Card'
 function Body() {

  const [data, setData] = useState([])
  // const cardsData = [
  //   { name: "burger", rating: "4.5", para: "sector6", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9" },
  //   { name: "jalebi", rating: "4.5", para: "sector6", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9" },
  //   { name: "gulabjamun", rating: "4.5", para: "sector6", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9" },
  //   { name: "petha", rating: "4.5", para: "sector6", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9" },
  //   { name: "aalu", rating: "4.5", para: "sector6", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9" },
  //   { name: "petha", rating: "4.5", para: "sector6", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9" },
  //   { name: "laddu", rating: "4.5", para: "sector6", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9" },
  //   { name: "halva", rating: "4.5", para: "sector6", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9" },
  //   { name: "murga", rating: "4.5", para: "sector6", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9" },
    
  //   // Add other card data here
  // ];
  
              // const value = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
              
              //         const json = value.json();
              //         console.log(json)

            useEffect(()=>{
                     getRest()
            },[])

         async  function getRest(){
                   
         const dataa  = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667')
         const json  = await dataa.json()
         console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         setData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
           }
          

  return (
    <>
     

   
      <div className="cards">
      {
        data.map((card,index)=>{
          return <Card key={card.info.id} resList={card} />
        })
      }
      </div>
    </>
  );
}

export default Body;









































   {/* <h1>{data}</h1>
    <form>
      search<input 
      type="search" 
      placeholder="enter your item" 
      value={data} 
      onChange={(e)=>setData(e.target.value)}/>
    </form> */}
     


 {/* <div className="cards">
          <Card name={"burger"} rating={"4.5"} para={"sector6"} img={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"}/>
          <Card name={"samosa"} rating={"4"} para={"sector61"} img={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bngudbgsxwdx6wimjzfw"}/>
          <Card name={"rasgulla"} rating={"4.2"} para={"sector16"} img={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ujcki60xhet1ghlb4rga"}/>
          <Card name={"rasmalayi"} rating={"5"} para={"sector4"} img={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a056e32315368f2cc51eb46737433d68"}/>
          <Card name={"banarasi paan"} rating={"4.3"} para={"sector23"} img={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bbuwmp35jmzxgpwyfq7b"}/>
          <Card name={"baati chokha"} rating={"4.9"} para={"sector56"}/>
          <Card name={"plates"} rating={"5"} para={"sector41"}/>
      </div> */}