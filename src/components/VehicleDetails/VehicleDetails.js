import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom';

const VehicleDetails = (props) => {
    const [show, setShow] = useState(false);
    console.log('props', props.vehicleData);

    return (
        <div>
            <Container>
                <Row>
                    <Col sm={4}>Vehicle Details</Col>
                    <Col sm={8}>{props.vehicleData.number}</Col>
                </Row>
                <Row>
                    <Col sm={4}>Owner</Col>
                    <Col sm={8}>{props.vehicleData.owner}</Col>
                </Row>
                <Row>
                    <Col sm={4}>Pick-Up</Col>
                    <Col sm={8}>Marathalli</Col>
                </Row>
                <Row>
                    <Col sm={4}>Drop</Col>
                    <Col sm={8}>Whitefield</Col>
                </Row>
                <Button variant="primary" onClick={() => setShow(true)}>Book Vehicle</Button>
                
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Booked
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Vehicle Successfully Booked!
                        Please Unlock the Helmet from the Storage Box to start the Ride</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to="/tracking">
                            <Button variant="primary">Track</Button>
                        </Link>
                    </Modal.Footer> 
                </Modal>
            </Container>
        </div>);
}

export default VehicleDetails;