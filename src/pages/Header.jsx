import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
// import { NavLink } from "react-scroll";
import { NavLink } from "react-router-dom";

import "./Header.css";
const Header = () => {
  const [show, setShow] = useState(false);
  const newShow = show;
  const onClickHandler = () => {
    setShow((show) => !show);
  };

  const closeShow = () => {
    setShow(false);
  };
  return (
    <div className="containerr">
      <div className="nav-bar">
        <nav>
          <div className="logo-p">
            <a href="/">Styleplus</a>
          </div>
          <div className={show ? "btnn active" :"btnn"}>
            <button>Get Started</button>
            </div>
          
          <div className="logo" onClick={onClickHandler}>
            {show ? (
              <FaTimes className="icon" size={30} />
            ) : (
              <RiMenu3Line className="icon" size={30}/>
            )}
          </div>

          <div className={show ? "list-item active" : "list-item"}>
            <ul>
              <li>
                <NavLink style={({isActive}) => ({
                  color : isActive ? "rgba(255, 216, 3, 1)" : "rgba(254, 246, 228, 1)"
                })}
                  to="about"
                
                  onClick={closeShow}
                >
                  About
                </NavLink>
              </li>
          
              <li>
              <NavLink  to="services" style={({isActive}) => ({
                  color : isActive ? "rgba(255, 216, 3, 1)" : "rgba(254, 246, 228, 1)"
                })}
                
                onClick={closeShow}>
                   Services
              </NavLink>
              </li>
              <li>
                <NavLink to="career" style={({isActive}) => ({
                  color : isActive ? "rgba(255, 216, 3, 1)" : "rgba(254, 246, 228, 1)"
                })}
         
                onClick={closeShow}>Careers</NavLink>
                </li>
              <li>
              <NavLink to="contact" style={({isActive}) => ({
                  color : isActive ? "rgba(255, 216, 3, 1)" : "rgba(254, 246, 228, 1)"
                })}
             
                onClick={closeShow}>Contact</NavLink>
                </li>
                
            </ul>
            <div className="btn">
            <button>Get Started</button>
          </div>
          </div>
         
        </nav>
      </div>
    </div>
  );
};

export default Header;
