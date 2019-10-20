import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Scanner from './components/QR_Scanner/QR_Scanner';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import VehicleDetails from './components/VehicleDetails/VehicleDetails'
import Tracking from './components/Tracking/Tracking';
import About from './components/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound'
import Finish from './components/Finish/Finish';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Scanner}/>
          <Route exact path='/vehicleDetails' component={VehicleDetails}/>
          <Route exact path='/tracking' component={Tracking}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/completed' component={Finish}/>
          <Route component={PageNotFound}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
