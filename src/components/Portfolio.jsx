import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap"

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItem: null,
            show: false
        }

    }

    render() {
        const handleClose = () => this.setState({ currentItem: null, show: false });
        const handleShow = (item) => this.setState({ currentItem: item, show: true });
        return (
            <section className="bg-light page-section" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Unser Angebot</h2>
                            <h3 className="section-subheading text-muted">Was soll hier stehen?</h3>
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.props.portfolioLinks && this.props.portfolioLinks.map((item, index) =>
                                <div className="col-md-4 col-sm-6 portfolio-item" key={index}>
                                    <div className="portfolio-link" onClick={() => handleShow(item)}>
                                        <div className="portfolio-hover">
                                            <div className="portfolio-hover-content">
                                                <i className="fa fa-plus fa-3x"></i>
                                            </div>
                                        </div>
                                        <img className="img-fluid" src={`https://unsplash.it/350/350/?${Math.floor(Math.random(0, 100) * 100)}`} alt="portfolio_img" />
                                    </div>
                                    <div className="portfolio-caption">
                                        <h4>{item.title}</h4>
                                        <p className="text-muted">{item.caption}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                {this.state.currentItem && <Modal className="portfolio-modal" show={this.state.show} onHide={handleClose}>
                    {/* <Modal.Header onClick={handleClose}> 
                        <h2>{this.state.currentItem.title}</h2>
                    </Modal.Header> */}

                    <Modal.Body className="modal-body">
                        <Row>
                            <Col>
                            </Col>
                            <Col>
                                <h2>{this.state.currentItem.title}</h2>
                            </Col>
                            <Col>
                                <i className="fa fa-close fa-2x float-right mr-2" onClick={handleClose} />
                            </Col>
                        </Row>


                        {this.state.currentItem.caption}<br />
                        {this.state.currentItem.content}
                    </Modal.Body>
                </Modal>}
            </section>
        )
    }
}

export default Portfolio;