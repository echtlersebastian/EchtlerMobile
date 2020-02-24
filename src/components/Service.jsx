import React from 'react'

export default ({serviceLinks}) => {
return(
  
    <section className="page-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Sommer, Sonne, Meer</h2>
            <h3 className="section-subheading text-muted">Abenteuer und Freiheit - Mit dem Wohnmobil auf neuen Wegen.</h3>
          </div>
        </div>


        <div className="row text-center">
        {
                    serviceLinks && serviceLinks.map(({ title, caption,imgUrl }, index) =>


          <div className="col-md-4" key={index}> 
<br/><br/><br/>
            <div className="timeline-image">
        <img className="rounded-circle img-fluid" src={imgUrl}  alt=""/>
           {/* <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
        </span>*/}
        </div>
            <h4 className="service-heading">{ title }</h4>
            <p className="text-muted">{ caption }</p>
          </div>)
        }

        </div>
      </div>
    </section>


)
}