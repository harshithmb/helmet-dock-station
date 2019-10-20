import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import mock from '../MockData/mock'
import HomePage from '../HomePage/HomePage';
import VehicleDetails from '../VehicleDetails/VehicleDetails'
import Col from 'react-bootstrap/Col';
import './QR_Scanner.css';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const config = {
    label: {
        vehicleNumber: 'Vehicle Number',
        getDetails: 'Get Details',
    }
}



const Scanner = () => {
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [vehicleData, setVehicleData] = useState({});
    const [showVehicle, setShowVehicle] = useState(false);
    const [show, setShow] = useState(false);


    const handleClick = () => {
        const data = mock.vehicle;
        const vehicleDetails = data.filter(p => (p.number === vehicleNumber));
        console.log('vehicleDetails', vehicleDetails)
        if (vehicleDetails.length > 0) {
            setShowVehicle(true);
            setVehicleData(vehicleDetails[0] ? vehicleDetails[0] : {});
        } else {
            setShowVehicle(false);
            setVehicleData({});
            setShow(true);
        }
    }

    const handleClose = (e) => {
        setVehicleNumber('');
        setShow(false);
    }

    const handleChange = (e) => {
        e.preventDefault();
        setVehicleNumber(e.target.value)
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col sm={6}><HomePage /></Col>
                    <Col sm={6}><Form>
                        <Form.Group className="center">
                            <Form.Group as={Col}>
                                <Form.Label>{config.label.vehicleNumber}</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="vehicleNumber"
                                    placeholder={"Enter Vehicle Number"}
                                    value={vehicleNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Form.Group>
                    </Form>
                        <Button variant="outline-primary" disabled={vehicleNumber.length === 0} onClick={handleClick}>{config.label.getDetails}</Button>
                        {showVehicle ?
                            <div>
                                <VehicleDetails
                                    vehicleData={vehicleData}
                                />
                            </div>
                            :
                            ''}
                    </Col>
                </Row>
                </Container>


                <Modal
                    show={show}
                    onHide={handleClose}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Details Not Found
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Vehicle RC not Found, Please try again!!!</p>
                    </Modal.Body>
                </Modal>
            
        </div>
            );
        }
        
export default Scanner;