import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { GiPartyPopper } from 'react-icons/gi';
import { FiDownload } from 'react-icons/fi';
import { BiMessageDetail } from 'react-icons/bi';
import {AiFillStar} from 'react-icons/ai';
import { SiImdb} from 'react-icons/si';
import axios from './axios';
import {useParams} from 'react-router-dom';
import {Link} from "react-router-dom";

// https://api.themoviedb.org/3/movie/808023/videos?api_key=93387002aad15200403aec30390a05a2
function Detail() {

    let{ id, media }= useParams();
    let mykey= 'bwYIjBAqWHA';
    if(media==='undefined')
    media='tv';
    const [movie, setMovie] = useState([]);
    useEffect(() => {
            async function fetchData() {
                const request = await axios.get(`/${media}/${id}?api_key=93387002aad15200403aec30390a05a2`);
                setMovie(
                    request.data
                    );
                return request;
            }
            fetchData();
    }, []);



    const [myvideos, setMyvideos] = useState([]);
    useEffect(() => {
            async function fetchSome() {
                const videorequest = await axios.get(`/${media}/${id}/videos?api_key=93387002aad15200403aec30390a05a2`);
                setMyvideos(
                    videorequest.data.results
                    );
                return videorequest;
            }
            fetchSome();
    }, []);
    myvideos.map(myvideo =>{
        if(myvideo.site === 'YouTube')
        mykey = myvideo.key;
    });


    let imgurl=`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;
    let haveSeasons=`${movie.number_of_seasons} seasons`;
    if(movie.number_of_seasons === undefined)
    {
        haveSeasons='';
    }
    return (
        <Container>
            <Background>
            <img src={imgurl} alt="PromoImage"
            onError={(e)=>{e.target.onerror = null; e.target.src="/images/thumbnail.jpg"}}></img>
            </Background>
            <Text>
            <ImageTitle>
                <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
            </ImageTitle>
            <SubTitle>
            <SiImdb  /> {movie?.vote_average} <AiFillStar/> {haveSeasons} {movie?.runtime || movie?.episode_run_time} min {movie?.release_date || movie?.first_air_date} X-Ray 13+ <BiMessageDetail/>
            </SubTitle>
            
            <Description>
                    {movie.overview}
            </Description>
            <Controls>
                <Link to= {`/video/${mykey}`}>
                <PlayButton >
                    <BsFillPlayFill color="white" size="50px"/>
                    <span>Play</span>
                </PlayButton>
                </Link>
                <WatchlistButton>
                    <AiOutlinePlus  size="35px"/>
                </WatchlistButton>
                <ChatButton>
                    <GiPartyPopper size="28px"/>
                </ChatButton>
                <DownloadButton>
                    <FiDownload size="27px" weight="80"/>
                </DownloadButton>
            </Controls>
            <SubTitle2>
            By clicking play, you agree to our <span href="https://www.google.com">Terms of Use.</span>
            </SubTitle2>
            </Text>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height : calc(100vh - 80px);
    padding-top: 80px;
`

const Background = styled.div`
    position:fixed;
    left:0;
    bottom:0;
    right:0;
    top:0;
    z-index:-1;
    opacity: 0.7;
    img{
        transform: translateX(200px) translateY(70px);
        width:100%;
        height:100%;
        object-fit:cover;
    }
`
const ImageTitle = styled.div`
    h1{
        font-weight: 500;
        font-size: 35px;
        letter-spacing:1px;
        
    margin:0px;
    margin-top: 0px;
    }
`

const Text= styled.div`
    padding:50px;
    padding-top:40px;
    padding-bottom: 0px;
    min-height: calc(100vh - 80px);
    background-image: linear-gradient(to right, #0F171E 37%, transparent 60%);
`

const Controls= styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 30px;
`


const PlayButton= styled.button`
    
    background-color: #0F79AF;
    color:white;
    padding-left: 10px;
    padding-top:5px;
    padding-bottom:8px;
    margin-right:20px;
    border-radius: 3px;
    width: 118px;
    height: 70px;
    border:none;
    display:flex;
    align-items:center;
    span{
        margin-left: 5px;
        margin-top: 5px;
        font-size: 17px;
    }
    &:hover{
        background-color: #1399DE;
        cursor:pointer;
    }
`

const WatchlistButton= styled.button`
margin:7px;
width:48px;
height: 48px;
    border-radius:50%;
    background-color: #425265;
    color: #bdc5c9;
    padding:7px;
    border:none;
    
    &:hover{
        background-color: #566B84;
    color: white;
    cursor: pointer;        
    }
`

const ChatButton= styled.button`
width:48px;
height: 48px;
border-radius:50%;
    background-color: #425265;
    color: #bdc5c9;
    border:none;
    margin:7px;
    
    &:hover{
        background-color: #566B84;
    color: white;
    cursor: pointer;        
    }
`

const DownloadButton= styled.button`
margin:7px;
width:48px;
height: 48px;
border-radius:50%;
    background-color: #425265;
    color: #bdc5c9;
    border:none;
    &:hover{
        background-color: #566B84;
    color: white;
    cursor: pointer;        
    }

`


const SubTitle= styled.div`
    color: #7D939F;
    font-size: 19px;
    min-height: 20px;
    margin-top: 20px;
    margin-bottom: 10px;

`
const Description= styled.div`
    margin-top: 20px;
    font-size: 18px;
    @media only screen and (min-width: 1000px) {
        width:800px;
    }

`
const SubTitle2= styled.div`

    color: #7C919E;
    font-size: 15px;
    font-weight: 400;
    min-height: 20px;
    margin-top: 15vh;
    padding-bottom: 30px;
    bottom: 0;
    span{
        color:#0c8dce;
        &:hover{
            color: #35b9fc;
            cursor:pointer;
        }
    }
    
`
