import React from 'react'
import { Row, Col, ListGroup, Image } from "react-bootstrap"

import imgWomo from "../../assets/img/WohnmobilGrundriss.jpg"

export default (props) => {
    const specs = [
        { attribute: "Hersteller", value: "Carado Hymer Group" },
        { attribute: "Modelbezeichnung", value: "T 338" },
        { attribute: "Motorisierung", value: "2,3 l Multijet Diesel (102 kW / 140 PS)" },
        { attribute: "Fahrgestell", value: "Fiat Tiefrahmen" },
        { attribute: "Bauweise", value: "Teilintegriert" },
        { attribute: "Modeljahr", value: "2020" },
        { attribute: "Gesamtlänge", value: "6,99 m" },
        { attribute: "Gesamtbreite", value: "2,32 m" },
        { attribute: "Gesamthöhe", value: "2,90 m" },
        { attribute: "Zul. Gesamtgewicht", value: "3,49 t" },
        { attribute: "Max. Zuladung", value: "600 kg" },
        { attribute: "Max. Zuladung (Heckgarage)", value: "150 kg" },
        { attribute: "Abgasnorm", value: "Euro 6d-Temp" },
        { attribute: "Erforderliche Führerscheinklasse", value: "B (3)" }
    ];
    return (
        <div>
            <Image style={{ maxHeight: '30rem' }} fluid src={imgWomo} alt="Technische Daten" />
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroup.Item active>Fahrzeug-Daten</ListGroup.Item>
                        {specs.map(({ attribute, value, unit }, index) =>
                            <ListGroup.Item key={index}>
                                <Row>
                                    <Col>
                                        <span className="float-right mr1">{attribute}</span>
                                    </Col>
                                    <Col>
                                        <span className="float-left ml1">{value}</span>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                </Col>
            </Row>
        </div>)
}