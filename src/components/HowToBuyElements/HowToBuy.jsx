import React from 'react'
import TimeLineImage from './TimeLineImage';
import TimeLinePannel from './TimeLinePannel';
import TimeLineInverted from './TimeLineInverted';

export default () => {
return(
    <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">

            <TimeLineInverted></TimeLineInverted>
            <TimeLinePannel></TimeLinePannel>
            <TimeLineInverted></TimeLineInverted>
            <TimeLinePannel></TimeLinePannel>

            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part
                  <br/>Of Our
                  <br/>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

)

};