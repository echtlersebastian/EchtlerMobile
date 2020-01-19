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

            {/*<a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="mailto:info@Echtler-Mobile.de?Subject=Echtler-Mobile Kontakt"><span class="fa fa-envelope"></span></a>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="tel:+49083419969353"><span class="fa fa-phone"></span></a>
            <br></br>
            
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-envelope fa-stack-1x"></i>
            </span>
            <br></br>
*/}
            <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="tel:+4983419969535">
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