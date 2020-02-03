import React from 'react'
import TimeLineImage from './TimeLineImage'

class TimeLineInverted extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<li className="timeline-inverted">
                <TimeLineImage imgUrl = {this.props.imgUrl}></TimeLineImage>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>{this.props.title}</h4>
                        <h4 className="subheading">{this.props.subheading}</h4>
                    </div>
                    <div className="timeline-body">
                        <p className="text-muted">{this.props.caption}</p>
                    </div>
                </div>
        </li>   
      )
}
}

export default TimeLineInverted;
// export default (title,subheading,caption,imgUrl) => {
// return(    
           
//                 <li className="timeline-inverted">
//                     <TimeLineImage imgUrl = {imgUrl}></TimeLineImage>
//                     <div className="timeline-panel">
//                         <div className="timeline-heading">
//                             <h4>{title}</h4>
//                             <h4 className="subheading">{subheading}</h4>
//                         </div>
//                         <div className="timeline-body">
//                             <p className="text-muted">{caption}</p>
//                         </div>
//                     </div>
//                 </li>
           
//     )
// }