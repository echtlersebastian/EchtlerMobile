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
import Preisliste from './components/Modlas/Preisliste';
import AgbModal from './components/Modlas/AGBModal';
import PacklisteModal from './components/Modlas/PacklisteDetails';
import WohnmobilPortfolioBild from './assets/img/ModalPictures/Wohnmobil.png'
import AusstattungPortfolioBild from './assets/img/ModalPictures/Ausstattung.png'
import ExtrasPortfolioBild from './assets/img/ModalPictures/Extras.png'
import PacklistePortfolioBild from './assets/img/ModalPictures/Packliste.png'
import PreislistePortfolioBild from './assets/img/ModalPictures/Preisliste.png'
import AGBPortfolioBild from './assets/img/ModalPictures/AGB.png'


function App() {
    toast.configure();
    const portfolioLinks = [

      {
        title: 'Unsere Wohnmobile',
        caption: 'Schauen Sie sich hier unsere Wohnmobile an.',
        image: WohnmobilPortfolioBild,
        content : <WohnmobilDetails/>
       },
       {
        title: 'Ausstattung',
        caption: 'Vieles was Sie brauchen ist bei uns im Preis enthalten.',
        image: AusstattungPortfolioBild,
        content : <AustattungsDetails/>
       },
       {
        title: 'Mögliche Extras',
        caption: 'Bei uns bleiben keine Wünsche offen.',
        image: ExtrasPortfolioBild,
        content : <ExtrasDetails/>
       },
       {
        title: 'Packliste',
        caption: 'Damit sie nichts vergessen',
        image: PacklistePortfolioBild,
        content : <PacklisteModal></PacklisteModal>
       },
       {
        title: 'Preisliste 2020',
        caption: 'Unser aktuelles Angebot für sie!',
        image: PreislistePortfolioBild,
        content : <Preisliste></Preisliste>
       },
       {
        title: 'AGB',
        caption: 'Unsere Vertragsbedingungen',
        image: AGBPortfolioBild,
        content : <AgbModal></AgbModal>
       }
    ]

    const serviceLinks = [
      {
        title: 'Es gibt nichts schöneres als freie Zeit so zu erleben!',
        caption: '' 
       },
       {
        title: 'Brotzeit machen, wo immer man will.',
        caption: '' 
       },
       {
        title: 'Wild, oder gepflegt am Campingplatz wohnen.',
        caption: '' 
       },
       {
        title: 'Städtereisen',
        caption: '' 
       },
       {
        title: 'Bergfahrten',
        caption: '' 
       },
       {
        title: 'Familienurlaub am Meer',
        caption: '' 
       }
    ]
    
    const TimeLineItems = [
      {
        title: 'Na, haben Sie nun Lust zu campen?',
        subheading: 'Freiheit – Unabhängigkeit - Abenteuer',
        caption: 'Mit Echtler Mobile in wenigen Schritten zum Traumurlaub!',
        imgUrl: `https://unsplash.it/300/300/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Kontaktieren Sie uns!',
        subheading: 'Wir schicken Ihnen ein Angebot.',
        caption: 'Schicken Sie uns eine E-Mail, rufen Sie uns an oder füllen Sie unten das Anfrageformular aus!', 
        imgUrl: `https://unsplash.it/300/300/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Komplettpaket bei Echtler-Mobile!',
        subheading: 'Großes Angebot an Ausstattung',
        caption: 'Fehlt Ihnen noch etwas? Sprechen Sie mit uns und Sie können gerne Extras dazubuchen. ',
        imgUrl: `https://unsplash.it/300/300/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Fragen?',
        subheading: 'Wenden Sie sich gerne an uns!',
        caption: 'Durch jahrelange Campingerfahrung können wir Sie in allen Belangen unterstützen.',
        imgUrl: `https://unsplash.it/300/300/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Abholung des Wohnmobils zum vereinbarten Termin',
        subheading: 'Detaillierte Einweisung in alle Bereiche',
        caption: 'Somit bekommen Sie Sicherheit für ihre Reise',
        imgUrl: `https://unsplash.it/300/300/?${Math.floor(Math.random(0,100) * 100)}`
       },
       {
        title: 'Jetzt beginnt Ihre Reise!',
        subheading: 'Strand, Stadt oder Berge?',
        caption: 'Mit unseren Wohnmobilen stehen Ihnen alle Möglichkeiten offen. ',
        imgUrl: `https://unsplash.it/300/300/?${Math.floor(Math.random(0,100) * 100)}`
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
        caption: 'Bitte hinterlassen Sie uns eine Bewertung bei Google.',
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