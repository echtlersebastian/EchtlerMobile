import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Carousel1 from '../assets/img/Carousel/1.jpg'
import Carousel2 from '../assets/img/Carousel/2.jpg'
import Carousel3 from '../assets/img/Carousel/3.jpg'
import Carousel4 from '../assets/img/Carousel/4.jpg'
import Carousel5 from '../assets/img/Carousel/5.jpg'
import Carousel6 from '../assets/img/Carousel/6.jpg'
import Carousel7 from '../assets/img/Carousel/7.jpg'
import Carousel8 from '../assets/img/Carousel/8.jpg'
import Carousel9 from '../assets/img/Carousel/9.jpg'
import Carousel10 from '../assets/img/Carousel/10.jpg'
import Carousel11 from '../assets/img/Carousel/11.jpg'
import Carousel12 from '../assets/img/Carousel/12.jpg'
import Carousel13 from '../assets/img/Carousel/13.jpg'
import Carousel14 from '../assets/img/Carousel/14.jpg'
import Carousel15 from '../assets/img/Carousel/15.jpg'
import Carousel16 from '../assets/img/Carousel/16.jpg'
import Carousel17 from '../assets/img/Carousel/17.jpg'
import Carousel18 from '../assets/img/Carousel/18.jpg'
import Carousel19 from '../assets/img/Carousel/19.jpg'
import Carousel20 from '../assets/img/Carousel/20.jpg'
import Carousel21 from '../assets/img/Carousel/21.jpg'

export default () => {
    return(
    <div className="container">
            <Carousel
            slidesPerPage={1}
            slidesPerScroll={1}
            animationSpeed={4500}
            autoPlay={1600}
            stopAutoPlayOnHover
            offset={1500}
            itemWidth={250}
            clickToChange
            centered
            dots
            >
            <img img-fluid src={Carousel1} alt ="" />
                    <img img-fluid src={Carousel1} alt ="" />
                    <img img-fluid src={Carousel1} alt ="" />
                    <img img-fluid src={Carousel1} alt ="" />
                    <img img-fluid src={Carousel1} alt ="" />
                    <img img-fluid src={Carousel1} alt ="" />
                    <img img-fluid src={Carousel1} alt ="" />
                    <img img-fluid src={Carousel1} alt ="" />
            </Carousel>
        
            </div>
            )
    
}
 