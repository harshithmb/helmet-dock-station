import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Vogo</h1>
            <div className="section-container">
                <div className="left-section vh-left-section">
                    <div className="vh-catch-phrase-box">
                        <div id="main-text">Rent.Ride.Return</div>
                        <p id="vh-catch-sub-phrase">Start riding at Rs. 3/km*</p>

                    </div>
                </div>
                <div className="vh-right-section">
                    <img id="main-img" src="https://vogo.in///wp-content/themes/vogoClassic/assets/main.png" />

                </div></div></div>
    );
}

export default HomePage;