import React from 'react'
import { Row } from "react-bootstrap"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import images from "../../assets/img/test.jpg"

export default () => {
return(
    <div className = "container">
        <Row>
        <div className= "col-lg-6">
          <div>
            <Carousel 
            slidesPerPage={5}
            slidesPerScroll={1}
            animationSpeed={1500}
            autoPlay={3000}
            stopAutoPlayOnHover
            offset={50}
            itemWidth={350}
            clickToChange
            centered
            >
            <img alt ="" src={images} />
              <img alt ="" src={images} />
              <img alt ="" src={images} />
              <img alt ="" src={images} />
              <img alt ="" src={images} />
              <img alt ="" src={images} />
          </Carousel>
          </div>
        </div>
        <div className= "col-lg-6">
              <div className="content-heading"><h3>Experience nfhgfghbsp </h3></div>
                <p>Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                <p>Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                <p>Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
        
     </div>
     </Row>
</div>     

  )
}