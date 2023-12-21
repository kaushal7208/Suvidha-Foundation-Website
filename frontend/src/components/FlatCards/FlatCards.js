import React from 'react'
import './FlatCards.css';
const one = require("./1.png");
const two = require("./2.png")
const three = require("./3.png")
const four = require("./4.png")
const five = require("./5.png")
const six = require("./6.png")
function FlatCards() {
  return (
    
    <div>
      <h3>What We Do?</h3>
      <h1>Causes for a Sustainable Future</h1>
       <div className="card-container">
        
    <div className="card">
      <img src={two}></img>

      <div className="card-content">
        <h3>Healthy Food</h3>
        <p>By focusing on healthy food donations,
          our NGO aims to improve the well-being and
          quality of life for individuals and 
          communities in need.</p>
      </div>
    </div>


    {/* card 2 */}
    <div className="card">
    <img src={one}></img>
      <div className="card-content">
        <h3>Primary Education</h3>
        <p>By collaborating with local communities and 
          educators, we aim to empower children 
          with the knowledge and skills they need for a brighter future.</p>
      </div>
    </div>



{/* card 3 */}
    <div className="card">
    <img src={three}></img>
      <div className="card-content">
        <h3>Tree Plantation</h3>
        <p>Through community engagement and active participation, we
           successfully planted thousands of trees, fostering
           a greener and healthier ecosystem for future generations.</p>
      </div>
    </div>

    <div className="card">
    <img src={four}></img>
      <div className="card-content">
        <h3>Health Care</h3>
        <p>We believe that access to healthcare is a 
          fundamental right, and we work tirelessly to
           ensure that healthcare services are accessible, affordable, 
          and of high quality for those in need.</p>
      </div>
    </div>



    <div className="card">
    <img src={five}></img>
      <div className="card-content">
        <h3>Social Care</h3>
        <p>Our programs encompass a range of support 
          services, including counseling, vocational training, and advocacy, 
          with the goal of empowering individuals</p>
      </div>
    </div>



    <div className="card">
    <img src={six}></img>
      <div className="card-content">
        <h3>Social Awarness</h3>
        <p>We provide resources, conduct awareness campaigns, 
          and facilitate access to hygiene facilities, aiming to create a healthier 
          environment and prevent the spread of diseases.</p>
      </div>
    </div>




  </div>

    </div>
    
  )
}

export default FlatCards
