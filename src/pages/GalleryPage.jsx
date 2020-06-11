import React from 'react'
import PhotoGallery from '../components/gallery/PhotoGallery'

// import '../assets/css/bootstrap.min.css';

export default () => {
  return(
    <div class = "content-body">
      <div class="container">      
        <h1>Das sind unsere Mobile!</h1>
        <PhotoGallery></PhotoGallery>
      </div>
    </div>
  )
}