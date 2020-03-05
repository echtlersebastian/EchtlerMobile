import React from 'react'
import { Row, Col, ListGroup } from "react-bootstrap"


export default (props) => {

  return (
    <div>
     <div class="container">
      <div class="card-deck mb-3 text-center">
      <div class="card mb-4 box-shadow" >
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Nebensaison</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">99€ <small class="text-muted">/ Tag</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>01.03.20 - 27.03.20</li>
            </ul>
          </div>
        </div>
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Zwischensaison</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">109€ <small class="text-muted">/ Tag</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>28.03.20 - 03.04.20</li>
              <li>25.04.20 - 29.05.20</li>
              <li>27.06.20 - 17.07.20</li>
              <li>12.09.20 - 07.11.20</li>
            </ul>
          </div>
        </div>
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Hauptsaison</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">129€ <small class="text-muted">/ Tag</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>04.04.20 - 24.04.20</li>
              <li>30.05.20 - 26.06.20</li>
              <li>18.07.20 - 11.09.20</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
        <div class="container">
        <Row className="block-example border border-light">
                  <Col>
                    <h5 align="middle">Servicepauschale <br/>Einmalig pro Anmietung:</h5>
                  </Col>
                  <Col md={8}>
                      
                    <h4 align="left">135€</h4>
                    <h6 align="left">Darin sind enthalten:</h6>
                    <p align="left">Ausführliche Einweisung in das Wohnmobil und Rücknahme, Schutzbrief (bei Unfall, Fahrerausfall und Panne), Verbandskasten und Feuerlöscher. Erstellung des Übergabe- und Abnahmeprotokolls.  </p>
                    
                  </Col>
                </Row>
                <Row className="block-example border border-light">
                  <Col>
                    <h5 align="middle">Wohnmobil Ausstattung:</h5>
                  </Col>
                  <Col md={8}>
                    <p align="left">Markise, Autom. SAT Antenne mit TV, Navigation für Wohnmobile, Radio, CD, Bluetooth,  Fahrradträger für 3 Fahrräder, Warntafel, 2 Ausgleichskeile, Wasserschlauch 15m, Stromkabel 20m mit CEE Stecker, eine volle 11kg Gasflasche, Melamin-Geschirr, Pfannen und Töpfe, Besteck, Gläser, Spülschüssel, WC-Sanitärzusatz und 2 Warnwesten. Bei uns ist auch der Campingtisch und 2 Stühle im Preis enthalten! Weiteres Zubehör und mögliches Wunschzubehör entnehmen Sie der Ausstattungsübersicht.</p>
                  </Col>
                </Row>
               
                <Row className="block-example border border-light">
                  <Col>
                    <h5 align="middle">Wunschleistungen:</h5>
                  </Col>
                  <Col md={8}>
                    <p align="left">Gasgrill, zus. Gasflasche, Handtücher, Betten-Set (Bettwäsche, Kissen und Decken), Winterreifen 99,00€, Schneeketten 75,00€. Andere Sonderwünsche vom Mieter sind nach vorheriger Absprache, gegen eine zu vereinbarende Gebühr, natürlich möglich.</p>
                  </Col>
                </Row>     
                <Row className="block-example border border-light">
                  <Col>
                    <h5 align="middle">Haustiere:</h5>
                  </Col>
                  <Col md={8}>
                    <p align="left">Wir haben ein Wohnmobil, bei dem Sie Ihr Haustier nach Absprache mitnehmen können. Bitte beachten Sie, dass wir für die zusätzliche Reinigung eine Pauschale von 75€ erheben.</p>
                  </Col>
                </Row>
                <Row className="block-example border border-light">
                  <Col>
                    <h5 align="middle">Zahlungsbedingungen:</h5>
                  </Col>
                  <Col md={8}>
                    <p align="left">Die Anzahlung auf eine Buchung beträgt 30% des Mietpreisreises, sofort. Der Restbetrag ist spätestens 21 Tage vor Reiseantritt auf unser unten aufgeführtes Konto zu überweisen.</p>
                  </Col>
                </Row>
                <Row className="block-example border border-light">
                  <Col>
                    <h5 align="middle">Kaution:</h5>
                  </Col>
                  <Col md={8}>
                    <p align="left">Die Kaution beträgt 1.500€. Diese ist im Voraus auf unser Konto zu überweisen. Nur nach vorheriger Absprache können wir eine Hinterlegung der Kaution bei Abholung des Fahrzeugs in bar akzeptieren.</p>
                  </Col>
                </Row>
                <Row className="block-example border border-light">
                  <Col>
                    <h5 align="middle">Rückgabe:</h5>
                  </Col>
                  <Col md={8}>
                    <p align="left">Das Fahrzeug ist grundsätzlich in dem Zustand zurückzugeben, wie es erhalten wurde (s. Übergabeprotokoll). Das Fahrzeug ist mit gefülltem Tank und innen gereinigt zurückzugeben. Die WC-Toilettenkassette muss geleert und gereinigt und der Grauwassertank geleert sein.</p>
                  </Col>
                </Row>
                <Row className="block-example border border-light">
                  <Col>
                    <h5 align="middle">Zusätzlich anfallende Kosten bei nicht vertragsgemäßer Rückgabe:</h5>
                  </Col>
                  <Col md={8}>
                    <p align="left">Toilettenreinigung 130,00€<br/>  Innenreinigung 100,00€<br/> Bei starker Verschmutzung im Außenbereich 100,00€.</p>
                  </Col>
                </Row>


        </div>

    </div>
    )
}