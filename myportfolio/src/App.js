import React from "react";
import './App.css';
import MyNavbar from "./components/Navbar/navbar"
import MyCarousel from "./components/Carousel/carousel" 
import Title from "./components/Title/title"
const App=() => {
  return (
    <div >
     <MyNavbar/>
     <Title/>
     <MyCarousel/>
    </div>
  );
}

export default App;
