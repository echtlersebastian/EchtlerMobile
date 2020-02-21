import React from 'react'
import { Row, Col } from "react-bootstrap"
import image from "../../assets/img/WomoExport1.png"

export default () => {
    return (
        <div className="container">
            <img className="img-fluid" src={image} alt="asdasd" />
            <br></br>
            <Row>
                <br></br>
            </Row>
            <Row>
                <Col lg="3" md="6" ><span class="font-weight-bold">Baujahr</span></Col>
                <Col lg="3" md="6"><span >2018</span></Col>
                <Col lg="3" md="6"><span class="font-weight-bold">Typ</span></Col>
                <Col lg="3" md="6"><span>Teilintegriert</span></Col>
            </Row>
            <Row>
                <Col lg="3" md="6"><span class="font-weight-bold">Zulässiges Gesamtgewicht</span></Col>
                <Col lg="3" md="6"><span>3500</span></Col>
                <Col lg="3" md="6"><span class="font-weight-bold">Führerscheinklasse</span></Col>
                <Col lg="3" md="6"><span>3</span></Col>
            </Row>
            <Row>
                <Col lg="3" md="6"><span class="font-weight-bold">Schlafplätze</span></Col>
                <Col lg="3" md="6"><span >3</span></Col>
                <Col lg="3" md="6"><span class="font-weight-bold">Leistung (PS)</span></Col>
                <Col lg="3" md="6"><span class="ng-star-inserted">163</span></Col>
            </Row>

        </div>)
}