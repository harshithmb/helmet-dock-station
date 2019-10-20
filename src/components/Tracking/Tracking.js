import React, { useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const Tracking = (props) => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <h3>Tracking</h3>
            <img src="https://vogo.in/wp-content/themes/vogoClassic/assets/Quick@2x.png" alt="" />
            <hr />
            <Button variant="danger" onClick={() => setShow(true)}>End Trip</Button>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        End Trip?
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Instructions
                <li>Please place Helmet in Storage Box</li>
                    <li>Push Helmet holder Button to Left</li>
                    <li>Close the Storage Box</li>
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/completed">
                        <Button variant="primary">Finish Ride</Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Tracking;