import React from 'react'
import styled from 'styled-components';
import TvshowsSlider from './TvShowsSlider';
import Row from './Row';

function Tvshows() {
    
    return (
        <>
        <TvshowsSlider/>
        <Container>
            <h3>Currently Running</h3>
            <Content>
                <Row fetchUrl='/discover/tv?api_key=93387002aad15200403aec30390a05a2&sort_by=popularity.desc&page=1&with_watch_providers=119' />
            </Content>
            <h3>Recommended For You</h3>
            <Content>
                <Row fetchUrl='/discover/tv?api_key=93387002aad15200403aec30390a05a2&with_genres=9648' />
            </Content>
            <h3>Trending Series</h3>
            <Content>
                <Row fetchUrl='/discover/tv?api_key=93387002aad15200403aec30390a05a2&sort_by=popularity.desc&page=2&with_original_language=en' />
            </Content>
            <h3>Some Collection</h3>
            <Content>
                <Row fetchUrl='/discover/tv?api_key=93387002aad15200403aec30390a05a2&sort_by=popularity.desc&page=1&with_genres=35' />
            </Content>
            <h3>Must Watch Series</h3>
            <Content>
                <Row fetchUrl='/discover/tv?api_key=93387002aad15200403aec30390a05a2&sort_by=popularity.desc&with_original_language=en&page=3' />
            </Content>
            <h3>High Viewership Series</h3>
            <Content>
                <Row fetchUrl='/discover/tv?api_key=93387002aad15200403aec30390a05a2&sort_by=popularity.desc&page=2&with_original_language=hi' />
            </Content>
        </Container>
        </>
    )
}

export default Tvshows;

const Container = styled.main`
    min-height : calc(100vh - 80px);padding: 30px;
    margin:10px;
    padding-top:0px;
    h3{
        margin-bottom: 0px;
        margin-top:5px;
    }
`



const Content= styled.div`
    display:grid;
    grid-gap: 8px;
    grid-template-columns: repeat(5,minmax(0,1fr));
    
    
`