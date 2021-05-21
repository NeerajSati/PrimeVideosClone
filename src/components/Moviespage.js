import React from 'react'
import styled from 'styled-components';
import MoviespageSlider from './MoviespageSlider';
import Row from './Row';


function Moviespage() {
    return (
        <>
            <MoviespageSlider />
            
        <Container>
        <h3>All Time Favourites</h3>
            <Content>
                <Row fetchUrl='/discover/movie?api_key=93387002aad15200403aec30390a05a2&language=en-US&region=IN&sort_by=popularity.desc&page=2' />
            </Content>
            <h3>Recommended for You</h3>
            <Content>
                <Row fetchUrl='/discover/movie?api_key=93387002aad15200403aec30390a05a2&language=en-US&region=IN&sort_by=popularity.desc&page=3' />
            </Content>
            <h3>Documentaries</h3>
            <Content>
                <Row fetchUrl='/discover/movie?api_key=93387002aad15200403aec30390a05a2&sort_by=popularity.desc&with_genres=35' />
            </Content>
            <h3>Musical Movies</h3>
            <Content>
                <Row fetchUrl='/discover/movie?api_key=93387002aad15200403aec30390a05a2&sort_by=popularity.desc&with_genres=10402' />
            </Content>

            <h3>High Grossing Movies</h3>
            <Content>
        <Row fetchUrl='/discover/movie?api_key=93387002aad15200403aec30390a05a2&region=IN&sort_by=revenue.desc' />
            </Content>
        <h3>Must Watch Movies</h3>
        <Content>
        <Row fetchUrl='/discover/movie?api_key=93387002aad15200403aec30390a05a2&certification.lte=G' />
        </Content>
        <h3>Animation For you</h3>
        <Content>
                    <Row fetchUrl='/discover/movie?api_key=93387002aad15200403aec30390a05a2&with_genres=16&page=2' />
            </Content>
        </Container>
        </>
    )
}

export default Moviespage;

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

