import React from 'react'
import { Row, Col, ListGroup, Image, ListGroupItem } from "react-bootstrap"

import imgEquipment from "../../assets/img/AusstattungModal.png"

export default () => {
  return (
  <div>
    <Image style={{maxHeight : '30rem'}} fluid src={imgEquipment} alt="Ausstattung"/>
    <Row>
    <Col>
      <ListGroup>
        <ListGroup.Item active>Technik</ListGroup.Item>
        <ListGroup.Item>Integrierte Rückfahrkamera</ListGroup.Item>
        <ListGroup.Item>Radio mit CD</ListGroup.Item>
        <ListGroup.Item>Bluetooth-Konnektivität</ListGroup.Item>
        <ListGroup.Item>Navigationssystem</ListGroup.Item>
        <ListGroup.Item>Vollautomatische Sat-Anlage</ListGroup.Item>
        <ListGroup.Item>Stromkabel</ListGroup.Item>
        <ListGroup.Item>Truma Combi 6 Heizung / Warmwasserversorgung</ListGroup.Item>
      </ListGroup>
    </Col>
    <Col>
      <ListGroup>
        <ListGroup.Item active>Innenausstattung</ListGroup.Item>
        <ListGroup.Item>Kühlschrank (167 l) mit großen Gefrierfach (29 l)</ListGroup.Item>       
        <ListGroup.Item>Inklusive zwei Stühlen und einem Tisch</ListGroup.Item>
        <ListGroup.Item>Vollständiges Geschirrset</ListGroup.Item>
        <ListGroup.Item>Hubbett (2 Pers.) 195 x 140 cm </ListGroup.Item>
        <ListGroup.Item>Zwei Einzelbetten (200 x 80 cm und 190 x 80 cm)</ListGroup.Item>
        <ListGroup.Item>Eimer und Wasserschlauch</ListGroup.Item>
        <ListGroup.Item>Markise und Fahrradträger</ListGroup.Item>
      </ListGroup>
    </Col>
  </Row>
  </div>)
}