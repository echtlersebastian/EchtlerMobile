import React from 'react';
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/agency.css';
import 'react-toastify/dist/ReactToastify.css';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Navbar from './components/Navbar';
import Masterhead from './components/Masterhead';
import HowToBuyElements from './components/HowToBuyElements/HowToBuy';
import WohnmobilDetails from './components/Modlas/WohnmobilDetails';
import AustattungsDetails from './components/Modlas/AusstattungsDetails';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import PortfolioModal from './components/PortfolioModal';
import ExtrasDetails from "./components/Modlas/ExtrasDetails"
import {ToastContainer, toast} from "react-toastify";


function App() {
    toast.configure();
    const portfolioLinks = [

      {
        title: 'Unsere Wohnmobile',
        caption: 'Schauen Sie sich hier unsere Wohnmobile an.',
        content : <WohnmobilDetails/>
       },
       {
        title: 'Im Wohnmobil enthalten',
        caption: 'Alles was Sie brauchen ist bei uns im Preis enthalten.',
        content : <AustattungsDetails/>
       },
       {
        title: 'Zubuchbare Extras',
        caption: 'Bei uns bleiben keine Wünsche offen.',
        content : <ExtrasDetails/>
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
        title: 'Na, haben Sie nun Lust zu campen?',
        subheading: 'Freiheit – Unabhängigkeit - Abenteuer',
        caption: 'Mit Echtler Mobile in wenigen Schritten czum Traumurlaub!',
        imgUrl: `https://unsplash.it/150/150/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Kontaktieren Sie uns!',
        subheading: 'Wir schicken Ihnen ein Angebot.',
        caption: 'Schicken Sie uns eine E-Mail, rufen Sie uns an oder füllen Sie das Anfrageformular aus!', 
        imgUrl: `https://unsplash.it/150/150/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Komplettpaket bei Echtler- Mobile!',
        subheading: 'Großes Angebot an Ausstattung',
        caption: 'Fehlt Ihnen noch etwas? Gerne können Sie es über die Extras dazubuchen. ',
        imgUrl: `https://unsplash.it/150/150/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Fragen?',
        subheading: 'Wenden Sie sich gerne an uns!',
        caption: 'Durch jahrelange Campingerfahrung können wir Sie in allen Belangen unterstützen.',
        imgUrl: `https://unsplash.it/150/150/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Abholung des Wohnmobils zum vereinbarten Termin',
        subheading: 'Detaillierte Einweisung in alle Bereiche',
        caption: 'Somit bekommen Sie Sicherheit für ihre Reise',
        imgUrl: `https://unsplash.it/150/150/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Jetzt beginnt Ihre Reise!',
        subheading: 'Strand, Stadt oder Berge?',
        caption: 'Mit unseren Wohnmobilen stehen Ihnen alle Möglichkeiten offen. ',
        imgUrl: `https://unsplash.it/150/150/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Rückgabe des Wohnmobils zum vereinbarten Termin',
        subheading: 'Die Abnahme erfolgt unkompliziert und professionell.',
        caption: 'Haben sie keine Lust auf eine Endreinigung? - Wir übernehmen das gerne für Sie!',
        imgUrl: `https://unsplash.it/150/150/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Hat Ihnen unser Service gefallen?',
        subheading: '',
        caption: 'Bitte hinterlassen Sie uns eine Google Bewertung.',
        imgUrl: `https://unsplash.it/150/150/?${Math.floor(Math.random(0,100) * 100)}`
       }
    ]

  return (
    <div>
        <ToastContainer/>
        <Navbar></Navbar>    
        <Masterhead></Masterhead>
        <Service serviceLinks = {serviceLinks}></Service>
        <Portfolio portfolioLinks = {portfolioLinks}></Portfolio>
          
        <HowToBuyElements timeLineItems = {TimeLineItems}></HowToBuyElements>
    
        <ContactUs></ContactUs>
        
        <Footer></Footer>
        
    </div>
  );
}
export default App;