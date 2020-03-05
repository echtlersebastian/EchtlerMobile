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
    <div>
            <Carousel
            slidesPerPage={1}
            slidesPerScroll={1}
            animationSpeed={5000}
            autoPlay={1600}
            stopAutoPlayOnHover
            offset={1700}
            itemWidth={1600}
            clickToChange
            centered
            dots
            >
            <img img-fluid src={Carousel1} alt ="" />
                    <img img-fluid src={Carousel2} alt ="" />
                    <img img-fluid src={Carousel3} alt ="" />
                    <img img-fluid src={Carousel4} alt ="" />
                    <img img-fluid src={Carousel5} alt ="" />
                    <img img-fluid src={Carousel6} alt ="" />
                    <img img-fluid src={Carousel7} alt ="" />
                    <img img-fluid src={Carousel8} alt ="" />
                    <img img-fluid src={Carousel9} alt ="" />
                    <img img-fluid src={Carousel10} alt ="" />
                    <img img-fluid src={Carousel11} alt ="" />
                    <img img-fluid src={Carousel12} alt ="" />
                    <img img-fluid src={Carousel13} alt ="" />
                    <img img-fluid src={Carousel14} alt ="" />
                    <img img-fluid src={Carousel15} alt ="" />
                    <img img-fluid src={Carousel16} alt ="" />
                    <img img-fluid src={Carousel17} alt ="" />
                    <img img-fluid src={Carousel18} alt ="" />
                    <img img-fluid src={Carousel19} alt ="" />
                    <img img-fluid src={Carousel20} alt ="" />
                    <img img-fluid src={Carousel21} alt ="" />
            </Carousel>
        
            </div>
            )
    
}
 