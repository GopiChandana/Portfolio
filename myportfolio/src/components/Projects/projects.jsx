import React from "react";


import sample from "../../images/projects/googlemeet.mp4"
import sample1 from "../../images/projects/product-hunt-alpha.mp4"
import sample2 from "../../images/projects/dineout.mp4"
import "./projects.styles.css";

const TimeLine = () => {
  return (
    <>
    <h1 className="pt-3 text-center font-details pb-3">PROJECTS</h1>
    <div className="container1" id="projects">
       
    <div className="timeline">
      <ul>
        
        <li>
        <div className="timeline-content">
            
            <h1>PRODUCT HUNT CLONE</h1>
            <div style={{width:"fit-content"}}><video className='videoTag' autoPlay loop muted controls >
               <source src={sample1} type='video/mp4' />
       </video></div>
            <p>Product Hunt Alpha is a product research website where users can research products also add their own products.This was a collaborative one built as a construct week project along with  three more developers.</p>
          </div>
        </li>
        <li>
        <div className="timeline-content">
          
            <h1>DINEOUT CLONE</h1>
            <div style={{width:"fit-content"}}><video className='videoTag' autoPlay loop muted controls >
               <source src={sample2} type='video/mp4' />
       </video></div>
            <p>Dineout is a restaurant table reservation application  allowing diners to reserve a guaranteed table at the top restaurants in the city.This was a collaborative one built as a construct week project along with two more developers.</p>
          </div>
        </li>
        
      </ul>
    </div>
  </div> 
    </>
  );
};

export default TimeLine;