import React from "react";
import "./Header.css";
import logo from "../assets/medical.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          < div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Docters
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
            </ul>
            <li>
              <h4 className="contact">
          
               <span className="icon-wrapper">
                <FaPhoneAlt size={30} color="blue" /> </span> 1234567890
              </h4>
            </li>
            

        <div className="ambulance"><FaAmbulance size={50}/></div>
       
             
          
        
        </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
