import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../images/profile/profile.png"
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-4 mr-2 ml-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} rounded fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className="justify-content-center p-3 my-details rounded">
               
               I am an aspiring Full Stack Web Developer proficient in JavaScript Technologies across the MERN Stack(MongoDB, Express, React, and Node.js).
                <br/><br/>Hands-on Experience building complete web applications with backend API systems.
                <br />
                <br/>
                I merge a passion for usability and user experience with technical knowledge to create cool digital experiences.
                <br /><br/>Loves the Combination of creative and Logical Problem solving skills I get to use when writing code. And I love how there's always more to learn! 
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                    {/* https://drive.google.com/file/d/1Ibpfd8I3fiBGPkt858jject5TbenCASv/view?usp=sharing
                      
                      */}
                  <div>
                    <a href="https://drive.google.com/file/d/1Ibpfd8I3fiBGPkt858jject5TbenCASv/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Button className="m-2" variant="outline-success">
                       Resume
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;