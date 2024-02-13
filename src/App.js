// import "./App.css";
// import Header from './component/header/Header.js'
// import Body from './component/ Body.js'
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import About from "./component/header/About.js";
// import Contact from "./component/header/Contact.js";
// import Cart from "./component/header/Cart.js";
// import Footer from "./component/header/Footer.js";

// // import Hooks from "./Hooks";
// function App() {
//   return (
//    <div>
//     {/* <Header/>
//       <Routes >
//          <Route path="/" element={<Body/>}/>
//          <Route path="/about" element={<About/>}/>
//          <Route path="/contact" element={<Contact/>}/>
//       </Routes> */}
    
//     <BrowserRouter>
//         <Header/>
        
//         <Routes>
//           <Route path="/" element={<Body/>}/>
//           <Route path="/about" element={<About/>}/> 
//           <Route path="/Contact" element={<Contact/>}/>
//           <Route path="/cart" element={<Cart/>}/>
//         </Routes>
//         <Footer/>

//     </BrowserRouter>
    
    
//    </div>
    
//   );
// }

// export default App;



import React, { createContext } from 'react'
// import CM from './component/CM'
import Janta from './component/Janta'
const data = createContext()
const dataa = createContext()

function App() {
  
  const paisa = "100ruppes"
  const ghotala = 100;
  return (
    
    <data.Provider value={paisa} ed={ghotala}>
       <Janta/>
    </data.Provider>
    
    
  )
}

export default App;
export {data,dataa};
