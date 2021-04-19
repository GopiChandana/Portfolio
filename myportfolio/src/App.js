import React from "react";
import './App.css';
import MyNavbar from "./components/Navbar/navbar"
import MyCarousel from "./components/Carousel/carousel" 
import Title from "./components/Title/title"
import About from "./pages/About/about";
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";

const App=() => {
  return (
    <div >
     <MyNavbar/>
     <Title/>
     <MyCarousel/>
     <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./images/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
            <Fade duration={500}>
                <About />
                </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
