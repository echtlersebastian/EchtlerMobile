import React from 'react'
import { Row,Col } from "react-bootstrap"

export default () => {
    return(
    <div className = "container">
       
        <Row>
<div class="col-6 col-md-3"><span class="font-weight-bold">Baujahr</span></div>
<div class="col-6 col-md-3"><span >2018</span></div>
<div class="col-6 col-md-3"><span class="font-weight-bold">Typ</span></div>
<div class="col-6 col-md-3"><span>Teilintegriert</span></div>
</Row>
        <Row>
<div class="col-6 col-md-3"><span class="font-weight-bold">Zulässiges Gesamtgewicht</span></div>
<div class="col-6 col-md-3"><span>3500</span></div>
<div class="col-6 col-md-3"><span class="font-weight-bold">benötigte Führerscheinklasse</span></div>
<div class="col-6 col-md-3"><span>3</span></div>
</Row>        
<Row>
<div class="col-6 col-md-3"><span class="font-weight-bold">Schlafplätze</span></div>
<div class="col-6 col-md-3"><span >3</span></div>
<div class="col-6 col-md-3"><span class="font-weight-bold">Leistung (PS)</span></div>
<div class="col-6 col-md-3"><span class="ng-star-inserted">163</span></div>
</Row>

</div>
)
}