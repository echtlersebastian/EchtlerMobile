import React from 'react'
import Image from 'react-bootstrap/Image'
import { Row, Col, Grid, Container } from 'react-bootstrap';
import '../assets/css/bootstrap.min.css';

export default ({portfolioLinks}) => {
return(
  <div>

    <header className="masthead">
          
          
          
    
    <div className= "logo1">
          </div>
      
            <div className="intro-text">
         
            {/*<div className="intro-heading text-uppercase">Mit dem Wohnmobil auf neuen Wegen!</div>*/}
            <div className="intro-heading text-uppercase">Wir bauen um und sind bald für Sie da!</div>
            <div className="intro-lead-in" href="tel:">Rufen sie doch an oder schreiben Sie eine E-Mail!</div>

            <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="tel:+49083419969353">
              <i className="fa fa-phone"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="mailto:info@Echtler-Mobile.de?Subject=Echtler-Mobile Kontakt">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
            </div>
           
    </header>
  </div>



)
}