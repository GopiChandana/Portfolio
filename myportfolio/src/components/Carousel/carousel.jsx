import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.styles.css";
import Slide1 from "../../images/carousel/slide1.webp";
import Slide2 from "../../images/carousel/slide2.webp";
import Slide3 from "../../images/carousel/slide3.webp";
import ScrollDown from "../Scroll-down/scrolldown";
const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 slider-size" src={Slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 slider-size" src={Slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 slider-size" src={Slide3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousel;
