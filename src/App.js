import React, { useEffect } from 'react';
import './App.css';
import './assets/css/agency.css';
import Navbar from './components/Navbar';
import ReactGa from 'react-ga';
import HomePage from './pages/HomePage';
import Buchung from './pages/Buchung';
import GalleryPage from './pages/GalleryPage';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CookieConsent from "react-cookie-consent";
import './assets/css/bootstrap.min.css';


function App() {

useEffect(() =>{
//ReactGa.initialize('UA-159130984-1')
ReactGa.pageview('/')

}, [])

  return (
    <Router>
      <div className="App">

        <Navbar></Navbar>
        
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/buchung" exact component={Buchung}/>
          <Route path="/fotos" exact component={GalleryPage}/>
          
        </Switch>
        <CookieConsent
    location="bottom"
    buttonText="Zustimmen"
    cookieName="Echtler-Mobile Cookie"
    style={{ background: "#2B373B" }}
    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
    expires={150}
>
Echtler-Mobile.de verwendet Cookies, um Informationen über die Nutzung der Website durch die Besucher zu sammeln. Diese Cookies helfen uns dabei, Ihnen das bestmögliche Online-Erlebnis zu bieten und unsere Website ständig zu verbessern. Mit dem Klick auf den Button "Zustimmen" erklären Sie sich mit der Verwendung von Cookies einverstanden.{" "}
</CookieConsent>

      </div>
    </Router>
          
        
  );
}
export default App;