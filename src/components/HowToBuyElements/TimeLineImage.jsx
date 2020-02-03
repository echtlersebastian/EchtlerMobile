import React from 'react'

export default ({imgUrl}) => {
return(    
    <div className="timeline-image">
        <img className="rounded-circle img-fluid" src={imgUrl}  alt=""/>
    </div>

    )
}