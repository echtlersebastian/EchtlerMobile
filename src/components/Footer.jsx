import React from 'react'
import { Row, Col } from "react-bootstrap"
import Datenschutz from "../assets/img/Datenschutz.pdf"
import AgbPdf from '../assets/img/AGB 2020.pdf'
export default () => {
return(    
<footer className="footer" id="footer">
<div className="container">
  <Row>  
    <Col align-self-center> <h3 align="center">Impressum:</h3>
      <br></br></Col>
      </Row>
  <Row>
  <div className="row align-items-center">

    <div className="col-md-4 copyright">
      <br></br>
      <br></br>
      <span>Telefon: +49 (0) 8341 9969535</span>
      <br></br>
      <span>E-Mail: <a href="mailto:info@Echtler-Mobile.de">info@Echtler-Mobile.de</a></span>
      <br></br>
      <span>Inhaltlich verantwortlich: Manfred Echtler</span>
    </div>

    <div className="col-md-4 copyright">
   
      <h5>Echtler-Mobile</h5>
      <span>Handel und Vermietung von Wohnmobilen, Caravan und KFZ</span>
      <br></br>
      <span>Inhaber: Manfred Echtler</span>
      <br></br>
      <span>Osterhofstraße 3</span>
      <br></br>
      <span>87600 Kaufbeuren</span>
      <br></br>
      <span>Steuernummer 125/213/31435</span>
    </div>

    <div className="col-md-4 copyright"><br></br>
    <a href={Datenschutz} download>Unsere Datenschutzerklärung</a><br/><br/>  
    <a href={AgbPdf} download>Unsere AGB's</a><br/><br/>    
      <span className="streitbeilegung">Wir sind nicht bereit und nicht verpflichtet an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</span>
    </div>
 
    {/*<div className="col-md-4">
      <ul className="list-inline social-buttons">
        <li className="list-inline-item">
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#">
            <i className="fa fa-facebook-f"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#">
            <i className="fa fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </div>
    <div className="col-md-4">
      <ul className="list-inline quicklinks">
        <li className="list-inline-item">
          <a href="#">Privacy Policy</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Terms of Use</a>
        </li>
      </ul>
    </div>*/}
  </div>
  </Row>
</div>
</footer>
)
}