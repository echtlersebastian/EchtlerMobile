import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/agency.css';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Navbar from './components/Navbar';
import Masterhead from './components/Masterhead';
import HowToBuyElements from './components/HowToBuyElements/HowToBuy';
import Team from './components/Team';
import BottomPictures from './components/BottomPictures';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {

    const portfolioLinks = [

      {
        title: 'Title1',
        caption: 'Caption1' 
       },
       {
        title: 'Title2',
        caption: 'Caption2' 
       },
       {
        title: 'Title3',
        caption: 'Caption3' 
       },
       {
        title: 'Title4',
        caption: 'Caption4' 
       },
       {
        title: 'Title5',
        caption: 'Caption5' 
       },
       {
        title: 'Title6',
        caption: 'Caption6' 
       }
    ]

    const serviceLinks = [
      {
        title: 'Mir hätten da was zum anbieten für Sie.',
        caption: 'Wennses kaufn mögts, dann klingts halt vorne.' 
       },
       {
        title: 'Title2',
        caption: 'Caption2' 
       },
       {
        title: 'Title3',
        caption: 'Caption3' 
       }
    ]
    


  return (
    <div>

        <Navbar></Navbar>    

        <Masterhead></Masterhead>
        
        <Service serviceLinks = {serviceLinks}></Service>
          
        <Portfolio portfolioLinks = {portfolioLinks}></Portfolio>
          
        <HowToBuyElements></HowToBuyElements>
          
        <Team></Team>

        <BottomPictures></BottomPictures>

        <ContactUs></ContactUs>

        <Footer></Footer>
        
    </div>
  );
}

export default App;
