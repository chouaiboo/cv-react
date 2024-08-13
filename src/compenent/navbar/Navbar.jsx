import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import logo from '../Assiete/image/cv.jpg';
import './Navbar.css';

const data = [
  { label: "Accueil", to: 'home', icon: <FaHome/> },
  { label: "À propos", to: 'about', icon: <FaUser/> },
  { label: "Portfolio", to: 'portfolio', icon: <FaBriefcase/> },
  { label: "Contact", to: 'contact', icon: <FaEnvelope/> }
];

const Navbar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // 'smooth' au lieu de 'mooth'
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="title-description">Chouaib Elhaddad</h1>
        </div>
        <nav className="nav-items">
          <ul className='nav-list'>
            {data.map((item, index) => (
              <li key={index} className='nav-item'>
                <a
                  href={`#${item.to}`}
                  className='nav-link'
                  onClick={(e) => handleScroll(e, item.to)}
                >
                  {item.icon}
                  <span className="nav-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;