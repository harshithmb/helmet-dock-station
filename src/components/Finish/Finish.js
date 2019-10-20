import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Finish = () => {
    return ( 
        <div>
            <h3>Ride Completed</h3>
            <h4>Trip Details</h4>
            <span>Cost : Rs 56/-</span>
            <hr/>
            <Link to="/">
                <Button variant="primary">Go to HomePage</Button>
            </Link>
        </div>
     );
}
 
export default Finish;