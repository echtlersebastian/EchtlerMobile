import React from 'react'
import { Row } from "react-bootstrap"
export default () => {
return(    
<footer className="footer" id="footer">
<div className="container">
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
      <h3>Impressum:</h3>
      <br></br>
      <h5>Echtler-Mobile</h5>
      <span>Handel und Vermietung von Wohnmobilen, Caravan und KFZ</span>
      <br></br>
      <span>Inhaber: Manfred Echtler</span>
      <br></br>
      <span>Osterhofstraße 3</span>
      <br></br>
      <span>87600 Kaufbeuren</span>
    </div>

    <div className="col-md-4 copyright"><br></br>
      <br></br>
      
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