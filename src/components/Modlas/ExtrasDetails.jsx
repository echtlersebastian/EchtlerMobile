import React from 'react'
import { Row, Col, ListGroup, Image } from "react-bootstrap"

import imgExtras from "../../assets/img/ExtrasImage.png"

export default (props) => {
  const optionals = [
    { label: "Bettenset", price: 30 },
    { label: "je zusätzlichem Stuhl", price: 10 },
    { label: "Sonnenschirm", price: 15 },
    { label: "Winterreifen", price: 99 },
    { label: "Gasgrill", price: 15 },
    { label: "Gasflasche (gefüllt)", price: 30 },
    { label: "Campingliege", price: 15 },
    { label: "Handtücher", price: 12 },
    { label: "Schneeketten", price: 75 },
  ];
  return (
    <div>
      <Image style={{ maxHeight: '30rem' }} fluid src={imgExtras} alt="Ausstattung" />
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item active>Zubuchbare Optionen für ihre perfekte Reise</ListGroup.Item>
            {optionals.map(({ label, price }, index) =>
              <ListGroup.Item key={index}>
                <Row>
                  <Col>
                    <span className="float-right mr1">{label}</span>
                  </Col>
                  <Col>
                    <span className="float-left ml1">{price},00€</span>
                  </Col>
                </Row>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </div>)
}