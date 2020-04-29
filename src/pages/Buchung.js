import React, { useEffect }  from 'react'
import '../App.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/agency.css';
import 'react-toastify/dist/ReactToastify.css';
import ReactGa from 'react-ga'
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import de from 'date-fns/locale/de';
 
import "react-datepicker/dist/react-datepicker.css";
import { Row, Col, ListGroup, Image, ListGroupItem } from "react-bootstrap"
import axios from "axios";
import BookingCalendar from 'react-booking-calendar';
 
 
import {toast} from "react-toastify"

class Buchung extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anrede: "",
      vorname: "",
      nachname: "",
      geburtsdatum: "",
      firma: "",
      straße: "",
      plz: "",
      ort: "",
      land: "",
      telefon: "",
      fax: "",
      email: "",
      startDate: new Date(),
      endDate: new Date(),
      bookings: [],
      availabilityMessage: "Bitte wählen sie ein Start und ein Enddatum für ihre Reise aus!"

    };



    toast.configure();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  

    onChange(event) {
      this.setState({[event.target.name] : event.target.value});
    }

    handleStartDatePickerChange = date => {
      this.setState({
        startDate: date
      }, this.handleAvailabilityMessage
      );
    };
      handleEndDatePickerChange = date => {
        this.setState({
          endDate: date
        }, this.handleAvailabilityMessage
        );
        
      };
    handleAvailabilityMessage(){
      var today = new Date();

      console.log("startDatum "  + this.state.startDate.getDate());
      console.log("startDatum "  + this.state.startDate.getMonth());
      console.log("endDatum "  + this.state.endDate.getDate());
      console.log("endDatum "  + this.state.endDate.getMonth());
      console.log("today "  + today.getDate());
      console.log("today "  + today.getMonth());


      //TODO: bisschen scheiße, weil ich ab heute nicht buchen kann... Andere Lösung muss gefudnen werden.
      if (!((this.state.startDate.getDate() === today.getDate() && this.state.startDate.getMonth() === today.getMonth() && this.state.startDate.getFullYear() === today.getFullYear()) || (this.state.endDate.getDate() === today.getDate() && this.state.endDate.getMonth() === today.getMonth() && this.state.endDate.getFullYear() === today.getFullYear()))){
        this.setState({
          availabilityMessage: "Verfügbarkeit muss geprüft werden"
        });
      }else{
        this.setState({
          availabilityMessage: "Bitte wählen sie ein Start und ein Enddatum für ihre Reise aus!"
        });
      }
    }


  onSubmit() {

    if (this.state.anrede && this.state.vorname && this.state.nachname && this.state.straße && this.state.plz && this.state.ort && this.state.land && this.state.telefon && 
      this.state.email && this.state.startDate && this.state.endDate){

      //do stuff
      const buchungObj = {
        anrede: this.state.anrede,
        vorname: this.state.vorname,
        nachname: this.state.nachname,
        geburtsdatum: this.state.geburtsdatum,
        firma: this.state.firma,
        straße: this.state.straße,
        plz: this.state.plz,
        ort: this.state.ort,
        land: this.state.land,
        telefon: this.state.telefon,
        fax: this.state.fax,
        email: this.state.email,
        startDate: this.state.startDate,
        endDate: this.state.endDate
      }
      axios.post("/", buchungObj).then((res)=>{
        console.log("sucessfull send");
        console.log(this.state.vorname);
        toast.success("Danke! Ihre Anfrage ist bei uns eingegangen.", { 
          position : toast.POSITION.BOTTOM_CENTER 
        });
      }).catch((e)=>{
        
        console.log("error");
        const errorMessage = <div><span>Beim Versenden ihrer Anfrage ist ein Fehler aufgetreten.</span>
      <br/><span>Bitte kontaktieren sie uns telefonisch.</span></div>;

toast.error(errorMessage, { 
  position : toast.POSITION.BOTTOM_CENTER 
});
})
}else{
  toast.error("Bitte füllen sie alle Pflichtfelder aus, damit sie die Buchung abschicken können", { 
    position : toast.POSITION.BOTTOM_CENTER 
  });
}
} 
render(){
  const bookings = [
    new Date(2021, 0, 14),
    new Date(2021, 0, 15),
    new Date(2021, 0, 16),
    new Date(2021, 0, 17),
    new Date(2021, 0, 18),
    new Date(2021, 0, 19),
    new Date(2020, 7, 2),
    new Date(2020, 7, 3),
    new Date(2020, 7, 9),
    new Date(2020, 7, 10),
    new Date(2020, 7, 11),
    new Date(2020, 7, 12),
  ];
   
  const MyBookingCalendar = () => (
    <BookingCalendar bookings={bookings} />
  );
  registerLocale('de', de);


  return (
 
    <div className="container">      
    <br/>    
      <br/>    
      <br/>    
      <br/>    
      <br/>    
      <br/>
      <div className ="container">

     {/* <BookingCalendar disableHistory="false" bookings={bookings} />*/}
      </div>
<h1>Mietzeitraum:</h1>
<br/>
<br/>
<h3>{this.state.availabilityMessage}</h3>
<br/>

<Row>
  <Col>
    <h3>Von:</h3>
  </Col>
    <Col sm="5">
    <DatePicker
        locale="de"
        selected = {this.state.startDate}
        onChange={this.handleStartDatePickerChange}
        dateFormat='dd.MM.yyyy'
      />
      </Col>     
    <Col>
    <h3>Bis:</h3>
    </Col>
    <Col sm="5">
     <DatePicker
          locale="de"
          selected = {this.state.endDate}
          onChange={this.handleEndDatePickerChange}
          dateFormat='dd.MM.yyyy'
   />
    </Col>
</Row>
<br/>
      <h1>Persönliche Daten:</h1>
      <br/>
        <form id="contactForm" name="sentMessage" noValidate="novalidate">
        <div className="form-group">
          <Row>
            <Col>
           <h4 className="float-right mr1">
             Anrede:
             </h4> 
            </Col>
            <Col xs="8" >
          <input className="form-control" name="anrede" id="name" type="text" onChange={this.onChange} placeholder="Anrede" required="required" data-validation-required-message="Please enter your name."></input>
          <p className="help-block text-danger"></p>
            </Col>
          </Row>
        </div>

        <div className="form-group">
          <Row>
            <Col>
           <h4 className="float-right mr1">
             Vorname:
             </h4> 
            </Col>
            <Col xs="8" >
          <input className="form-control" name="vorname" id="name" type="text" onChange={this.onChange} placeholder="Vorname" required="required" data-validation-required-message="Please enter your name."></input>
          <p className="help-block text-danger"></p>
            </Col>
          </Row>
        </div>

        <div className="form-group">
          <Row>
            <Col>
           <h4 className="float-right mr1">
             Nachname:
             </h4> 
            </Col>
            <Col xs="8" >
          <input className="form-control" name="nachname" id="name" type="text" onChange={this.onChange} placeholder="Nachname" required="required" data-validation-required-message="Please enter your name."></input>
          <p className="help-block text-danger"></p>
            </Col>
          </Row>
        </div>

        <div className="form-group">
          <Row>
            <Col>
           <h4 className="float-right mr1">
             Geb.-Datum:
             </h4> 
            </Col>
            <Col xs="8" >
          <input className="form-control" name="geburtsdatum" id="name" type="text" onChange={this.onChange} placeholder="Geburtsdatum" required="required" data-validation-required-message="Please enter your name."></input>
          <p className="help-block text-danger"></p>
            </Col>
          </Row>
        </div>

        <div className="form-group">
          <Row>
            <Col>
           <h4 className="float-right mr1">
             Firma:
             </h4> 
            </Col>
            <Col xs="8" >
          <input className="form-control" name="firma" id="name" type="text" onChange={this.onChange} placeholder="Firma" required="required" data-validation-required-message="Please enter your name."></input>
          <p className="help-block text-danger"></p>
            </Col>
          </Row>
        </div>

        <div className="form-group">
          <Row>
            <Col>
           <h4 className="float-right mr1">
             Straße:
             </h4> 
            </Col>
            <Col xs="8" >
          <input className="form-control" name="straße" id="name" type="text" onChange={this.onChange} placeholder="Straße" required="required" data-validation-required-message="Please enter your name."></input>
          <p className="help-block text-danger"></p>
            </Col>
          </Row>
        </div>

        <div className="form-group">
          <Row>
            <Col>
           <h4 className="float-right mr1">
             PLZ:
             </h4> 
            </Col>
            <Col xs="8" >
          <input className="form-control" name="plz" id="name" type="text" onChange={this.onChange} placeholder="PLZ" required="required" data-validation-required-message="Please enter your name."></input>
          <p className="help-block text-danger"></p>
            </Col>
          </Row>
        </div>


        <div className="form-group">
          <Row>
            <Col>
           <h4 className="float-right mr1">
             Ort:
             </h4> 
            </Col>
            <Col xs="8" >
          <input className="form-control" name="ort" id="name" type="text" onChange={this.onChange} placeholder="Ort" required="required" data-validation-required-message="Please enter your name."></input>
          <p className="help-block text-danger"></p>
            </Col>
          </Row>
        </div>

        
        <div className="form-group">
          <Row>
            <Col>
           <h4 className="float-right mr1">
             Land:
             </h4> 
            </Col>
            <Col xs="8" >
          <input className="form-control" name="land" id="name" type="text" onChange={this.onChange} placeholder="Deutschland" required="required" data-validation-required-message="Please enter your name."></input>
          <p className="help-block text-danger"></p>
            </Col>
          </Row>
        </div>

        <div className="form-group">
          <Row>
            <Col>
           <h4 className="float-right mr1">
             Telefon:
             </h4> 
            </Col>
            <Col xs="8" >
          <input className="form-control" name="telefon" id="name" type="text" onChange={this.onChange} placeholder="Telefon" required="required" data-validation-required-message="Please enter your name."></input>
          <p className="help-block text-danger"></p>
            </Col>
          </Row>
        </div>

        <div className="form-group">
          <Row>
            <Col>
           <h4 className="float-right mr1">
             Fax:
             </h4> 
            </Col>
            <Col xs="8" >
          <input className="form-control" name="fax" id="name" type="text" onChange={this.onChange} placeholder="Fax" required="required" data-validation-required-message="Please enter your name."></input>
          <p className="help-block text-danger"></p>
            </Col>
          </Row>
        </div>

        <div className="form-group">
          <Row>
            <Col>
           <h4 className="float-right mr1">
             E-Mail:
             </h4> 
            </Col>
            <Col xs="8" >
          <input className="form-control" name="email" id="name" type="text" onChange={this.onChange} placeholder="E-Mail" required="required" data-validation-required-message="Please enter your name."></input>
          <p className="help-block text-danger"></p>
            </Col>
          </Row>
        </div>



     
      <div className="col-lg-12 text-center">
        <div id="success"></div>
        <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" onClick={this.onSubmit} type="button" >Anfrage jetzt abschicken</button>
      </div>
  </form>

    </div>
    )
}
}
export default Buchung;