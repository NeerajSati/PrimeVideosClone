import React, { useEffect, useState } from 'react';
import axios from'./axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const baseURL= "https://image.tmdb.org/t/p/original/";
function Row({fetchUrl}){


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        }
      ]
      };


    const [movies, setMovies] = useState([]);
    let mymedia;
    if(fetchUrl[10]=='m')
    {   mymedia = 'movie';  }
    else{   mymedia = 'tv'; }

    useEffect (() => {
            async function fetchData(){
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
                return request;
            }
            fetchData();
    }, [fetchUrl]);

    return(
                <>
                <MySlides {...settings}>
                    {movies.map(movie =>(
                        
                <Wrap>
                        <Link to={`/detail/${movie.id}/${mymedia}`}> 
                        <img key={movie.id} src={`${baseURL}${movie.backdrop_path}`} alt={movie.name}
                        onError={(e)=>{e.target.onerror = null; e.target.src="/images/thumbnail.jpg"}}></img>
                         </Link>
                        
                </Wrap>

                    ))}
                </MySlides>
                </>
    )
}
export default Row;


const Wrap= styled.div`
    border-radius: 3px;
    overflow: visible;
    div{
        color: red;
        display: none;
        height: 0px;
    }
    img{
        max-width: 22.5vw;
        object-fill: cover;
        overflow: hidden;
        padding: 20px;
    }
    transition: none 2s cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    &:hover{
        transition: none 2s cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        cursor:pointer;
        transform: scale(1.1);
        z-index: 1;
        overflow: visible;

    }
    
`

const MySlides = styled(Slider)`
overflow: visible;
    width: calc(100vw - 100px);
    .slick-next:before, .slick-prev:before{
        z-index: 2;
        width: 46px;
        height: 46px;
        content: '';
        position: absolute;
        top: -11px;
        left: -0.5vw;
        background-image: url('/images/rightarr.png');
        background-color: transparent;
        background-repeat: no-repeat;
        vertical-align: middle;
        background-size: 46px;
        opacity: 1 ;
        transform: scale(0.75);
        }
        .slick-prev:before{
            left: -19px;
    transform: scale(0.7);
          background-image: url('/images/leftarr.png');
          }
        .slick-disabled:before{
            display:none;
        }
        .slick-slide{
        }
`