import React from 'react';
import webDevImage from '../../assets/Web Dev Icon.svg';
import UxImage from '../../assets/UX Icon.svg';
import MobileAppImage from '../../assets/App Dev Icon.svg';
import BlockChainImage from '../../assets/block chain icon.svg';
import './Offers.css';


const Offers = () => (
  <div className="offers section-padding" id="offers">

    <h3 className="heading-with-border border1">What we do</h3>
    <h1>We offer a complete range of bespoke design and<br/> development services to help you turn your ideas into<br/> digital masterpieces</h1>
    <div className="row">
      <div className="column">
        <img src={webDevImage} alt="Web Development" />
        <h4>Web Development</h4>
        <p>We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.</p>
      </div>
      <div className="column">
        <img src={UxImage} alt="User Experience & Design" />
        <h4>User Experience & Design</h4>
        <p>Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.</p>
      </div>
      <div className="column">
        <img src={MobileAppImage} alt="Mobile App Development" />
        <h4>Mobile App Development</h4>
        <p>Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.</p>
      </div>
      <div className="column">
        <img src={BlockChainImage} alt="Blockchain Solutions" />
        <h4>Blockchain Solutions</h4>
        <p>We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.</p>
      </div>
    </div>
  </div>
);




export default Offers;
