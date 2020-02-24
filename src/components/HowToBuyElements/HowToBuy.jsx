import React from 'react'
import TimeLinePannel from './TimeLinePannel';
import TimeLineInverted from './TimeLineInverted';
//import { render } from '@testing-library/react';


class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLineItems: props.timeLineItems
    };
    this.renderTimeLine = this.renderTimeLine.bind(this);
  }
  renderTimeLine() {
    let timeLine;
    var counter = 0;


    const result = this.state.timeLineItems.map(({ title, subheading, caption, imgUrl }, index) => {
      if ((counter % 2) === 1) {
        this.counter = this.counter + 1;
        return <TimeLineInverted key={index} title={title} subheading={subheading} caption={caption} imgUrl={imgUrl}></TimeLineInverted>
      }
      else {
        this.counter = this.counter + 1;
        return <TimeLinePannel key={index} title={title} subheading={subheading} caption={caption} imgUrl={imgUrl}></TimeLinePannel>
      }
    });
    console.log(result);
    return result;
  };

  render() {
    return (
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Losgelöst von Zeit und Raum ist Erholung sicher</h2>
              <h3 className="section-subheading text-muted">Ihr persönlicher Weg zum Wohnmobil mit Echtler-Mobile</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">            
                {
                  this.props.timeLineItems.map((item, index) =>
                    index % 2 === 0 ? <TimeLinePannel key={index} title={item.title} subheading={item.subheading} caption={item.caption} imgUrl={item.imgUrl} /> : <TimeLineInverted key={index} title={item.title} subheading={item.subheading} caption={item.caption} imgUrl={item.imgUrl} />                 )}

                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>Echtler- Mobile wünscht eine gute Reise! </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    )

  };
};

export default TimeLine;