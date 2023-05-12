import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logoImg from '../../assets/logo KJD.svg';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logoImg} alt="Logo" />
        </div>
        <div className="navbar-links_container">
        <p><a href="#home">Services</a></p>
          <p><a href="#industries">Industries</a></p>
          <p><a href="#cases">Cases</a></p>
          <p><a href="#footer">Contact</a></p>
        </div>
      </div>
      <div className="navbar-sign">
        <button type="button">Let's talk</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
          <p><a href="#home">Services</a></p>
          <p><a href="#industries">Industries</a></p>
          <p><a href="#cases">Cases</a></p>
          <p><a href="#footer">Contact</a></p>
          </div>
          <div className="navbar-menu_container-links-sign">
            <button type="button">Let's talk</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;



