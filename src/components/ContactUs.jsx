import React from 'react';

import axios from "axios";
 
import {ToastContainer, toast} from "react-toastify"

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      message: "",
      address: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({[event.target.name] : event.target.value})
  }

  onSubmit() {
    debugger;
    axios.post("/contactus", {
      message : this.state.message,
      sender : this.state.address,
      phone  : this.state.phone,
      name : this.state.name
    }).then((res)=>{
      //toast.success("Ihre Anfrage ist eingegangen.")
    }).catch((e)=>{
      //toast.error("Beim Versenden ihrer Anfrage ist ein Fehler aufgetreten. /nBitte kontaktieren sie uns telefonisch.")
    })
  }

  render() {
    return (
      <section className="page-section" id="contact">
        {/* <ToastContainer/> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" name="name" id="name" type="text" onChange={this.onChange} placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."></input>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" name="address" id="email" type="email" onChange={this.onChange} placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."></input>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" name="phone" id="phone" type="tel" onChange={this.onChange} placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."></input>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea className="form-control" name="message" id="message" onChange={this.onChange} placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="button" onClick={this.onSubmit}>Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ContactUs;
