import React from 'react'
import { Row, Col, ListGroup, Image, ListGroupItem } from "react-bootstrap"

import PacklistePdf from '../../assets/img/Packliste 2020.pdf';

export default () => {
  return (  
    <div className ="container">
 <a href={PacklistePdf} download>Hier können Sie sich diese Liste auch herunterladen.</a><br/><br/>

    <Row>
    <Col>
      <ListGroup>
        <ListGroup.Item active>Wichtiges</ListGroup.Item>    
      <ListGroup.Item>ACSI– Karte (Verbilligte Campingplätze)</ListGroup.Item>
<ListGroup.Item>Pass</ListGroup.Item>
<ListGroup.Item>Vignette (Österreich, Schweiz, Slowenien)</ListGroup.Item>
<ListGroup.Item>Geld und EC-Karten</ListGroup.Item>
<ListGroup.Item>Womo-Schlüssel</ListGroup.Item>
<ListGroup.Item>Fahrzeugschein</ListGroup.Item>
<ListGroup.Item>grüne Vers.-Karte</ListGroup.Item>
<ListGroup.Item>Handy</ListGroup.Item>
<ListGroup.Item>Handy-Ladekabel</ListGroup.Item>
<ListGroup.Item>Foto, Kamera</ListGroup.Item>
<ListGroup.Item>Laptop</ListGroup.Item>
<ListGroup.Item>Brille</ListGroup.Item>
<ListGroup.Item>Sonnenbrille</ListGroup.Item>
      </ListGroup>
    </Col>

    <Col>
      <ListGroup>
        <ListGroup.Item active>Bad</ListGroup.Item>      
        
<ListGroup.Item>Bademantel</ListGroup.Item>
<ListGroup.Item>Badeschlappen</ListGroup.Item>
<ListGroup.Item>Duschtasche</ListGroup.Item>
<ListGroup.Item>Tempos</ListGroup.Item>
<ListGroup.Item>Klo-Papier</ListGroup.Item>
<ListGroup.Item>Shampoo / Spülung</ListGroup.Item>
<ListGroup.Item>Creme</ListGroup.Item>
<ListGroup.Item>Sonnencreme</ListGroup.Item>
<ListGroup.Item>Duschgel</ListGroup.Item>
<ListGroup.Item>Bürste</ListGroup.Item>
<ListGroup.Item>Föhn</ListGroup.Item>
      </ListGroup>
    </Col> 
    
    
    <Col>
      <ListGroup>
        <ListGroup.Item active>Kleidung</ListGroup.Item>      
        
<ListGroup.Item>Hose lang</ListGroup.Item>
<ListGroup.Item>Hose kurz</ListGroup.Item>
<ListGroup.Item>Kleid</ListGroup.Item>
<ListGroup.Item>Hemd</ListGroup.Item>
<ListGroup.Item>Pulli</ListGroup.Item>
<ListGroup.Item>Top</ListGroup.Item>
<ListGroup.Item>T-Shirt</ListGroup.Item>
<ListGroup.Item>Unterwäsche</ListGroup.Item>
<ListGroup.Item>Socken</ListGroup.Item>
<ListGroup.Item>Jacke</ListGroup.Item>
<ListGroup.Item>Schlafanzug</ListGroup.Item>
<ListGroup.Item>Jogginghose</ListGroup.Item>
<ListGroup.Item>Sportbekleidung</ListGroup.Item>
<ListGroup.Item>Schuhe</ListGroup.Item>
      </ListGroup>
    </Col>

    <Col>
      <ListGroup>
        <ListGroup.Item active>Medizin</ListGroup.Item>      
        
<ListGroup.Item>pers. Medikamente</ListGroup.Item>
<ListGroup.Item>Schmerzmittel</ListGroup.Item>
<ListGroup.Item>Pflaster</ListGroup.Item>
<ListGroup.Item>Sprüh- Pflaster</ListGroup.Item>
<ListGroup.Item>Binde</ListGroup.Item>
      </ListGroup>
    </Col>
    </Row>
    <Row>
    
    <Col>
      <ListGroup>
        <ListGroup.Item active>Strand / Sonne</ListGroup.Item>      
        <ListGroup.Item>Picknickdecke</ListGroup.Item>
<ListGroup.Item>Gr. Handtücher</ListGroup.Item>
<ListGroup.Item>Angelsachen</ListGroup.Item>
<ListGroup.Item>Badetasche</ListGroup.Item>
<ListGroup.Item>Sonnenschirm</ListGroup.Item>
<ListGroup.Item>Strandmatte/Iso-Matte</ListGroup.Item>
<ListGroup.Item>Badeanzug/Bikini/Badehose</ListGroup.Item>
<ListGroup.Item>Taucherbrille/Schnorchel</ListGroup.Item>
<ListGroup.Item>Luftmatratze</ListGroup.Item>
<ListGroup.Item>Sonnenhut/Mütze</ListGroup.Item>
<ListGroup.Item>Ball/Federball</ListGroup.Item>
<ListGroup.Item>Sandspielzeug</ListGroup.Item>
<ListGroup.Item>Schaufel</ListGroup.Item>
      </ListGroup>
    </Col>
    <Col>
      <ListGroup>
        <ListGroup.Item active>Sport / Hobby</ListGroup.Item>      
        

<ListGroup.Item>Bücher/Zeitschriften</ListGroup.Item>
<ListGroup.Item>Sportausrüstung</ListGroup.Item>
<ListGroup.Item>Sportschuhe</ListGroup.Item>
<ListGroup.Item>Sportgeräte</ListGroup.Item>
<ListGroup.Item>Spiele </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col>
      <ListGroup>
        <ListGroup.Item active>Kochen</ListGroup.Item>      
        
<ListGroup.Item>Essen</ListGroup.Item>
<ListGroup.Item>Getränke</ListGroup.Item>
<ListGroup.Item>Gewürze</ListGroup.Item>
<ListGroup.Item>Küchenkrepp</ListGroup.Item>
<ListGroup.Item>Geschirrtücher</ListGroup.Item>
<ListGroup.Item>Wasserkocher</ListGroup.Item>
<ListGroup.Item>Kaffeemaschine</ListGroup.Item>
      </ListGroup>
    </Col>
    <Col>
      <ListGroup>
        <ListGroup.Item active>Sonstiges</ListGroup.Item>      
        
<ListGroup.Item>Campingteppich</ListGroup.Item>
<ListGroup.Item>Radio</ListGroup.Item>
<ListGroup.Item>Rucksack</ListGroup.Item>
<ListGroup.Item>Mülltüten</ListGroup.Item>
<ListGroup.Item>Spülmittel/Putzzeug</ListGroup.Item>
<ListGroup.Item>Gas</ListGroup.Item>
<ListGroup.Item>Kerzen</ListGroup.Item>
<ListGroup.Item>Regenschirm </ListGroup.Item>
      </ListGroup>
    </Col>
  </Row>
    </div>


    )
}