import React from 'react'
import '../App.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/agency.css';
import 'react-toastify/dist/ReactToastify.css';

import ContactUs from '../components/ContactUs';


function Buchung() {

    
  return (
    <div>      
        <form id="contactForm" name="sentMessage" noValidate="novalidate">
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <input className="form-control" name="name" id="name" type="text" placeholder="Vorname Nachname" required="required" data-validation-required-message="Please enter your name."></input>
          <p className="help-block text-danger"></p>
        </div>
        <div className="form-group">
          <input className="form-control" name="address" id="email" type="email" placeholder="E-Mail Adresse" required="required" data-validation-required-message="Please enter your email address."></input>
          <p className="help-block text-danger"></p>
        </div>
        <div className="form-group">
          <input className="form-control" name="phone" id="phone" type="tel" placeholder="Telefonnummer" required="required" data-validation-required-message="Please enter your phone number."></input>
          <p className="help-block text-danger"></p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <textarea className="form-control" name="message" id="message" placeholder="Ihre Nachricht an uns" required="required" data-validation-required-message="Please enter a message."></textarea>
          <p className="help-block text-danger"></p>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="col-lg-12 text-center">
        <div id="success"></div>
        <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="button" >Anfrage jetzt abschicken</button>
      </div>
    </div>
  </form>
    </div>
    )
}

export default Buchung;