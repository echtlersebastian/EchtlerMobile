import React from 'react'

import '../assets/css/agency.css';

export default () => {
return(
  <div>

    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Echtler Mobile</a>
      
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
         
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/buchung">Jetzt buchen!</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/fotos">Bilder</a>
          </li>
       {/*    <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Wohnmobile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">Über uns</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Kontakt</a>
          </li>*/}

          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#footer">Impressum</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>

)
}