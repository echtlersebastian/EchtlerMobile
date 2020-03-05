import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ReactGa from 'react-ga';
import HomePage from './pages/HomePage';
import Buchung from './pages/Buchung';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
          
        </Switch>
      </div>
    </Router>
          
        
  );
}
export default App;