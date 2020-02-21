import React from 'react'
import { Row, Col, ListGroup, Image } from "react-bootstrap"

import imgEquipment from "../../assets/img/AusstattungModal.png"



export default (props) => {
  return (
  <div>
    <Image style={{maxHeight : '30rem'}} fluid src={imgEquipment} alt="Ausstattung"/>
    <Row>
    <Col>
      <ListGroup>
        <ListGroup.Item active>Zubuch</ListGroup.Item>
        <ListGroup.Item>
          <label>Bettenset</label><span>30€</span>  
        </ListGroup.Item>     
      </ListGroup>
    </Col>
  </Row>
  
  </div>)
}