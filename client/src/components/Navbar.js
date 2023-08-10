import '../styles/Navbar.css';
import React from 'react';
import Logo from './Logo';
import ToggleButton from './ToggleButton'
import NavbarLink from './NavbarLink';
import Button from './Button'
import {useState } from "react"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

/**
 * @function Navbar
 * @desc Barra de navegación
 * @category Components
 * @returns {JSX.Element} - Elemento JSX de la barra de navegación
 */
const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  
  const navigate = useNavigate()

  const handleContactButtonClick = () => {
    let contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }else{
      navigate('/')
      setTimeout(() => {
        contactSection = document.getElementById('Contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  return (
    <nav className="navigation">
      <a href="/" alt="Inicio">
        <Logo size="medium" />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {!isNavExpanded ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faXmark} />
        )}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
            <NavbarLink link="/AboutUs" text="About us" />
            <NavbarLink link="/Technology" text="Technology" />
            <NavbarLink link="/HowItWorks" text="How it works" />
            <NavbarLink link="/News" text="News" />
          <div className="navbarButtons">
            <Button text="Contact us" estilo="Contact" clickFunction={handleContactButtonClick}/>
            <ToggleButton />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
