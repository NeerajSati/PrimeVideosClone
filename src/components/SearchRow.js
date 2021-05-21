import React, { useEffect, useState } from 'react';
import axios from'./axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const baseURL= "https://image.tmdb.org/t/p/original";
function Row({fetchUrl}){

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
                    {movies.map(movie =>(
                        (movie.media_type==='person') ?
                        ('') :
                <Wrap>
                        <Link to={`/detail/${movie.id}/${movie.media_type}`}> 
                        <img key={movie.id} src={`${baseURL}${movie.backdrop_path}`} alt={movie?.name || movie?.title} 
                        onError={(e)=>{e.target.onerror = null; e.target.src="/images/thumbnail.jpg"}}></img>
                         </Link>
                        
                </Wrap>
                    ))}
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