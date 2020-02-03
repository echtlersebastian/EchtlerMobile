import React from 'react'
import TimeLineImage from './TimeLineImage'

export default ({title,subheading,caption,imgUrl}) => {
return(  <li className="timeline-pannel">
            <TimeLineImage imgUrl ={imgUrl}></TimeLineImage>
            <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4>{title}</h4>
                    <h4 className="subheading">{subheading}</h4>
                </div>
                <div className="timeline-body">
                    <p className="text-muted">{caption}</p>
                </div>
            </div>
        </li>


    )
}