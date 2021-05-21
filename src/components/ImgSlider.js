import React,{ Component } from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Link} from 'react-router-dom';

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings}>
            <Link to={`/detail/464052/movie`}> 
           <Wrap>
                <img src='/images/ss1.jpg' alt="PromoImage"/>
           </Wrap>
           </Link>
           <Link to={`/detail/125481/tv`}> 
           <Wrap>
                <img src='/images/ss2.jpg ' alt="PromoImage"/>
           </Wrap>
           </Link>
           <Link to={`/detail/577922/movie`}> 
           <Wrap>
                <img src='/images/ss3.jpg ' alt="PromoImage"/>
           </Wrap>
           </Link>
           <Link to={`/detail/567189/movie`}> 
           <Wrap>
                <img src='/images/ss4.jpg ' alt="PromoImage"/>
           </Wrap>
           </Link>
           <Link to={`/detail/615643/movie`}> 
           <Wrap>
                <img src='/images/ss5.jpg ' alt="PromoImage"/>
           </Wrap>
           </Link>
        </Carousel>
    )
}

export default ImgSlider;

const Carousel = styled(Slider)`
    margin-top: 80px;
    margin-bottom: 20px;
    ul li button{
        &:before{
            font-size:13px;
            color:white;
        }
    }
    li.slick-active button::before{
        color:white;
    }
    .slick-list{
        
    }
    .slick-dots{
        bottom:5px;
    }
    button{
        z-index: 1;
    }
    .slick-prev{
        left: 10px;
    }
    .slick-next {
    right: 10px;
    }

    
.slick-next:before, .slick-prev:before{
  width: 46px;
  height: 46px;
  content: '';
  position: absolute;
  top: -11px;
  left: -25px;
  background-image: url('/images/rightarr.png');
  background-color: transparent;
  background-repeat: no-repeat;
  vertical-align: middle;
  background-size: 46px;
  opacity: 1 ;
  }
  .slick-prev:before{
    left: -5px;
  background-image: url('/images/leftarr.png');
  }
`


const Wrap = styled.div`
    img{
        width: 100%;
        height: 100%;
        border-radius: 1px;
    }
`