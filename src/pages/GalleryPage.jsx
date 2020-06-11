import React from 'react'
import PhotoGallery from '../components/gallery/PhotoGallery'

// import '../assets/css/bootstrap.min.css';

export default () => {
  return(
    <div>
      <header class="masthead">
          <div class="container">
              TODO nach vorlage umbauen https://startbootstrap.com/previews/agency/
              <div class="masthead-subheading">Welcome To Our Studio!</div>
              <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
              <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
          </div>
      </header>

      <div class="container">      
        <h1>Das sind unsere Mobile!</h1>
        <PhotoGallery></PhotoGallery>
      </div>
    </div>
  )
}