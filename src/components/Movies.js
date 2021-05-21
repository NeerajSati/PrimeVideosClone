import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import requests from './requests';
function Movies() {
    return (
        <Container>
            <h3>Amazon Originals</h3>
            <Content>
                <Row fetchUrl={requests.fetchPrime} />
            </Content>
            <h3>Trending Now</h3>
            <Content>
                <Row fetchUrl={requests.fetchTrending} />
            </Content>
            <h3>Recently Released</h3>
            <Content>
                <Row fetchUrl={requests.fetchRecent} />
            </Content>
            <h3>In your Region</h3>
            <Content>
                <Row fetchUrl={requests.fetchHindi} />
            </Content>
            <h3>Comedy Movies</h3>
            <Content>
                <Row fetchUrl={requests.fetchComedy} />
            </Content>
            <h3>Tom Cruise Special</h3>
            <Content>
                <Row fetchUrl={requests.fetchTom} />
            </Content>
            <h3>Highest Grossing</h3>
            <Content>
                <Row fetchUrl={requests.fetchGrossing} />
            </Content>
            <h3>Horror Movies</h3>
            <Content>
                <Row fetchUrl={requests.fetchHorror} />
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    padding: 30px;
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
