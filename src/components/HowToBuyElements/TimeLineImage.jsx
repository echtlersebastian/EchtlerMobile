import React from 'react'

export default () => {
return(    
    <div className="timeline-image">
        <img className="rounded-circle img-fluid" src={ `https://unsplash.it/350/350/?${Math.floor(Math.random(0,100) * 100)}` } alt=""/>
    </div>

    )
}