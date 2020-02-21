import React from 'react'
import { Row, Col, ListGroup } from "react-bootstrap"

export default (props) => {
  return (<Row>
    <Col>
      <ListGroup>
        <ListGroup.Item active>Technik</ListGroup.Item>
        <ListGroup.Item>Integrierte Rückfahrkamera</ListGroup.Item>
        <ListGroup.Item>Radio mit CD</ListGroup.Item>
        <ListGroup.Item>Bluetooth-Konnektivität</ListGroup.Item>
        <ListGroup.Item>Navigationssystem</ListGroup.Item>
        <ListGroup.Item>Stromkabel</ListGroup.Item>
      </ListGroup>
    </Col>
    <Col>
      <ListGroup>
        <ListGroup.Item active>Fahrzeugausstattung</ListGroup.Item>
        <ListGroup.Item>Kühlschrank mit großen Gefrierfach</ListGroup.Item>       
        <ListGroup.Item>Inklusive zwei Stühlen und einem Tisch</ListGroup.Item>
        <ListGroup.Item>Vollständiges Geschirr</ListGroup.Item>
        <ListGroup.Item>Hubbett für zwei Personen</ListGroup.Item>
        <ListGroup.Item>Eimer und Wasserschlauch</ListGroup.Item>
      </ListGroup>
    </Col>
  </Row>)
}