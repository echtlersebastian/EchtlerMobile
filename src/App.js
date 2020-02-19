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
import WohnmobilModal from './components/Modlas/WohnmobilModal';
import Team from './components/Team';
import BottomPictures from './components/BottomPictures';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import PortfolioModal from './components/PortfolioModal';

function App() {

    const portfolioLinks = [

      {
        title: 'Unsere Wohnmobile',
        caption: 'Schauen Sie sich unsere Wohnmobile an!',
        content : <WohnmobilModal></WohnmobilModal>
       },
       {
        title: 'Im Wohnmobil enthalten',
        caption: 'Alles was Sie brauchen ist bei uns im Preis enthalten' ,
        content : "content2"
       },
       {
        title: 'Urlaubs Inspiration',
        caption: 'Egal welches Ziel Sie haben - Mit unseren Wohnmobilen kommen Sie dorthin!',
        content : "content3"
       },
       {
        title: 'Vertragsbedingungen',
        caption: 'Hier finde sie eine zusammengefaste Übersicht unserer Vertragsbedingungen',
        content : "content4"
       },
       {
        title: 'Preisliste',
        caption: 'aktuelle Preise für das Jahr 2020',
        content : <PortfolioModal></PortfolioModal>
       },
       {
        title: 'AGB',
        caption: 'Unsere Vertragsbedingungen',
        content : <img className="img-fluid" src={`https://unsplash.it/600/600/?${Math.floor(Math.random(0,100) * 100)}`}></img>
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
    
    const TimeLineItems = [
      {
        title: 'Mir hätten da was zum anbieten für Sie.',
        subheading: 'subheading',
        caption: 'Wennses kaufn mögts, dann klingts halt vorne.',
        imgUrl: `https://unsplash.it/150/150/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Title2',
        subheading: 'subheading',
        caption: 'Caption2', 
        imgUrl: `https://unsplash.it/150/150/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Title3',
        subheading: 'subheading',
        caption: 'Caption3',
        imgUrl: `https://unsplash.it/150/150/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Title4',
        subheading: 'subheading',
        caption: 'Caption4',
        imgUrl: `https://unsplash.it/150/150/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Title5',
        subheading: 'subheading',
        caption: 'Caption3',
        imgUrl: `https://unsplash.it/150/150/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Title6',
        subheading: 'subheading',
        caption: 'Caption4',
        imgUrl: `https://unsplash.it/150/150/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Rückgabe',
        subheading: 'Geben sie ihr wohnmobil unkompliziert zurück',
        caption: 'Wenn sie aus dem Urlaub wieder daheim sind, dann können sie ganz einfach bei uns vorbeikommen und das Wohnmobil wieder abgeben.',
        imgUrl: `https://unsplash.it/150/150/?${Math.floor(Math.random(0,100) * 100)}`
       }
    ]

  return (
    <div>

        <Navbar></Navbar>    

        <Masterhead></Masterhead>
        <PortfolioModal></PortfolioModal>
        {/*<Service serviceLinks = {serviceLinks}></Service>*/}
          
        <Portfolio portfolioLinks = {portfolioLinks}></Portfolio>
          
        <HowToBuyElements timeLineItems = {TimeLineItems}></HowToBuyElements>
    

        <ContactUs></ContactUs>

        <Footer></Footer>
        
    </div>
  );
}

export default App;
