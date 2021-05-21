import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

function Video() {
    let{ key }= useParams();
    let vidKey=`https://www.youtube.com/embed/${key}?autoplay=1&loop=1&modestbranding=1&color=white&iv_load_policy=3 allowfullscreen`;

    return (
        
        <>
        <Container>
            <h2>Now Playing</h2>
            <VidContainer>
            <iframe id="ytplayer" type="text/html" width="720" height="405"
src={vidKey}
frameborder="0" allowfullscreen />
            </VidContainer>
        </Container>
        </>
    )
}


export default Video;


const Container = styled.div`
    height : calc(100vh - 80px);
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;

`
const VidContainer = styled.div`
overflow: hidden;
position: relative;
width:60%;
&:after{
    padding-top: 56.25%;
    display: block;
    content: '';
}
iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
`