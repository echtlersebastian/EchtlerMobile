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
  renderTimeLine(){
    let timeLine;
    var counter = 0;


const result = this.state.timeLineItems.map(({ title, subheading, caption, imgUrl }) =>
 {
    if ((counter % 2) === 1){   
      this.counter = this.counter +1;
      return <TimeLineInverted title = {title} subheading = {subheading} caption = {caption} imgUrl = {imgUrl}></TimeLineInverted>
  }
  else
  {
    this.counter = this.counter +1;
    return <TimeLinePannel  title = {title} subheading = {subheading} caption = {caption} imgUrl = {imgUrl}></TimeLinePannel>
  }
});
debugger;
console.log(result);
return result;

};

render (){
return(
    <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Ihr Weg zum Urlaub im Wohnmobil</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            
              {/* {this.renderTimeLine()} */}
              {/* {  this.props.timeLineItems.map((item, index)=>
                 
                )} */}
                {  
                this.props.timeLineItems.map((item, index) => 
                    index % 2 === 0 ? <TimeLinePannel title = {item.title} subheading = {item.subheading} caption = {item.caption} imgUrl = {item.imgUrl}/> : <TimeLineInverted title = {item.title} subheading = {item.subheading} caption = {item.caption} imgUrl = {item.imgUrl}/>
                
                  
                )}
            
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
};

export default TimeLine;