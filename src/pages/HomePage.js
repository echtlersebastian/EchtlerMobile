import React, { useEffect } from 'react';
import '../App.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/agency.css';
import 'react-toastify/dist/ReactToastify.css';
import Portfolio from '../components/Portfolio';
import Service from '../components/Service';
import Masterhead from '../components/Masterhead';
import HowToBuyElements from '../components/HowToBuyElements/HowToBuy';
import WohnmobilDetails from '../components/Modlas/WohnmobilDetails';
import AustattungsDetails from '../components/Modlas/AusstattungsDetails';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import ExtrasDetails from "../components/Modlas/ExtrasDetails"
import {ToastContainer, toast} from "react-toastify";
import Preisliste from '../components/Modlas/Preisliste';
import AgbModal from '../components/Modlas/AGBModal';
import PacklisteModal from '../components/Modlas/PacklisteDetails';
import WohnmobilPortfolioBild from '../assets/img/ModalPictures/Wohnmobil.png'
import AusstattungPortfolioBild from '../assets/img/ModalPictures/Ausstattung.png'
import ExtrasPortfolioBild from '../assets/img/ModalPictures/Extras.png'
import PacklistePortfolioBild from '../assets/img/ModalPictures/Packliste.png'
import PreislistePortfolioBild from '../assets/img/ModalPictures/Preisliste.png'
import AGBPortfolioBild from '../assets/img/ModalPictures/AGB.png'
import BergreiseImg from '../assets/img/Portfolio/Bergreise300x300.png'
import FreiImg from '../assets/img/Portfolio/Frei300x300.png'
import StaedtereiseImg from '../assets/img/Portfolio/Stadtereise300x300.png'
import StrandurlaubImg from '../assets/img/Portfolio/Strandurlaub300x300.png'
import UrlaubImg from '../assets/img/Portfolio/Urlaub300x300.png'
import WildCampenImg from '../assets/img/Portfolio/WildCampen300x300.png'
import TimeLine1Img from '../assets/img/TimeLine/1.png'
import TimeLine2Img from '../assets/img/TimeLine/2.png'
import TimeLine3Img from '../assets/img/TimeLine/3.png'
import TimeLine4Img from '../assets/img/TimeLine/4.png'
import TimeLine5Img from '../assets/img/TimeLine/5.png'
import TimeLine6Img from '../assets/img/TimeLine/6.png'
import TimeLine7Img from '../assets/img/TimeLine/7.png'
import TimeLine8Img from '../assets/img/TimeLine/8.png'
import ReactGa from 'react-ga'


function HomePage() {

useEffect(() =>{
//ReactGa.initialize('UA-159130984-1')
ReactGa.pageview('/')

}, [])

    toast.configure();
    const portfolioLinks = [

      {
        title: 'Unsere Wohnmobile',
        caption: 'Schauen Sie sich hier unsere Wohnmobile an.',
        image: WohnmobilPortfolioBild,
        content : <WohnmobilDetails/>,
        analytics : '/Wohnmobile'
       },
       {
        title: 'Ausstattung',
        caption: 'Vieles das Sie brauchen, ist bei uns im Preis enthalten.',
        image: AusstattungPortfolioBild,
        content : <AustattungsDetails/> ,
        analytics : '/Ausstattung'
       },
       {
        title: 'Mögliche Extras',
        caption: 'Bei uns bleiben keine Wünsche offen.',
        image: ExtrasPortfolioBild,
        content : <ExtrasDetails/>,
        analytics : '/Extras'
       },
       {
        title: 'Packliste',
        caption: 'Damit Sie nichts vergessen.',
        image: PacklistePortfolioBild,
        content : <PacklisteModal></PacklisteModal>,
        analytics : '/Packliste'
       },
       {
        title: 'Preisliste 2020',
        caption: 'Unser aktuelles Angebot für Sie!',
        image: PreislistePortfolioBild,
        content : <Preisliste></Preisliste>,
        analytics : '/Preisliste'
       },
       {
        title: 'AGB',
        caption: 'Unsere Vertragsbedingungen',
        image: AGBPortfolioBild,
        content : <AgbModal></AgbModal>,
        analytics : '/AGB'
       }
    ]

    const serviceLinks = [
      {
        title: 'Freie Zeit?',
        caption: 'Genießen Sie Ihren Urlaub mit Echtler-Mobile' ,
        imgUrl: UrlaubImg
       },
       {
        title: 'Freiheit',
        caption: 'Egal wann, egal wohin' ,
        imgUrl: FreiImg
       },
       {
        title: 'Ihre Entscheidung',
        caption: 'Wild oder gepflegt am Campingplatz wohnen.' ,
        imgUrl: WildCampenImg
       },
       {
        title: 'Städtereisen',
        caption: ''  ,
        imgUrl: StaedtereiseImg
       },
       {
        title: 'Bergfahrten',
        caption: '' ,
        imgUrl: BergreiseImg
       },
       {
        title: 'Familienurlaub am Meer',
        caption: '' ,
        imgUrl: StrandurlaubImg
       }
    ]
    
    const TimeLineItems = [
      {
        title: 'Na, haben Sie nun Lust zu campen?',
        subheading: 'Freiheit – Unabhängigkeit - Abenteuer',
        caption: 'Mit Echtler Mobile in wenigen Schritten zum Traumurlaub!',
        imgUrl: TimeLine1Img
       },
       {
        title: 'Kontaktieren Sie uns!',
        subheading: 'Wir schicken Ihnen ein Angebot.',
        caption: 'Schicken Sie uns eine E-Mail, rufen Sie uns an oder füllen Sie unten das Anfrageformular aus!', 
        imgUrl: TimeLine2Img
       },
       {
        title: 'Komplettpaket bei Echtler-Mobile!',
        subheading: 'Großes Angebot an Ausstattung',
        caption: 'Fehlt Ihnen noch etwas? Sprechen Sie mit uns und Sie können gerne Extras dazubuchen. ',
        imgUrl:TimeLine3Img
       },
       {
        title: 'Fragen?',
        subheading: 'Wenden Sie sich gerne an uns!',
        caption: 'Durch jahrelange Campingerfahrung können wir Sie in allen Belangen unterstützen.',
        imgUrl: TimeLine4Img
       },
       {
        title: 'Abholung des Wohnmobils zum vereinbarten Termin',
        subheading: 'Detaillierte Einweisung in alle Bereiche',
        caption: 'Somit bekommen Sie Sicherheit für Ihre Reise.',
        imgUrl: TimeLine5Img
       },
       {
        title: 'Jetzt beginnt Ihre Reise!',
        subheading: 'Strand, Stadt oder Berge?',
        caption: 'Mit unseren Wohnmobilen stehen Ihnen alle Möglichkeiten offen. ',
        imgUrl: TimeLine6Img
       },
       {
        title: 'Rückgabe des Wohnmobils zum vereinbarten Termin',
        subheading: 'Die Abnahme erfolgt unkompliziert und professionell.',
        caption: 'Haben Sie keine Lust auf eine Endreinigung? - Wir übernehmen das gerne für Sie!',
        imgUrl: TimeLine7Img
       },
       {
        title: 'Hat Ihnen unser Service gefallen?',
        subheading: '',
        caption: 'Bitte hinterlassen Sie uns eine Bewertung bei Google.',
        imgUrl: TimeLine8Img
       }
    ]

  return (
    <div>
        <ToastContainer/>
        <Masterhead></Masterhead>
        <Portfolio portfolioLinks = {portfolioLinks}></Portfolio>
        <Service serviceLinks = {serviceLinks}></Service>
          
        <HowToBuyElements timeLineItems = {TimeLineItems}></HowToBuyElements>
    
        <ContactUs></ContactUs>
        
        <Footer></Footer>
        
    </div>
  );
}
export default HomePage;